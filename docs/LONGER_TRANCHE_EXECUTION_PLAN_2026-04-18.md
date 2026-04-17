# Multilingual Semantic Bridge — Longer Tranche Execution Plan

Date: 2026-04-18 UTC+8
Status: active longer-tranche execution plan
Purpose: batch the next sustained period of work into an explicit sequence so the project can keep moving without re-planning every slice from scratch

## 1. Tranche objective

Use the next tranche to move the project from:
- signed-off narrow v1 plus early post-v1 hardening
- first hygiene/classification/governance surfaces

to:
- a cleaner GO-candidate publication state
- a more pressure-tested product mainline
- an explicit controlled path toward repo-public / ClawHub / later outreach

## 2. Tranche rules

- keep the signed-off narrow v1 baseline protected
- keep product mainline primary
- keep publication governance active in parallel
- do not open a third uncontrolled workstream
- prefer 1 bounded product slice + 1 bounded governance slice at a time
- after each meaningful slice, sync docs/status and preserve one recommended next slice

## 3. Planned tranche sequence

### Tranche Slice G1 — default-vs-local classification baseline
Status:
- completed

Outcome:
- classification authority written
- README and status linked to the classification model

### Tranche Slice M1 — ambiguous class-fit refinement
Status:
- completed

Outcome:
- retrieval vs troubleshooting/config overlap tightened
- compact validator now 36/36

### Tranche Slice G2 — public release gate draft
Status:
- completed

Outcome:
- first explicit `NOT YET GO` gate exists
- remaining publication gaps are named rather than implied

### Tranche Slice G3 — remaining public-facing contradiction/classification cleanup
Target:
- finish the highest-value cleanup in release-facing docs so the public story no longer mixes local validation evidence, old counts, or inconsistent package framing

Definition of done:
- no obvious contradiction across README, release note, proof summary, status, public description, and usage/boundaries
- public docs consistently respect the default-vs-local classification model
- release gate can be updated with a clearer readiness judgment

### Tranche Slice M2 — small pressure-test family
Target:
- add one bounded pressure-test family that asks a real question, rather than opening a broad benchmark project

Preferred pressure-test family:
- English-light but still technical multilingual prompts
- or prompts with alias-heavy target naming and weak English anchors

Definition of done:
- one named pressure-test family added
- matrix/validator result recorded honestly
- if logic changes are needed, keep them narrow and justified

### Tranche Slice G4 — README/install/public-story coherence pass
Target:
- make the repo legible to an outside reader in one pass

Definition of done:
- repo homepage surfaces clearly explain:
  - what the package is
  - skill vs plugin boundary
  - what narrow v1 means
  - what is evidence vs setup guidance
  - what is still not claimed

### Tranche Slice G5 — ClawHub readiness review
Target:
- determine whether this asset is publishable to ClawHub as-is, after one packaging pass, or only in staged form

Definition of done:
- explicit answer to:
  - publish skill only,
  - publish skill+plugin together,
  - or stage publication
- publish metadata gaps listed if any remain

### Tranche Slice M3 — one more bounded refinement only if pressure-test evidence justifies it
Target:
- make exactly one further logic improvement if the previous pressure-test family exposed a real gap

Definition of done:
- either one narrow fix lands, or the outcome is explicitly “no fix justified yet”

### Tranche Slice G6 — release execution-order checkpoint
Target:
- prepare the exact sequence for:
  - repo public
  - ClawHub publication
  - later official/community entry

Definition of done:
- one execution-order document exists
- external actions remain gated by explicit approval at execution time

### Tranche Slice R1 — publication readiness re-judgment
Status:
- completed

Outcome:
- the release gate has now advanced from `NOT YET GO` to `GO-CANDIDATE`
- remaining work is now final pre-execution verification, not foundational publication cleanup

## 4. Tranche dependency logic

Critical path:
1. contradiction/classification cleanup
2. small pressure-test family
3. README/public-story coherence pass
4. ClawHub readiness review
5. release execution-order checkpoint
6. readiness re-judgment

Meaning:
- repo publicity should not come before the gate update
- ClawHub should not come before the readiness review
- outreach should not come before repo public + publish surfaces are coherent

## 5. Tranche stop conditions

Pause and re-evaluate if any of the following happens:
- validator regression without a clearly bounded fix
- publication cleanup reveals larger contamination than expected
- package boundary or ClawHub shape turns out materially different from current assumptions
- the project starts growing a third parallel line again

## 6. Tranche completion condition

This tranche is complete when:
- the project either reaches a credible `GO-CANDIDATE` state
- or it ends with a sharply reduced remaining-gap list and a stable next-tranche handoff

Current tranche result:
- completed successfully to `GO-CANDIDATE`
- next phase is pre-execution verification rather than more foundational planning

## 7. Immediate next step

Immediate next slice:
- **G3 — remaining public-facing contradiction/classification cleanup**

Immediate after that:
- **M2 — one small pressure-test family**
