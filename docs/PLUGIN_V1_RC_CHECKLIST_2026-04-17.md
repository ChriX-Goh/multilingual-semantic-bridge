# Multilingual Semantic Bridge — Plugin V1 RC Checklist

Date: 2026-04-17 UTC+8
Status: completed RC-tightening checklist
Purpose: compact release-candidate checklist for the current v1 scope

## Scope of this checklist

This checklist is for the narrow v1 plugin only.
It does not claim broad multilingual benchmark completeness.
It claims that the current v1 package is coherent, inspectable, and sufficiently evidenced for a narrow release/publish judgment.

## Final RC checklist

### 1. Trigger logic passes curated matrix
- Status: **PASS**
- Evidence: compact matrix validator remains green on the current expanded curated case set
- Notes: includes Mandarin, mixed-language prompts, more colloquial phrasing, near-miss non-triggers, and multiple intent classes

### 2. Context-style mapping is explicit and stable enough
- Status: **PASS**
- Evidence: explicit style classes are documented and used consistently
- Current styles:
  - `history_recall`
  - `setup_mapping`
  - `upstream_reference`
  - `symptom_diagnosis`
  - `generic_bridge`

### 3. Live runtime proof exists across distinct intent classes
- Status: **PASS**
- Evidence base includes isolated runtime proofs for:
  - retrieval/history recall
  - config/setup
  - troubleshooting/symptom diagnosis
  - docs/upstream reference

### 4. Fresh post-tightening isolated runtime spot-check succeeded
- Status: **PASS**
- Date: 2026-04-17 UTC+8
- Isolated target: one local validation profile on a pinned local gateway path, used as validation evidence rather than a universal default setup
- Prompt: `點解 OpenClaw plugin 成日報 token error？`
- Conditions:
  - no `testTrigger` used
  - plugin `debug=true`
  - isolated gateway run restored successfully
- Evidence observed:
  - fresh log evidence contains `multilingual bridge hook fired`
  - assistant output responded in Cantonese-style troubleshooting form rather than falling back to generic English-only handling
- Important note:
  - the isolated validation profile required `--allow-unconfigured` because the older local validation config lacked `gateway.mode`
  - this is a profile hygiene caveat, not a v1 plugin logic blocker

### 5. Validation workflow is documented and repeatable
- Status: **PASS**
- Evidence: `docs/PLUGIN_VALIDATION_WORKFLOW_V1.md`
- Operator controls remain intentionally small:
  - `enabled`
  - `testTrigger`
  - `debug`

### 6. Plugin-skill boundary is explicit
- Status: **PASS**
- Evidence: `docs/PLUGIN_SKILL_COOPERATION_CONTRACT_V1.md`
- Result: plugin is an automatic narrow on-ramp, not a hidden replacement bridge system

### 7. Packaging boundary is chosen and acceptable for v1
- Status: **PASS**
- Decision: keep plugin as a sibling package in the dedicated repo for v1
- Not doing yet: separate repo/package split

### 8. GitHub continuity is real
- Status: **PASS**
- Evidence:
  - repo-backed checkpoints pushed
  - issue continuity restored via GitHub issue `#2`

## Explicit non-goals still remaining outside this signoff

These are intentionally not required for the v1 release judgment:
- large-scale multilingual benchmark suite
- broader operator UI beyond `enabled` / `testTrigger` / `debug`
- package split into a separate repo
- backend memory/router rewrites
- broad claims of multilingual robustness beyond the evidenced v1 scope

## Final judgment

**RC checklist complete.**

Current judgment:
- **v1-ready for narrow release/publish signoff**
- not "done forever"
- but done enough to stop treating the line as provisional exploration

## Recommended immediate next mode

Shift from readiness-building into one of these two paths only:
1. small release/publish packaging work, or
2. post-v1 backlog selection under explicit new scope

Do not reopen the core v1 gate unless new contradictory runtime evidence appears.
