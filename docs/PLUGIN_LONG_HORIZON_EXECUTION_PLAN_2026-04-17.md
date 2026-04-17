# Multilingual Semantic Bridge — Long-Horizon Execution Plan

Date: 2026-04-17 UTC+8
Status: active long-range execution plan
Planning style: milestone-based mainline with bounded follow-on tracks

## 1. Purpose

Stop treating the plugin line as a sequence of short tactical completions.
Turn it into a sustained project with:
- a protected v1 signed-off baseline
- a clear release/publish lane
- an explicit post-v1 backlog structure
- a rhythm that prevents drift, re-litigation, and hidden scope inflation

## 2. Current baseline

As of 2026-04-17 UTC+8:
- the plugin is **v1-ready for narrow release/publish signoff**
- trigger logic, style selection, runtime proof, validation workflow, plugin-skill boundary, packaging choice, and GitHub continuity all have explicit artifacts
- the current dedicated repo is the correct continuity boundary
- the plugin should remain a sibling package in this repo for now

This baseline should now be treated as protected.
Do not casually reopen core v1 readiness unless contradictory evidence appears.

## 3. Planning stance

The project now splits into three lanes:

### Lane A — release/publish lane
Goal:
- make the current v1 legible, presentable, and stable enough for external or semi-external consumption

### Lane B — post-v1 product lane
Goal:
- improve real utility after signoff without pretending those improvements are still hidden v1 blockers

### Lane C — research/optionality lane
Goal:
- keep deeper ideas visible without letting them derail the mainline

Rule:
- Lane A has priority until the v1 package is externally coherent
- Lane B can begin only with explicitly chosen bounded slices
- Lane C must stay time-boxed and non-blocking

## 4. Long-range phases

## Phase 1 — V1 release packaging stabilization
Target outcome:
- the current v1 can be explained, demonstrated, and handed over without requiring reconstruction from scattered planning notes

Primary deliverables:
- README / public description / release note alignment
- one compact operator-facing explanation of what the plugin is and is not
- one compact proof summary linking the key evidence artifacts
- one explicit v1 scope statement for future readers

Exit criteria:
- a new reader can understand the plugin, its value, its boundaries, and its evidence trail in one pass
- no contradiction remains between README, status, roadmap, release note, and readiness documents
- the repo looks intentional rather than mid-migration

## Phase 2 — Post-v1 utility hardening
Target outcome:
- improve real-world usefulness without destabilizing the signed-off core

Candidate workstreams:
- tighter false-positive resistance on harder mixed-language prompts
- small context compactness improvements
- better operator recovery/runbook hygiene for isolated validation
- improved examples showing plugin-alone vs plugin-plus-skill discipline

Exit criteria:
- at least one bounded utility improvement lands with evidence
- no regressions to v1 signoff surfaces

## Phase 3 — Coverage and benchmark broadening
Target outcome:
- move from curated evidence toward broader multilingual confidence, while staying explicit about limits

Candidate workstreams:
- broader Chinese variety and alias-heavy phrasing
- more Cantonese-style prompts
- more English-light prompts
- broader near-miss and false-positive pressure tests
- optional lightweight benchmark set

Exit criteria:
- expanded matrix or benchmark is clearly separated from the original v1 gate
- results produce an honest new judgment, not marketing inflation

## Phase 4 — Integration maturity
Target outcome:
- make the plugin/skill relationship durable under future changes

Candidate workstreams:
- explicit invocation examples across multiple task families
- stronger documentation on when the plugin is enough vs when deeper skill discipline should take over
- optional future packaging review after real usage has stabilized

Exit criteria:
- future contributors are less likely to re-inflate the plugin into a hidden second bridge system

## Phase 5 — Deeper architecture options, only if justified
Target outcome:
- evaluate whether any deeper system change is worth the added complexity

Possible options:
- richer plugin telemetry
- more structured context templates
- deeper retrieval/router integration
- eventual separate package/repo split

Strict rule:
- none of these are default next steps
- each requires a fresh scope decision and must not be backfilled into the v1 promise

## 5. Protected non-goals

For the current long-horizon baseline, do not let the following silently become mandatory:
- broad backend memory rewrites
- hidden semantic-router ambitions disguised as plugin polish
- large operator UI surfaces without repeated evidence of need
- immediate repo/package split just because the boundary exists
- broad multilingual-generality claims without evidence

## 6. Sustained operating rhythm

### Default planning unit
Use **one bounded sustained slice at a time**, not many parallel half-starts.

### End-of-slice discipline
Each slice should end with:
- one real artifact or one real proof
- markdown synchronization
- one explicit next recommended slice
- an updated status judgment if the center of gravity changed

### Review rhythm
- after each slice: tactical review
- after every 3 meaningful slices: strategic review
- after any user correction that changes project philosophy: update the durable planning surfaces immediately

## 7. Dependency view

### Hard dependencies
- dedicated repo remains healthy
- GitHub issue continuity remains live
- isolated validation path remains recoverable
- plugin-skill boundary docs remain authoritative

### Soft dependencies
- better demo/examples
- cleaner profile hygiene for bridgeproof-style isolated validation
- optional future benchmark tooling

## 8. Main long-range risks

### Risk 1 — scope inflation after signoff
Mitigation:
- preserve the signed-off v1 baseline as a protected reference point

### Risk 2 — project loses momentum because everything becomes "later"
Mitigation:
- always maintain one active bounded next slice, not only abstract backlog buckets

### Risk 3 — planning surfaces drift apart
Mitigation:
- keep README / STATUS / roadmap / release-facing docs synchronized at the end of each substantive slice

### Risk 4 — research temptation outruns product discipline
Mitigation:
- treat deeper architecture ideas as Lane C unless explicitly promoted

## 9. Recommended next 6 sustained slices

### Slice 1
Release/publish surface cleanup:
- align README
- align public description
- align release note
- add one compact proof-summary surface if still missing

### Slice 2
Create a post-v1 backlog document with clear buckets:
- utility hardening
- broader coverage
- integration maturity
- deeper architecture options

### Slice 3
Pick exactly one bounded post-v1 improvement and execute it end-to-end

### Slice 4
Run a strategic review:
- is the plugin actually earning its keep as a narrow on-ramp?
- where is the best next evidence-producing improvement?

### Slice 5
Expand coverage or benchmark pressure only if it serves a specific question

### Slice 6
Revisit packaging only if repo reality now demands it

## 10. Immediate recommendation

Do not go back into vague long discussion.
The best next move is:
- **finish Phase 1 release/publish surface stabilization**, then
- **open the bounded post-v1 backlog as a separate decision surface**

That gives the project both:
- a stable signed-off resting point, and
- a durable runway for continued work
