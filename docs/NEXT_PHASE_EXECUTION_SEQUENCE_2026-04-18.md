# Multilingual Semantic Bridge — Next Phase Execution Sequence

Date: 2026-04-18 UTC+8
Status: active short-horizon sequence after Apache-2.0 licensing and Bucket A hardening
Purpose: turn the current signed-off baseline plus early post-v1 hardening into a clear next-work order

## 1. Current baseline

Already complete:
- narrow v1 signoff
- release/publish surface stabilization
- explicit post-v1 backlog
- Bucket A hardening slice 1: vague mixed-language false positives suppressed
- Bucket A hardening slice 2: English-light technical artifact/troubleshooting triggers recovered
- Apache-2.0 repo licensing surfaces established

## 2. Recommended next 3 bounded slices

### Slice A3 — Compactness / noise trimming
Question:
- is the injected bridge block still slightly overlong or repetitive for some intent classes?

Target:
- reduce prompt-time noise without losing class guidance

Expected evidence:
- smaller or cleaner bridge context shape
- validator still green
- one before/after note in docs

Explicit non-goal:
- do not reopen trigger heuristics broadly unless compactness work surfaces a real regression

### Slice A4 — Retrieval vs troubleshooting class-fit refinement
Question:
- on edge prompts that mention prior artifacts plus symptoms, are we still occasionally leaning the wrong way between `history_recall` and `symptom_diagnosis`?

Target:
- tighten class fit on ambiguous mixed-language prompts

Expected evidence:
- one or more explicit edge cases added
- one justified refinement if needed
- matrix stays green

Explicit non-goal:
- do not expand into broad benchmark work yet

### Slice B1 — Broader coverage pressure test
Question:
- after three Bucket A slices, where are the strongest remaining coverage blind spots?

Target:
- add one small pressure-test pack rather than a full benchmark harness

Expected evidence:
- a clearly named pressure-test family
- explicit pass/fail outcome
- honest conclusion about whether Bucket B should accelerate or wait

Explicit non-goal:
- do not market this as full multilingual robustness

## 3. Codex code-review usage plan

Codex code-review quota should be used as a leverage tool, not the mainline itself.

Best use order:
1. review `plugin/logic.ts` after the next hardening slice
2. review validator/matrix script changes when the pressure-test pack becomes larger
3. review later benchmark/helper tooling once that code exists

Do not spend code-review quota mainly on:
- pure planning docs
- small README wording changes
- slices where the code delta is too trivial to benefit from a second-pass review

## 4. License operations note

Current repo licensing baseline:
- `LICENSE` added with Apache-2.0 text
- `NOTICE` added for origin/attribution continuity
- repo README updated with license/attribution note
- plugin package metadata updated to `license: Apache-2.0`

Current judgment:
- this is the normal repo-level baseline
- no third-party registration is required just to use Apache-2.0
- stronger brand/name protection would be a separate later trademark/branding decision if ever needed
