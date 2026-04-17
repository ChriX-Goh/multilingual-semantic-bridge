# Multilingual Semantic Bridge — ClawHub Publication Unit Decision

Date: 2026-04-18 UTC+8
Status: first explicit publication-unit decision
Purpose: decide what exactly should be treated as the registry-facing publication unit for ClawHub

## 1. Decision

Current decision:
- **Stage publication with the skill-facing asset first.**

## 2. Chosen publication unit

Chosen first registry-facing unit:
- `skills/multilingual-semantic-bridge/`

## 3. Why this is the best first unit

### A. It is the clearest public value proposition
The original externally legible value of the project is the multilingual semantic bridge method itself.
That is already expressed cleanly in the skill asset.

### B. It matches current skill-readiness criteria best
The skill package:
- has a clear `SKILL.md`
- has lightweight supporting references
- expresses the mainline cleanly
- is easier to explain to a registry-facing outside reader than the whole repo-plus-plugin story at once

### C. It avoids overloading the first publication step
The current repo contains:
- the skill
- the sibling plugin package
- validation scripts
- release/governance artifacts

That is the right project boundary, but it is heavier than the simplest first registry unit.

### D. It preserves staging flexibility
The plugin remains visible in the repo and in the overall project story.
But the first registry-facing publication does not need to force the combined project shape prematurely.

## 4. What this decision does not mean

It does **not** mean:
- the plugin is unimportant
- the plugin must never be published later
- the repo should hide the plugin boundary

It means:
- the first ClawHub-facing unit should optimize for clarity and public legibility

## 5. Consequence for publication order

Correct order now becomes:
1. repo reaches better-than-`NOT YET GO` gate state
2. repo may be made public with approval
3. publish the skill-facing asset first through ClawHub if still appropriate
4. keep the plugin as part of the public project story and reconsider separate/combined publication later

## 6. Remaining metadata question

Still to confirm later:
- whether any ClawHub-specific metadata polish is still needed for the chosen skill-facing unit before execution

## 7. Current result label

**Chosen first ClawHub publication unit: the skill-facing asset, staged before any broader combined publication move.**
