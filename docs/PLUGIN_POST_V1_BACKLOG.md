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
