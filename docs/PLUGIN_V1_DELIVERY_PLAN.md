# Multilingual Semantic Bridge — Plugin V1 Delivery Plan

Date: 2026-04-17 UTC+8
Status: active execution plan
Planning style: milestone-based with evidence gates

## 1. V1 target

Ship a narrow, inspectable plugin that:
- triggers only on genuinely bridge-worthy multilingual technical prompts
- injects compact context matched to intent class
- proves value in real OpenClaw runtime paths, not only local harness checks
- stays clearly subordinate to the deeper bridge skill instead of replacing it

## 2. V1 non-goals

- no backend rewrite of memory/indexing/router behavior
- no always-on semantic rewrite layer
- no broad autonomous learning loop in v1
- no publication push before GitHub continuity and operator control are healthy

## 3. Milestones

### M1. Trigger and context baseline
Definition:
- compact matrix stays green
- trigger/no-trigger behavior is defensible
- context-style mapping is defensible

Current state:
- complete enough to build on
- local matrix is 14/14 on trigger + expected style

### M2. Live runtime proof across intent classes
Definition:
- at least 3 isolated live proofs, not just one
- cover at minimum:
  - retrieval/history recall
  - config/setup or troubleshooting
  - one additional non-identical bridge-worthy class
- each proof records pinned gateway target, sample prompt, and gateway evidence

Current state:
- partially complete
- retrieval/history proof exists on pinned isolated gateway

### M3. Coverage expansion
Definition:
- matrix expands beyond current OpenClaw-heavy compact set
- includes more colloquial Chinese prompts, near-misses, and alias-heavy phrasing
- at least one explicit false positive and one explicit false negative review loop recorded

Current state:
- not started in depth

### M4. Operator control and observability
Definition:
- debug approach chosen and documented
- clean validation workflow exists without improvised environment archaeology
- enable/disable/testTrigger/debug controls are documented

Current state:
- partial, but not yet clean enough for sustained maintenance

### M5. Plugin-skill cooperation contract
Definition:
- docs say when plugin alone is enough
- docs say when deeper skill discipline should still dominate
- no silent philosophical drift between plugin and skill layers

Current state:
- conceptual direction exists, but contract is not yet crisp

### M6. Packaging and continuity readiness
Definition:
- GitHub repo continuity repaired
- tracked work items restored
- package boundary decision made: sibling package vs split repo/package
- v1 release decision can be made without hidden blockers

Current state:
- blocked on GitHub continuity

## 4. Work breakdown

### Stream A. Runtime validation
- finish second isolated live proof for config or troubleshooting
- finish third isolated live proof for a different bridge-worthy class
- capture a compact proof table in docs

### Stream B. Coverage and precision
- expand compact case matrix to 20-30 curated cases
- add more non-English shorthand and symptom-first prompts
- add harder non-trigger cases to resist overactivation

### Stream C. Observability
- decide whether v1 stays log-only or gets a tiny explicit debug surface
- document isolated validation recipe that avoids disturbing active user sessions
- keep proof collection reproducible

### Stream D. Skill boundary
- write plugin-vs-skill cooperation note
- ensure plugin context hints do not become a hidden substitute for the full bridge method

### Stream E. Repo/GitHub continuity
- re-verify auth and remote visibility
- restore issue-based continuity once remote is healthy
- postpone external publication until continuity is real

## 5. Critical path

1. M2 live runtime proofs across multiple intent classes
2. M3 broader coverage without precision collapse
3. M4 observability/control cleanup
4. M5 plugin-skill contract
5. M6 GitHub continuity and packaging decision

Reason:
A plugin that only looks good on a local matrix is still too fragile to call v1-ready.

## 6. Dependencies

| Dependency | Why it matters | Current state |
|---|---|---|
| Isolated gateway recipe | Needed for safe live proof without disturbing the active session | working but still rough |
| OAuth-compatible isolated model config | Needed so proof runs do not fail on auth mismatch | working after switching to `openai-codex/gpt-5.4` |
| Stable plugin discovery path | Needed for repeatable isolated validation | working via `plugins.load.paths` |
| GitHub repo continuity | Needed for tracked work items and longer-term release discipline | blocked |
| Plugin-skill boundary docs | Needed to prevent silent architectural drift | partial |

## 7. Main risks and buffers

### Risk A. Overfitting to current prompt family
- Likelihood: medium
- Impact: high
- Mitigation: expand matrix only after each runtime-proof checkpoint, not all at once

### Risk B. Runtime proof becomes fragile environment theater
- Likelihood: medium
- Impact: high
- Mitigation: keep one documented isolated recipe and reuse it; avoid ad hoc profile drift

### Risk C. Plugin grows into a hidden second bridge system
- Likelihood: medium
- Impact: medium-high
- Mitigation: write the cooperation contract before adding richer prompt-time behavior

### Risk D. GitHub continuity remains broken and silently stalls the project
- Likelihood: high
- Impact: medium
- Mitigation: keep it explicitly blocked in live task surfaces; do not pretend external continuity exists yet

## 8. Suggested near-term cadence

### Current working cadence
- Each substantial work slice should end with:
  - one real proof or one real correction
  - markdown sync
  - a clean next milestone

### Recommended next 3 sustained slices
1. **Slice 1:** second isolated proof, preferably config/setup
2. **Slice 2:** third isolated proof, preferably troubleshooting or docs/reference
3. **Slice 3:** broaden matrix and write compact runtime-proof table

## 9. Definition of v1-ready

The plugin is v1-ready when all of these are true:
- trigger logic is stable on a non-trivial compact matrix
- context-style selection is stable on that matrix
- multiple isolated live runtime proofs exist across intent classes
- validation/debug path is documented and repeatable
- plugin-skill cooperation is explicitly documented
- packaging path is chosen
- GitHub continuity is either repaired or explicitly carved out as the final blocker

## 10. Immediate next milestone

Advance from "one isolated retrieval proof" to "multi-class live proof baseline."

Immediate next deliverables:
- one config/setup live proof
- one troubleshooting or docs/reference live proof
- one compact table summarizing all proved intent classes and their runtime evidence
