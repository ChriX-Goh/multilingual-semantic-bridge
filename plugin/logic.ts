/*
 * Copyright 2026 ChriX Goh
 * SPDX-License-Identifier: Apache-2.0
 */

export const DEFAULT_TEST_TRIGGER = "bridge-plugin-test";
export const ENGLISH_TECH_TERMS = [
  "openclaw",
  "oc",
  "plugin",
  "plugins",
  "skill",
  "skills",
  "memory",
  "vector",
  "github",
  "gh",
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
  "login",
  "error",
  "errors",
  "log",
  "logs",
  "sdk",
  "api",
  "prompt",
  "model",
  "gateway",
  "docker",
  "codex",
  "cc",
  "gemini",
  "vaultwarden",
  "vw",
  "ssh",
];

export const BRIDGE_INTENT_PATTERN = /怎么|為什麼|为什么|如何|怎樣|点样|點樣|點搞|点搞|咋|點解|点解|設定|设置|配置|報錯|报错|失敗|失败|找不到|找唔到|搜不到|搜唔到|搵唔到|命中|唔中|不中|喺邊度|邊度|在哪里|在哪裡|登入|登录|連接|连接|documentation|docs|hook|config|token|error|issue|setup|install|why|how/u;
export const CONCEPTUAL_COMPARISON_PATTERN = /区别|區別|区分|作用|是什么|什麼|差別|差别|比較|比较|配合|運作|运作|原理|分工/u;
export const VAGUE_USAGE_PATTERN = /點樣用|点样用|怎樣用|怎么用|如何用|點樣先最好|怎么才好|比較好|比较好|整理一下/u;

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
  const hasTroubleshootingSignal = /報錯|报错|失敗|失败|錯誤|错误|為什麼|为什么|點解|点解|找不到|找唔到|搵唔到|排查/u.test(prompt) || /error|errors|issue|issues|broken|fail|failing|cannot find|not found|troubleshoot|debug/.test(lower);
  const hasConfigSignal = /設定|设置|配置|安裝|安装|裝|點樣裝|点樣裝|點樣設置|点样设置|點樣設|点样设|點樣配|点样配|配畀|喺邊度設|在哪裡設|在哪里设|config key|plugin key|oauth|api key/u.test(prompt) || /config|setup|install/.test(lower);
  const hasRetrievalSignal = /搜不到|搜唔到|搵唔到|命中|回忆|回想|以前写的|之前写的|筆記|笔记|記低|記錄|记录/u.test(prompt) || /memory search|memory_search|retrieve|recall|search|notes|note|runbook/.test(lower);
  const hasHistoryAnchor = /以前写的|之前写的|中文记录|中文紀錄|筆記|笔记|note|notes|runbook|記低|記錄|记录/u.test(prompt) || /note|notes|runbook/.test(lower);
  const asksToLocateHistory = /喺邊度|在哪里|在哪裡|翻返|搵返|睇邊邊先|先搵/u.test(prompt) || /where|find|look up/.test(lower);
  const memorySearchFailure = /memory search|memory_search/.test(lower) && /搜不到|搜唔到|找不到|找唔到|搵唔到|命中/u.test(prompt);
  const retrievalFailureAroundHistory = (hasRetrievalSignal && hasHistoryAnchor && asksToLocateHistory) || memorySearchFailure;
  const explicitlyTroubleshootNow = hasTroubleshootingSignal && (/只想排查|先排查|排查點解|點解仲係|而家又報|現在又報|现在又报|仲係|仍然/u.test(prompt) || /troubleshoot|debug|still|again/.test(lower));
  const explicitlyConfigNow = hasConfigSignal && (/先查 config|查 config|config key|設定又失敗|配置又失败/u.test(prompt) || /check config|config key|setup/.test(lower));
  const hasDocsSignal = /docs|documentation|official docs|hook|manifest|sdk|entrypoint|api reference/.test(lower);

  if (explicitlyTroubleshootNow && !retrievalFailureAroundHistory && !explicitlyConfigNow) return "troubleshooting";
  if (explicitlyConfigNow) return "config";
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
      "Start with memory, prior notes, runbooks, and exact historical anchors.",
      "If the target may be an artifact, route there after canonicalizing the query.",
    ],
    setup_mapping: [
      "Map the user's wording onto exact config keys, CLI/config surfaces, and auth field names.",
      "Prefer official docs/schema names before local paraphrase.",
    ],
    upstream_reference: [
      "Favor upstream docs, manifests, SDK names, and exact entry points.",
      "Use the technical pivot to improve target selection, not to replace the user's wording.",
    ],
    symptom_diagnosis: [
      "Preserve the symptom wording and identify the technical target.",
      "Prefer evidence-backed cause paths and likely official/debug surfaces.",
    ],
    generic_bridge: [
      "Preserve wording and derive canonical intent before retrieval.",
      "Choose the target surface by target class instead of defaulting to memory-first.",
    ],
  };

  return [
    "<multilingual_semantic_bridge_plugin>",
    `Activation reasons: ${reasons.join('; ')}`,
    `Bridge intent: ${intent}`,
    `Context style: ${contextStyle}`,
    "Preserve original wording and derive canonical intent first.",
    "Use a technical pivot only when the likely target surface is English-heavy.",
    ...styleLines[contextStyle],
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
  const vagueUsage = VAGUE_USAGE_PATTERN.test(trimmed);
  const suppressMixedGuidance = conceptualComparison || vagueUsage;

  const organizationOnly = /整理一下|整理下|整理返|整理|归纳|歸納/u.test(trimmed);

  if (mixed && techMatches > 0 && bridgeIntent && !suppressMixedGuidance && !organizationOnly) {
    reasons.push("mixed-language wording with English-heavy technical intent");
  }
  if (cjk && techMatches >= 2 && bridgeIntent && !suppressMixedGuidance && !organizationOnly) {
    reasons.push("CJK wording aimed at likely English technical target");
  }
  if (nonAscii && /怎么|為什麼|为什么|如何|怎樣|點樣|点样|咋|點解|点解|設定|设置|配置|報錯|报错|失敗|失败|找不到|找唔到|搜不到|搜唔到|搵唔到|命中|唔中|不中|登入|登录|連接|连接/u.test(trimmed) && techMatches > 0 && !suppressMixedGuidance && !organizationOnly) {
    reasons.push("non-English problem phrasing around a technical target");
  }

  return {
    shouldActivate: reasons.length > 0,
    reasons,
    intent,
    contextStyle,
  };
}
