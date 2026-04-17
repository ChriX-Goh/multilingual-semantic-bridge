# Multilingual Semantic Bridge — Post-V1 Backlog

Date: 2026-04-17 UTC+8
Status: active post-v1 backlog surface
Purpose: keep continuation work explicit without reopening the signed-off narrow v1 gate by default

## 1. Backlog rule

This backlog exists **after** narrow v1 signoff.
Its purpose is to continue the project without pretending later improvements are still hidden v1 blockers.

Default rule:
- the signed-off v1 baseline remains protected
- backlog items improve utility, confidence, maturity, or optional future architecture
- backlog items do not silently rewrite the v1 promise

## 2. Backlog buckets

## Bucket A — Utility hardening

Goal:
- make the plugin more useful on real multilingual technical prompts without changing its basic role

Candidate items:
- tighten false-positive resistance on harder mixed-language prompts
- tighten false-negative handling on English-light but clearly bridge-worthy prompts
- reduce any remaining context verbosity where the current injected block is still slightly over-helpful
- improve class fit on edge prompts that sit between retrieval, troubleshooting, and setup

Entry criteria:
- a concrete prompt family or observed edge case is named
- success can be shown by a real correction or a validator/runtime evidence change

Preferred item order:
1. hardest real false positives
2. hardest real false negatives
3. compactness/noise trimming
4. style-fit refinements

## Bucket B — Coverage and benchmark broadening

Goal:
- move from curated confidence toward broader multilingual confidence with honest limits

Candidate items:
- expand Cantonese-style prompt coverage further
- expand Chinese shorthand / alias-heavy prompt coverage
- add more English-light prompts
- add stronger near-miss/non-trigger pressure tests
- create a lightweight benchmark sheet or benchmark harness only if it answers a real question

Entry criteria:
- the new coverage serves a concrete uncertainty, not just "more is better"
- broader coverage is recorded separately from the original v1 signoff gate

Preferred item order:
1. near-miss pressure tests
2. Cantonese / colloquial expansion
3. English-light prompt expansion
4. optional benchmark tooling

## Bucket C — Integration maturity

Goal:
- make the plugin-skill relationship easier to apply, teach, and preserve

Candidate items:
- add clearer examples of plugin-alone enough vs skill-dominant cases
- add worked examples across multiple task families
- tighten operator runbooks around isolated validation recovery
- improve contributor orientation for future changes to the bridge method

Entry criteria:
- there is a real confusion, drift risk, or repeated explanation burden

Preferred item order:
1. plugin-alone vs skill-dominant examples
2. isolated validation runbook hygiene
3. contributor/change-discipline improvements

## Bucket D — Deeper architecture options

Goal:
- keep larger ideas visible without making them default obligations

Candidate items:
- richer plugin telemetry
- more structured context templates
- deeper retrieval/router integration
- eventual separate package/repo split

Entry criteria:
- there is a concrete reason current simpler surfaces are insufficient
- the work is explicitly approved as a new scoped track

Default stance:
- not next by default
- not blockers against the current signed-off v1

## 3. Recommended next pick

Current best next bounded slice:
- **Bucket A / Utility hardening**
- specifically: tighten the hardest remaining mixed-language false-positive or false-negative family with one evidence-backed correction

Why this first:
- it improves real utility fastest
- it preserves the signed-off architecture
- it avoids premature benchmark theater or deeper-system inflation

## 3A. Completed first bounded slice

Completed on 2026-04-17 UTC+8:
- Bucket: Utility hardening
- Question: should vague mixed-language usage/comparison prompts auto-trigger the bridge just because they contain technical anchors?
- Expected evidence: one explicit suppression rule plus matrix expansion
- Result: completed

What changed:
- mixed-language prompts such as `repo 點樣 sync 比較好`, `skill 點樣用先最好`, `plugin 同 memory search 點樣配合`, and `plugin sdk 同 hook 差別係咩` are now explicitly expected to stay quiet
- compact validator now passes 30/30 after adding this post-v1 hardening family

Recommended next pick after this:
- stay in Bucket A
- choose either one hard false-negative family or one compactness/noise-trimming slice

## 3B. Completed second bounded slice

Completed on 2026-04-18 UTC+8:
- Bucket: Utility hardening
- Question: should English-light history/artifact lookup prompts with loanwords such as `login`, `error`, `log`, and `sdk` still trigger when they clearly point at technical artifacts or troubleshooting surfaces?
- Expected evidence: a small technical-anchor expansion plus matrix proof
- Result: completed

What changed:
- English-light prompts such as `之前個 login error 筆記喺邊度？` now trigger correctly as `history_recall`
- direct artifact/troubleshooting lookups such as `我想睇 error log` now trigger correctly as `symptom_diagnosis`
- compact validator now passes 32/32 after adding this second post-v1 hardening family

Recommended next pick after this:
- stay in Bucket A
- next best choices are either one compactness/noise-trimming slice or a narrower class-fit refinement between retrieval and troubleshooting edges

## 3C. Completed third bounded slice

Completed on 2026-04-18 UTC+8:
- Bucket: Utility hardening
- Question: is the injected bridge block still slightly overlong or repetitive across intent classes?
- Expected evidence: a shorter bridge block with matrix stability preserved
- Result: completed

What changed:
- removed repeated boilerplate from `buildBridgeContext`
- reduced redundancy between generic bridge instructions and intent-specific lines
- preserved class guidance while making the injected block leaner and less repetitive
- compact validator remained green at 32/32

Recommended next pick after this:
- stay in Bucket A
- next best choice is a narrower retrieval-vs-troubleshooting class-fit refinement on ambiguous edge prompts

## 4A. Completed retrieval-vs-troubleshooting class-fit slice

Completed on 2026-04-18 UTC+8:
- Bucket: Utility hardening
- Question: on ambiguous prompts that mix prior notes/runbooks with a current issue, does the plugin still lean the wrong way between `history_recall`, `setup_mapping`, and `symptom_diagnosis`?
- Expected evidence: explicit edge cases plus one justified refinement if needed
- Result: completed

What changed:
- added four ambiguous A4 edge cases covering history-vs-current-troubleshooting and history-vs-current-config overlap
- tightened `classifyIntent` so it now distinguishes:
  - locating prior notes/runbooks as retrieval-first
  - current config-check intent as setup-first
  - explicit present-tense troubleshooting as diagnosis-first
- compact validator now passes 36/36

Recommended next pick after this:
- stay in Bucket A or move lightly into Bucket B
- best next choices are either one more bounded false-positive/class-fit refinement if a real edge family appears, or one small pressure-test family rather than broad benchmark expansion

## 4. What should not be picked next by default

Do not pick these first unless a stronger reason appears:
- separate repo/package split
- broad benchmark construction before a concrete question exists
- large telemetry/operator surface expansion
- backend retrieval/core-memory changes under the plugin backlog name

## 5. Slice selection discipline

When selecting the next post-v1 slice, record all four fields:
- chosen bucket
- exact question being answered
- evidence expected
- explicit non-goal

Template:
- Bucket:
- Question:
- Expected evidence:
- Non-goal:

## 6. Current backlog reading order

If resuming this line later, read in this order:
1. `STATUS.md`
2. `docs/PLUGIN_LONG_HORIZON_EXECUTION_PLAN_2026-04-17.md`
3. `docs/PLUGIN_POST_V1_BACKLOG.md`
4. the chosen bounded slice documents
