import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

const DEFAULT_TEST_TRIGGER = "bridge-plugin-test";
const ENGLISH_TECH_TERMS = [
  "openclaw",
  "plugin",
  "plugins",
  "skill",
  "skills",
  "memory",
  "vector",
  "github",
  "git",
  "repo",
  "runbook",
  "config",
  "docs",
  "doctor",
  "hook",
  "hooks",
  "cli",
  "oauth",
  "token",
  "api",
  "prompt",
  "model",
  "gateway",
  "docker",
  "codex",
  "gemini",
  "vaultwarden",
  "ssh",
];
const BRIDGE_INTENT_PATTERN = /怎么|為什麼|为什么|如何|怎樣|咋|設定|设置|配置|報錯|报错|失敗|失败|找不到|找唔到|命中|登入|登录|連接|连接|documentation|docs|hook|config|token|error|issue|setup|install|why|how/u;
const CONCEPTUAL_COMPARISON_PATTERN = /区别|區別|区分|作用|是什么|什麼/u;

type PluginConfig = {
  enabled?: boolean;
  testTrigger?: string;
  debug?: boolean;
};

type BridgeDecision = {
  shouldActivate: boolean;
  reasons: string[];
};

function countMatches(prompt: string, terms: string[]): number {
  const lower = prompt.toLowerCase();
  return terms.reduce((count, term) => (lower.includes(term) ? count + 1 : count), 0);
}

function hasCjk(prompt: string): boolean {
  return /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/u.test(prompt);
}

function hasNonAscii(prompt: string): boolean {
  return /[^\x00-\x7F]/.test(prompt);
}

function hasMixedLanguage(prompt: string): boolean {
  return hasNonAscii(prompt) && /[A-Za-z]/.test(prompt);
}

function decideBridgeActivation(prompt: string, config: PluginConfig): BridgeDecision {
  const reasons: string[] = [];
  const trimmed = prompt.trim();
  if (!trimmed) return { shouldActivate: false, reasons };

  const testTrigger = (config.testTrigger || DEFAULT_TEST_TRIGGER).trim();
  if (testTrigger && trimmed.includes(testTrigger)) {
    reasons.push(`matched test trigger: ${testTrigger}`);
    return { shouldActivate: true, reasons };
  }

  const techMatches = countMatches(trimmed, ENGLISH_TECH_TERMS);
  const cjk = hasCjk(trimmed);
  const mixed = hasMixedLanguage(trimmed);
  const nonAscii = hasNonAscii(trimmed);
  const bridgeIntent = BRIDGE_INTENT_PATTERN.test(trimmed);
  const conceptualComparison = CONCEPTUAL_COMPARISON_PATTERN.test(trimmed);

  if (mixed && techMatches > 0 && bridgeIntent && !conceptualComparison) {
    reasons.push("mixed-language wording with English-heavy technical intent");
  }
  if (cjk && techMatches >= 2 && bridgeIntent && !conceptualComparison) {
    reasons.push("CJK wording aimed at likely English technical target");
  }
  if (
    nonAscii &&
    /怎么|為什麼|为什么|如何|怎樣|咋|設定|设置|配置|報錯|报错|失敗|失败|找不到|找唔到|命中|登入|登录|連接|连接/u.test(trimmed) &&
    techMatches > 0 &&
    !conceptualComparison
  ) {
    reasons.push("non-English problem phrasing around a technical target");
  }

  return {
    shouldActivate: reasons.length > 0,
    reasons,
  };
}

export default definePluginEntry({
  id: "multilingual-semantic-bridge",
  name: "Multilingual Semantic Bridge",
  description: "Narrow prompt-time automation layer for multilingual bridge activation.",
  register(api) {
    const config = (api.pluginConfig ?? {}) as PluginConfig;

    api.on("before_prompt_build", async (event, ctx) => {
      if (config.enabled === false) return undefined;
      if (ctx.trigger !== "user") return undefined;

      const prompt = event.prompt || "";
      const decision = decideBridgeActivation(prompt, config);
      if (!decision.shouldActivate) return undefined;

      if (config.debug) {
        api.logger.info("multilingual bridge hook fired", {
          agentId: ctx.agentId,
          sessionKey: ctx.sessionKey,
          reasons: decision.reasons,
        });
      }

      return {
        prependSystemContext: [
          "<multilingual_semantic_bridge_plugin>",
          "A multilingual bridge pre-pass has been activated for this turn.",
          `Activation reasons: ${decision.reasons.join("; ")}`,
          "Preserve the user's original wording.",
          "Derive canonical intent before retrieval or routing.",
          "Use a technical pivot only when the likely target surface is English-heavy.",
          "Do not default everything to memory-first. Choose the target surface by target class.",
          "Keep the bridge compact and evidence-oriented.",
          "</multilingual_semantic_bridge_plugin>",
        ].join("\n"),
      };
    });
  },
});
