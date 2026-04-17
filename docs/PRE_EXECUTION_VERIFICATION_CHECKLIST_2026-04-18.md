# Multilingual Semantic Bridge — Pre-Execution Verification Checklist

Date: 2026-04-18 UTC+8
Status: pre-execution verification checklist
Purpose: define the final checks to run immediately before any outward action so the project can move from GO-CANDIDATE into an actual execution moment safely

## 1. Rule

This checklist is for the final moment before outward execution.
It does not authorize any external action by itself.

## 2. Use this checklist before any of the following
- changing repo visibility to public
- publishing the chosen unit to ClawHub
- posting outward-facing official/community messages

## 3. Final verification checks

### A. Repo-public check
- [ ] README still renders cleanly and reads coherently from the top
- [ ] no new public-facing doc regression appeared after the latest tranche commits
- [ ] no accidental author-local/operator-specific detail has appeared in outward-facing docs
- [ ] `STATUS.md` still matches the current gate and tranche state

### B. Chosen publication-unit check
- [ ] chosen first ClawHub publication unit is still `skills/multilingual-semantic-bridge/`
- [ ] skill-facing description still matches the intended public value proposition
- [ ] no last-minute packaging confusion suggests the plugin should be published first instead

### C. Gate-state check
- [ ] current gate still reads `GO-CANDIDATE`
- [ ] no new issue has appeared that would push the gate back down
- [ ] remaining minor polish items are still consciously accepted as non-blocking

### D. Approval check
- [ ] user explicitly approves the specific outward action being executed now

## 4. Failure rule

If any check fails:
- stop the outward action
- fix the issue
- update the relevant gate/status surface first

## 5. Execution sequence reminder

Correct order remains:
1. final verification
2. repo public
3. public verification
4. ClawHub publication of the chosen first unit
5. public verification again
6. later selective outreach
