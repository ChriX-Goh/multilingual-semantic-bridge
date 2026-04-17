# Multilingual Semantic Bridge — Sustained Execution Cadence

Date: 2026-04-18 UTC+8
Status: active sustained execution cadence
Purpose: keep the project moving over the long run without losing the mainline to side quests, premature publication, or planning drift

## 1. Planning style

Use a **two-track sustained cadence** under one protected mainline:
- **Track M — Mainline product hardening**
- **Track G — Publication governance and hygiene**

Rule:
- Track M remains the product mainline
- Track G exists to make eventual publication safe and professional
- neither track may expand into uncontrolled side work
- only one bounded slice per track may be active at a time

## 2. Protected ordering

The intended long-run order is:
1. keep improving the product in bounded slices
2. keep cleaning publication surfaces in bounded slices
3. create a release gate with explicit pass/fail evidence
4. only then consider public release, ClawHub, and external entry

This avoids two failure modes:
- product drift from too much publication/admin work
- public release of a repo that still contains local/operator ambiguity

## 3. Track M — Mainline product hardening

### Current objective
Continue post-v1 hardening without reopening the signed-off narrow baseline.

### Current next slice
**M-next: A4 retrieval-vs-troubleshooting class-fit refinement**

Question:
- on ambiguous prompts that mention prior artifacts plus current symptoms, are we still leaning the wrong way between `history_recall` and `symptom_diagnosis`?

Definition of done:
- one explicit edge-case family added
- one justified refinement if needed
- validator remains green
- docs/status synced

### After A4
Only choose the next product slice from this short queue:
1. one more bounded class-fit or false-positive refinement if evidence justifies it
2. one small pressure-test family
3. only then broader coverage work

### Product anti-drift rule
Do not let product work get displaced by:
- ACP/harness theory expansion
- adjacent ecosystem speculation
- early benchmark empire-building
- broad architecture temptation

## 4. Track G — Publication governance and hygiene

### Current objective
Turn the repo into a clean public-facing asset without leaking local environment assumptions.

### Current next slice
**G-next: default-vs-local classification pass**

Question:
- can a new reader clearly tell what is a portable project default, what is only validation evidence, and what is author-local/operator-specific?

Definition of done:
- one explicit classification surface exists
- key public docs consistently use that language
- remaining local validation references are either relabeled, moved, or explicitly scoped

### After classification pass
Only choose the next governance slice from this short queue:
1. release-gate checklist draft
2. README/install/public story coherence pass
3. ClawHub readiness review

### Governance anti-drift rule
Do not let governance work drift into:
- premature outreach drafting everywhere
- premature cross-ecosystem marketing
- public-release execution before the gate is green

## 5. Cadence rhythm

### Working rhythm
Use a repeating 4-step cycle:
1. choose one bounded slice
2. implement or edit only what that slice requires
3. validate and sync docs/status
4. end with one explicit next recommended slice

### Strategic rhythm
- after every 2 bounded slices: mini strategic checkpoint
- after every 4 bounded slices: fuller readiness review
- after any strong user correction: update durable planning surfaces immediately

## 6. Milestone ladder

### Milestone S1 — Product/classification stabilization
Must include:
- A4 class-fit slice complete
- default-vs-local classification pass complete

### Milestone S2 — Publication gate draft
Must include:
- first release-gate checklist
- README/install/public story coherence reviewed
- hygiene judgment updated

### Milestone S3 — Publication readiness judgment
Must include:
- explicit go / not-yet-go recommendation
- if not ready, smallest remaining gap list
- if ready, external-action execution order prepared but still gated

### Milestone S4 — Controlled externalization
Only after approval:
- repo public
- ClawHub publication if still appropriate
- selective official/community entry

## 7. Dependency view

### Hard dependencies
- validator must stay healthy
- repo must stay synchronized
- docs/status must remain aligned with code reality
- hygiene classification must stay explicit

### Soft dependencies
- cleaner README/install story
- later pressure-test pack
- later external positioning copy

## 8. Main long-run risks and controls

### Risk 1 — too many side topics reopen
Control:
- keep all non-mainline curiosities subordinate to the current bounded slice

### Risk 2 — publication governance swallows product work
Control:
- keep Track M as the mainline and require progress there to continue visibly

### Risk 3 — product hardening ignores publication reality
Control:
- keep Track G alive in bounded parallel slices so cleanup does not become a last-minute panic

### Risk 4 — readiness gets assumed instead of checked
Control:
- require explicit release-gate evidence before any external action

## 9. Immediate next two-slice recommendation

### Slice 1
G-next: default-vs-local classification pass
- write the classification model
- normalize the most visible public docs against it

### Slice 2
M-next: A4 retrieval-vs-troubleshooting class-fit refinement
- add ambiguous edge prompts
- tighten class fit only if evidence supports it

This sequence keeps publication hygiene moving without losing the product mainline.

## 10. Executive rule

The project should now be operated like this:
- one bounded product slice
- one bounded governance slice
- no uncontrolled third line
- no external release until the gate says so
