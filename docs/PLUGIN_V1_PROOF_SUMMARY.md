# Multilingual Semantic Bridge — Plugin V1 Proof Summary

Date: 2026-04-17 UTC+8
Status: compact evidence summary for the signed-off narrow v1

## What this summary is for

This document gives one short path through the evidence base.
It is meant for readers who need to understand why the current narrow v1 was signed off, without rereading every planning and validation document first.

## Signed-off judgment

Current judgment:
- **v1-ready for narrow release/publish signoff**

This means:
- the package is coherent
- the package is inspectable
- the evidence base is strong enough for the documented narrow scope

This does **not** mean:
- multilingual retrieval is solved in every setting
- broad benchmark coverage is complete
- the plugin replaces the deeper bridge skill

## Core evidence layers

### 1. Decision-layer validation
The plugin decision logic has a reproducible compact matrix validator.

Key surfaces:
- `plugin/logic.ts`
- `scripts/plugin-case-matrix-cases.mjs`
- `scripts/validate-plugin-case-matrix.mjs`
- `docs/PLUGIN_CASE_MATRIX_V1.md`

Current compact matrix state:
- broader curated M3 pass completed
- 26 documented cases
- includes Mandarin, mixed-language prompts, more colloquial/Cantonese-style phrasing, and non-trigger near-misses

### 2. Runtime proof across multiple intent classes
The plugin was not signed off based only on local harness success.
Strong isolated live runtime proofs exist across these classes:
- retrieval / history recall
- config / setup
- troubleshooting / symptom diagnosis
- docs / upstream reference

Validation discipline:
- isolated profile
- isolated gateway path
- explicit target pinning
- gateway-log evidence
- no disruption of the active user-facing session

Key workflow surface:
- `docs/PLUGIN_VALIDATION_WORKFLOW_V1.md`

### 3. Operator control and observability
The v1 operator surface stays intentionally small and explicit:
- `enabled`
- `testTrigger`
- `debug`

This keeps the plugin inspectable without pretending it already needs a larger operator UI.

### 4. Plugin-skill boundary
The plugin is not meant to silently become a hidden second bridge system.

Current boundary:
- **plugin** = automatic narrow on-ramp
- **skill** = deeper bridge method and richer retrieval/routing discipline

Key boundary surface:
- `docs/PLUGIN_SKILL_COOPERATION_CONTRACT_V1.md`

### 5. RC tightening and final signoff
The final signoff did not rely only on older runtime proofs.
A fresh post-tightening isolated runtime spot-check was completed before the final judgment.

Key signoff surfaces:
- `docs/PLUGIN_V1_READINESS_REVIEW_2026-04-17.md`
- `docs/PLUGIN_V1_RC_CHECKLIST_2026-04-17.md`

## Packaging and continuity conclusion

Current v1 packaging decision:
- keep the plugin as a sibling package inside this repo for now
- do not split to a separate repo/package yet

Current continuity conclusion:
- GitHub continuity is real
- tracked work continuity exists via issue `#2`

## If you only read three files

Read these first:
1. `docs/RELEASE_NOTE.md`
2. `docs/PLUGIN_V1_RC_CHECKLIST_2026-04-17.md`
3. `docs/PLUGIN_SKILL_COOPERATION_CONTRACT_V1.md`
