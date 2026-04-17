# Multilingual Semantic Bridge — Release Execution Order

Date: 2026-04-18 UTC+8
Status: draft execution-order checkpoint
Purpose: define the exact outward execution order once the gate is ready, without performing any external action prematurely

## 1. Rule

This document is an execution-order checkpoint, not authorization.
No external action in this document should be executed until:
- the release gate is updated beyond `NOT YET GO`
- the user explicitly approves execution at that time

## 2. Outward execution order

### Step 1 — Final gate re-check
Confirm:
- public-facing docs are sanitized enough
- public story is coherent
- ClawHub publication unit is chosen
- no last-minute contradiction remains in release-facing surfaces

### Step 2 — Repo visibility change
Action:
- change the GitHub repo from private to public

Why second and not earlier:
- repo visibility should follow the gate, not substitute for it

### Step 3 — Public surface verification
Immediately after repo-public:
- re-check README rendering
- re-check public description alignment
- re-check that no newly visible doc obviously leaks local/operator-specific assumptions

### Step 4 — ClawHub publication
Action:
- publish the chosen asset/unit through the official `openclaw skills` path if still appropriate

Condition:
- only after the exact publication unit and metadata are confirmed

### Step 5 — Public verification after ClawHub
Confirm:
- published asset renders as intended
- install/readiness story is coherent
- public-facing description still matches the repo state

### Step 6 — Selective outward entry
Possible later actions:
- official/community issue/discussion/PR drafting
- curated ecosystem sharing in relevant places

Condition:
- only after repo-public and ClawHub surfaces are stable enough to point people at with confidence

## 3. Approval gates

The following each require explicit approval at execution time:
- repo public
- ClawHub publication
- official outreach
- other community posting

## 4. Failure handling

If any step reveals a new contradiction or contamination problem:
- stop the sequence
- fix the problem
- update the gate before continuing
