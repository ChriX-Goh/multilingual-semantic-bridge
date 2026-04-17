# Multilingual Semantic Bridge — Plugin Roadmap V1

Date: 2026-04-17 UTC+8
Status: active roadmap

## 1. Outcome

Turn the multilingual semantic bridge from a manually remembered method into a durable, automatic, low-noise assist layer that improves multilingual retrieval/routing quality in OpenClaw without turning into a giant opaque subsystem.

## 2. Non-goals

- Do not replace the original skill's deeper method wholesale
- Do not jump straight into backend/index/memory-core rewrites
- Do not auto-bridge every multilingual turn
- Do not create a hidden always-on black box that is hard to inspect or disable

## 3. Delivery shape

The intended long-range shape is:
- **plugin** = automatic narrow on-ramp
- **skill** = deeper bridge method and richer discipline
- **future optional deeper layer** = only after prompt-time bridge value is well proven

## 4. Phased plan

### Phase A — viability and guardrails (now)
Goal: prove that the plugin boundary is real, controllable, and not obviously noisy.

Done or nearly done:
- plugin scaffold exists
- isolated runtime hook firing is proven
- first compact case matrix exists
- harder borderline pass exists
- conceptual-comparison suppression is in place

Exit criteria:
- documented runtime-proof method
- documented case matrix
- stable trigger/non-trigger behavior on current small validation set

### Phase B — prompt-context quality tuning
Goal: improve what the plugin injects after it fires, not just whether it fires.

Work items:
- define 2-3 bridge-context templates instead of one generic block
- distinguish at least these target intents:
  - retrieval / recall
  - config / setup
  - docs / official reference
  - troubleshooting / error diagnosis
- keep the injected block compact and auditable
- add matrix notes about expected bridge-context class, not only trigger/no-trigger

Current checkpoint:
- intent-aware context styles now exist in the plugin for retrieval, config, docs, troubleshooting, and generic bridge routing
- injected context now carries both `Bridge intent` and `Context style` instead of using one generic post-trigger block
- isolated live runtime proof is now captured on an explicit pinned gateway path (`ws://127.0.0.1:19031`) across multiple sessions, not just one retrieval sample
- confirmed strong live proof classes now include:
  - retrieval / history recall via `bridgeproof-runtime-v1`
  - config / setup via `bridgeproof-config-v1`
  - troubleshooting / symptom diagnosis via `bridgeproof-troubleshooting-v2`
  - docs / upstream reference via `bridgeproof-docs-v1`
- strongest gateway evidence still includes `before_prompt_build`, `multilingual bridge hook fired`, and prompt mutation via `prependSystemContext/appendSystemContext` before model submission
- docs/reference turned out to be worth proving because it demonstrated a distinct downstream shape: official doc targeting and exact reference surfacing rather than retrieval, setup mapping, or troubleshooting guidance
- next validation focus now shifts away from collecting more intent-class trophies and toward tightening compactness/prompt-class fit before broader coverage expansion

Exit criteria:
- prompt-context classes documented
- sample prompts mapped to expected injected context style
- no obvious overlong or redundant bridge block

### Phase C — broader multilingual coverage
Goal: expand language/phrasing coverage without collapsing precision.

Work items:
- add more Chinese variants and colloquial problem-first prompts
- add shorthand / nickname / symptom-first cases
- add near-miss cases that should stay quiet
- test whether trigger logic depends too heavily on English anchors

Current checkpoint:
- a first broader curated M3 pass now exists in the case matrix
- documented case count expanded from 14 to 26
- the pass now includes colloquial/Cantonese-style prompts (`點樣`, `點解`, `搵唔到`, `喺邊度`), runbook/history lookups, and additional mixed-language near-miss non-trigger cases
- plugin decision logic was extracted into `plugin/logic.ts`, and a reproducible validator now exists at `scripts/validate-plugin-case-matrix.mjs`
- two real M3 style mismatches were surfaced and corrected before the final green pass: colloquial install wording was initially too docs-biased, and prior-runbook lookup wording was initially too troubleshooting-biased

Exit criteria:
- substantially larger matrix
- at least one explicit false-positive and one false-negative review pass

### Phase D — observability and operator control
Goal: make the plugin operationally safe to inspect and tune.

Work items:
- define a clean dev/debug mode for validation
- decide whether to expose a tiny status/debug command surface or stay log-only
- document enable/disable/testTrigger flows cleanly
- keep operator-facing behavior explicit and recoverable

Current checkpoint:
- v1 remains intentionally log-oriented rather than adding a larger command/control surface
- operator controls are now explicitly documented as `enabled`, `testTrigger`, and `debug`
- a dedicated validation workflow doc now exists at `docs/PLUGIN_VALIDATION_WORKFLOW_V1.md`
- debug logging now records not only fire reasons but also selected intent, context style, and a short prompt preview for faster inspection

Exit criteria:
- debug approach agreed
- validation workflow no longer depends on ad hoc tricks

### Phase E — integration discipline with the skill
Goal: make plugin + skill cooperation explicit instead of accidental.

Work items:
- document when plugin alone is enough
- document when deeper skill-style reasoning should still dominate
- decide whether the plugin should inject a lightweight call-to-discipline hint that mirrors the skill method
- ensure the two layers do not drift philosophically

Exit criteria:
- plugin/skill boundary documented clearly enough that future changes do not fork the method

### Phase F — publication / packaging decision
Goal: decide how this should live long-term.

Work items:
- decide sibling-package vs separate package/repo
- repair GitHub continuity before treating external tracking as healthy
- create tracked work items once GitHub path is healthy
- decide whether/when this becomes publishable outside the current workspace

Exit criteria:
- packaging decision made
- GitHub tracking restored

## 5. Long-horizon execution anchor

The roadmap remains the phase map.
The sustained delivery baseline now lives in `docs/PLUGIN_V1_DELIVERY_PLAN.md`, which adds:
- milestone gates
- workstreams
- dependencies
- risks and buffers
- a near-term sustained execution cadence toward v1

Use the roadmap for direction and the delivery plan for ongoing execution control.

## 5. Critical path

Current critical path:
1. finish Phase B prompt-context quality design
2. validate that better context still stays compact and low-noise
3. expand coverage only after context quality is not embarrassingly generic

Reason: if trigger logic improves but injected context stays too generic, the plugin may fire correctly yet still provide weak practical value.

## 6. Main risks

### Risk 1 — false confidence from trigger-only success
Mitigation: judge both trigger correctness and injected-context usefulness.

### Risk 2 — plugin slowly replacing the skill without explicit design
Mitigation: keep the cooperative boundary documented and reviewed.

### Risk 3 — overfitting to current small Chinese/OpenClaw-heavy examples
Mitigation: expand matrix with harder near-miss and alternate phrasings before claiming generality.

### Risk 4 — GitHub continuity remains broken
Mitigation: keep local repo discipline, but explicitly carry GitHub repair as a live deferred obligation.

## 7. Recommended next substantial slice

Start Phase B now.

Concrete next slice:
- the compact runtime-proof table is now recorded in `docs/PLUGIN_CASE_MATRIX_V1.md`
- docs/reference has now been proven as an additional strong class, so the next move is not more class collection by default
- tighten any remaining compactness/noise issues before expanding multilingual coverage

This remains the highest-value next move because it upgrades the plugin from "fires correctly" to "helps correctly."