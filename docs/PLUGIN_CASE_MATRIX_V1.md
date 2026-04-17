# Multilingual Semantic Bridge — Plugin Case Matrix V1

Date: 2026-04-17 UTC+8
Status: working validation matrix

## Purpose

Track a small, explicit prompt set for the plugin's early activation behavior.
This is not the full benchmark harness. It is a compact runtime-focused matrix for checking whether the plugin fires when it should, stays quiet when it should, and behaves reasonably on borderline prompts.

## Expected trigger classes

### Should trigger
1. Mixed-language technical/problem prompts aimed at English-heavy targets
2. CJK technical/problem prompts with enough English technical anchors
3. Explicit test-trigger prompts containing the configured `testTrigger`

### Should not trigger
1. Generic progress/status requests
2. Generic weather or non-technical chat
3. Pure English prompts that are already explicit and do not need bridge help
4. Generic conceptual comparison prompts unless they strongly look like retrieval/routing/problem-solving queries

## Initial case matrix

| ID | Prompt | Expected | Expected context style | Why |
|---|---|---|---|---|
| T01 | `bridge-plugin-test openclaw plugin 怎么设置` | Trigger | `setup_mapping` | Explicit test trigger should force activation; prompt still looks like setup/config |
| T02 | `怎么让 OpenClaw 的 memory search 更容易命中中文说法？` | Trigger | `history_recall` | Mixed Chinese/English technical retrieval wording |
| T03 | `为什么我的 github repo 在 openclaw 里找不到` | Trigger | `symptom_diagnosis` | Multilingual technical problem prompt with English-heavy target |
| T04 | `如何配置 vaultwarden token 给 OpenClaw plugin 用？` | Trigger | `setup_mapping` | Multilingual config/auth prompt with technical anchors |
| T05 | `为什么 Codex 在 OpenClaw 插件里报 token 错误` | Trigger | `symptom_diagnosis` | Multilingual technical error prompt |
| N01 | `请帮我总结今天的进度` | No trigger | n/a | Generic progress request, not a bridge/routing problem |
| N02 | `今天天气怎么样` | No trigger | n/a | Non-technical everyday query |
| N03 | `OpenClaw plugin docs for before_prompt_build hook` | No trigger | n/a | Pure English and already explicit |
| B01 | `skill 和 memory 的区别是什么` | No trigger | n/a | Borderline conceptual comparison; should stay quiet after false-positive tuning |
| B02 | `OpenClaw memory 和 skill 要怎么区分？` | No trigger | n/a | Mixed-language conceptual comparison; should not auto-bridge |
| B03 | `这个 plugin 的作用是什么` | No trigger | n/a | Generic conceptual explanation request |
| B04 | `我想找之前关于 openclaw plugin 的笔记` | No trigger | n/a | Retrieval-sounding, but currently too generic and should not auto-bridge yet |
| B05 | `为什么 openclaw memory search 老是搜不到我之前写的中文记录` | Trigger | `history_recall` | Clear multilingual retrieval failure around English-heavy technical target |
| B06 | `如何在 OpenClaw 里设置 plugin 的 config key` | Trigger | `setup_mapping` | Multilingual config task with technical anchors |

## Current status

- T01-T05: validated as trigger cases
- N01-N03: validated as non-trigger cases
- B01: previously over-triggered, now tuned to remain quiet and validated as non-trigger

## Latest validation result (2026-04-17)

A first compact matrix pass was run against the current plugin logic with the configured test trigger set to `bridge-plugin-test`.

Result: 9/9 cases passed.

- Trigger cases passed: T01, T02, T03, T04, T05
- Non-trigger cases passed: N01, N02, N03
- Borderline case passed: B01

A harder borderline expansion pass was then added.

Result: 14/14 cases passed after tightening conceptual-comparison handling.

- New non-trigger borderline cases passed: B02, B03, B04
- New trigger borderline cases passed: B05, B06
- Important tuning lesson: mixed-language conceptual comparison prompts can look superficially like bridge-worthy technical prompts, especially when they contain English anchors plus `怎么`. The plugin should suppress bridge activation for conceptual-comparison style prompts unless they are clearly problem/retrieval/config oriented.

## Phase B context-style mapping checkpoint

The plugin is no longer using one generic injected block for all trigger cases.
Current intended mapping is:

- retrieval / recall → `history_recall`
- config / setup → `setup_mapping`
- docs / official reference → `upstream_reference`
- troubleshooting / error diagnosis → `symptom_diagnosis`
- generic multilingual technical routing → `generic_bridge`

Immediate validation question after this checkpoint:
- when a case triggers, does the selected context style match the real prompt class well enough to help rather than just add noise?

Latest local style-mapping check:
- 2026-04-17 local validation pass: 14/14 cases passed for both trigger behavior and expected context-style selection
- one real misclassification pass was required before reaching 14/14: simple intent ordering initially misrouted some prompts toward retrieval/config too early
- current tightened rule: troubleshooting wins over generic retrieval/config when the prompt is fundamentally an error/symptom report, but explicit retrieval-failure-around-history cases still map to `history_recall`

## Runtime proof note (2026-04-17, isolated gateway)

Isolated live runtime proofs were completed on the pinned gateway target `ws://127.0.0.1:19031`.

### Proof 1, retrieval / history recall
Session:
- `bridgeproof-runtime-v1`

Prompt:
- `bridge-plugin-test 为什么 openclaw memory search 老是搜不到我之前写的中文记录？`

Observed gateway evidence:
- `[plugins] [hooks] running before_prompt_build (1 handlers, sequential)`
- `[plugins] multilingual bridge hook fired`
- `[agent/embedded] hooks: applied prependSystemContext/appendSystemContext (689+0 chars)`

Interpretation:
- trigger path fired in a real embedded agent run, not only in the local harness
- the injected block was applied before model submission
- this sample corresponds to retrieval failure around history, so the expected live context style remains `history_recall`

### Proof 2, config / setup mapping
Session:
- `bridgeproof-config-v1`

Prompt:
- `bridge-plugin-test 如何在 OpenClaw 里设置 plugin 的 config key？`

Observed gateway evidence:
- `[plugins] [hooks] running before_prompt_build (1 handlers, sequential)`
- `[plugins] multilingual bridge hook fired`
- `[agent/embedded] hooks: applied prependSystemContext/appendSystemContext (656+0 chars)`
- repeated gateway tool calls: `config.schema.lookup`

Interpretation:
- the plugin again fired in a real embedded run on the pinned isolated gateway
- this time the downstream answer shape actually aligned with config/setup work by using `config.schema.lookup` during the run, not just generic explanation
- this sample is now a real isolated proof for the `setup_mapping` class

### Proof 3, troubleshooting / symptom diagnosis
Session:
- `bridgeproof-troubleshooting-v2`

Prompt:
- `bridge-plugin-test 为什么 OpenClaw 插件里总是报 token 错误？`

Observed gateway evidence:
- `[plugins] [hooks] running before_prompt_build (1 handlers, sequential)`
- `[plugins] multilingual bridge hook fired`
- `[agent/embedded] hooks: applied prependSystemContext/appendSystemContext (712+0 chars)`
- downstream answer centered on token-type mismatch, auth-mode mismatch, bootstrap-token misuse, and token-source drift

Interpretation:
- this replaces the earlier weaker troubleshooting sample that had a gateway-close wrinkle
- the troubleshooting class is now also backed by a clean pinned-gateway proof, not only by answer-shape inference

### Proof 4, docs / upstream reference
Session:
- `bridgeproof-docs-v1`

Prompt:
- `bridge-plugin-test OpenClaw plugin 的 before_prompt_build hook 官方 docs 在哪里看？`

Observed gateway evidence:
- `[plugins] [hooks] running before_prompt_build (1 handlers, sequential)`
- `[plugins] multilingual bridge hook fired`
- `[agent/embedded] hooks: applied prependSystemContext/appendSystemContext (691+0 chars)`
- downstream run used local docs reads and returned exact official doc targets for plugin architecture and agent loop

Interpretation:
- this class does add distinct proof value because the downstream answer shape is not retrieval-history, config mapping, or symptom diagnosis
- the plugin successfully biased the run toward upstream/reference surfaces and exact doc targets
- current strong live evidence now spans retrieval, config/setup, troubleshooting, and docs/reference-oriented prompt classes

## Compact runtime-proof table

| Class | Expected context style | Session | Prompt sketch | Strong runtime evidence | Notes |
|---|---|---|---|---|---|
| Retrieval / history failure | `history_recall` | `bridgeproof-runtime-v1` | `为什么 openclaw memory search 老是搜不到我之前写的中文记录？` | `before_prompt_build`, hook fired, prompt mutation `(689+0 chars)` | first clean isolated proof |
| Config / setup | `setup_mapping` | `bridgeproof-config-v1` | `如何在 OpenClaw 里设置 plugin 的 config key？` | `before_prompt_build`, hook fired, prompt mutation `(656+0 chars)`, repeated `config.schema.lookup` | strongest evidence that downstream behavior matched class |
| Troubleshooting / token/auth symptom | `symptom_diagnosis` | `bridgeproof-troubleshooting-v2` | `为什么 OpenClaw 插件里总是报 token 错误？` | `before_prompt_build`, hook fired, prompt mutation `(712+0 chars)` | clean replacement for the earlier fallback-tinged troubleshooting run |
| Docs / upstream reference | `upstream_reference` | `bridgeproof-docs-v1` | `before_prompt_build hook 官方 docs 在哪里看？` | `before_prompt_build`, hook fired, prompt mutation `(691+0 chars)`, local docs reads, exact official doc targets returned | proves a distinct docs/reference routing value |

Current meaning of this table:
- M2 now has a real multi-class live baseline, not a single retrieval sample
- the next question is no longer only whether the hook fires
- the next question is whether the injected bridge block stays compact and meaningfully class-matched as coverage widens

## Next use

Use this matrix as the first compact check surface before expanding into a broader multilingual prompt set or full benchmark integration.
