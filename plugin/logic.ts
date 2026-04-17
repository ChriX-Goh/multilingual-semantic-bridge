export const DEFAULT_TEST_TRIGGER = "bridge-plugin-test";
export const ENGLISH_TECH_TERMS = [
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

export const BRIDGE_INTENT_PATTERN = /怎么|為什麼|为什么|如何|怎樣|点样|點樣|咋|點解|点解|設定|设置|配置|報錯|报错|失敗|失败|找不到|找唔到|搜不到|搜唔到|搵唔到|命中|登入|登录|連接|连接|documentation|docs|hook|config|token|error|issue|setup|install|why|how/u;
export const CONCEPTUAL_COMPARISON_PATTERN = /区别|區別|区分|作用|是什么|什麼/u;

export type PluginConfig = {
  enabled?: boolean;
  testTrigger?: string;
  debug?: boolean;
};

export type BridgeIntent = "retrieval" | "config" | "docs" | "troubleshooting" | "generic";
export type ContextStyle = "history_recall" | "setup_mapping" | "upstream_reference" | "symptom_diagnosis" | "generic_bridge";

export type BridgeDecision = {
  shouldActivate: boolean;
  reasons: string[];
  intent: BridgeIntent;
  contextStyle: ContextStyle;
};

export function countMatches(prompt: string, terms: string[]): number {
  const lower = prompt.toLowerCase();
  return terms.reduce((count, term) => (lower.includes(term) ? count + 1 : count), 0);
}

export function hasCjk(prompt: string): boolean {
  return /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/u.test(prompt);
}

export function hasNonAscii(prompt: string): boolean {
  return /[^\x00-\x7F]/.test(prompt);
}

export function hasMixedLanguage(prompt: string): boolean {
  return hasNonAscii(prompt) && /[A-Za-z]/.test(prompt);
}

export function classifyIntent(prompt: string): BridgeIntent {
  const lower = prompt.toLowerCase();
  const hasTroubleshootingSignal = /報錯|报错|失敗|失败|錯誤|错误|為什麼|为什么|點解|点解|找不到|找唔到|搵唔到/u.test(prompt) || /error|errors|issue|issues|broken|fail|failing|cannot find|not found/.test(lower);
  const hasConfigSignal = /設定|设置|配置|安裝|安装|裝|点樣裝|點樣裝|點樣設置|点样设置|config key|oauth|api key|login|登入|登录/u.test(prompt) || /config|setup|install/.test(lower);
  const hasRetrievalSignal = /搜不到|搜唔到|搵唔到|命中|回忆|回想|以前写的|之前写的|笔记|筆記/u.test(prompt) || /memory search|memory_search|retrieve|recall|search|notes|note|runbook/.test(lower);
  const retrievalFailureAroundHistory = hasRetrievalSignal && (/以前写的|之前写的|中文记录|中文紀錄|笔记|筆記|runbook|喺邊度|在哪里|在哪裡/u.test(prompt) || /memory search|memory_search|runbook/.test(lower));
  const hasDocsSignal = /docs|documentation|official docs|hook|manifest|sdk|entrypoint|api reference/.test(lower);

  if (retrievalFailureAroundHistory) return "retrieval";
  if (hasConfigSignal) return "config";
  if (hasTroubleshootingSignal) return "troubleshooting";
  if (hasRetrievalSignal) return "retrieval";
  if (hasDocsSignal) return "docs";
  return "generic";
}

export function contextStyleForIntent(intent: BridgeIntent): ContextStyle {
  return {
    retrieval: "history_recall",
    config: "setup_mapping",
    docs: "upstream_reference",
    troubleshooting: "symptom_diagnosis",
    generic: "generic_bridge",
  }[intent];
}

export function buildBridgeContext(intent: BridgeIntent, contextStyle: ContextStyle, reasons: string[]): string {
  const styleLines: Record<ContextStyle, string[]> = {
    history_recall: [
      "Likely task class: retrieval/recall.",
      "Start with memory, prior notes, runbooks, and exact historical anchors.",
      "If the target may be an artifact rather than a memory, route to the artifact after canonicalizing the query.",
    ],
    setup_mapping: [
      "Likely task class: configuration/setup.",
      "Map the user's wording onto exact config keys, CLI/config surfaces, and auth field names.",
      "Prefer official docs/schema names before local paraphrase.",
    ],
    upstream_reference: [
      "Likely task class: official docs/reference lookup.",
      "Favor upstream docs, manifests, SDK names, and exact entry points.",
      "Use the English technical pivot mainly to improve target selection, not to replace the user's wording.",
    ],
    symptom_diagnosis: [
      "Likely task class: troubleshooting/error diagnosis.",
      "Preserve the symptom wording, identify the technical target, and prefer evidence-backed cause paths.",
      "Separate the error text, target subsystem, and likely official/debug surfaces.",
    ],
    generic_bridge: [
      "Likely task class: multilingual technical routing.",
      "Preserve wording and derive canonical intent before retrieval.",
      "Choose the target surface by target class instead of defaulting to memory-first.",
    ],
  };

  return [
    "<multilingual_semantic_bridge_plugin>",
    "A multilingual bridge pre-pass has been activated for this turn.",
    `Activation reasons: ${reasons.join('; ')}`,
    `Bridge intent: ${intent}`,
    `Context style: ${contextStyle}`,
    "Preserve the user's original wording.",
    "Derive canonical intent before retrieval or routing.",
    "Use a technical pivot only when the likely target surface is English-heavy.",
    ...styleLines[contextStyle],
    "Keep the bridge compact and evidence-oriented.",
    "</multilingual_semantic_bridge_plugin>",
  ].join("\n");
}

export function decideBridgeActivation(prompt: string, config: PluginConfig): BridgeDecision {
  const reasons: string[] = [];
  const trimmed = prompt.trim();
  const intent = classifyIntent(trimmed);
  const contextStyle = contextStyleForIntent(intent);
  if (!trimmed) return { shouldActivate: false, reasons, intent, contextStyle };

  const testTrigger = (config.testTrigger || DEFAULT_TEST_TRIGGER).trim();
  if (testTrigger && trimmed.includes(testTrigger)) {
    reasons.push(`matched test trigger: ${testTrigger}`);
    return { shouldActivate: true, reasons, intent, contextStyle };
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
  if (nonAscii && /怎么|為什麼|为什么|如何|怎樣|點樣|点样|咋|點解|点解|設定|设置|配置|報錯|报错|失敗|失败|找不到|找唔到|搜不到|搜唔到|搵唔到|命中|登入|登录|連接|连接/u.test(trimmed) && techMatches > 0 && !conceptualComparison) {
    reasons.push("non-English problem phrasing around a technical target");
  }

  return {
    shouldActivate: reasons.length > 0,
    reasons,
    intent,
    contextStyle,
  };
}
