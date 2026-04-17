# Multilingual Semantic Bridge — ClawHub Readiness Review

Date: 2026-04-18 UTC+8
Status: first ClawHub-readiness review
Purpose: decide whether the current asset should be published to ClawHub as-is, after one more packaging pass, or only in staged form

## 1. Question

Is the current multilingual-semantic-bridge repo ready to be published to ClawHub directly, or should publication be staged?

## 2. Current asset shape

Current repo shape includes:
- the primary skill asset
- the sibling plugin package
- validation scripts and validator cases
- release/publish/governance docs

This is useful for project continuity, but it is not automatically the same as a clean registry-facing package shape.

## 3. Current judgment

Current recommendation:
- **STAGE PUBLICATION**

Meaning:
- do not assume the whole repo should be published to ClawHub in one undifferentiated step right now
- the most likely healthy first publication path is still the skill-facing asset first, with the plugin/package relationship remaining explicit
- only publish once the public-facing docs and packaging story are coherent enough for an outside installer

## 4. Readiness checks

### A. Official path availability
- [x] official `openclaw skills` command path exists in this environment
- [x] local ClawHub skill guidance has been re-checked

### B. Asset clarity
- [x] the project has a clear narrow-v1 story
- [x] plugin vs skill boundary is documented
- [ ] the exact ClawHub-facing publication unit is fully settled

Current note:
- the repo is clear as a project boundary, but the precise registry-facing unit still needs one more explicit decision pass

### C. Public-facing coherence
- [x] public description exists
- [x] usage/boundaries exist
- [x] release note and proof summary exist
- [ ] public-facing docs are fully cleaned for outside registry consumption

Current note:
- better than before, but still in active hygiene/coherence work

### D. Install/readiness story
- [ ] one clean outside-reader install/use story has been confirmed end-to-end
- [ ] publication metadata expectations for the chosen ClawHub unit have been re-checked

Current note:
- not yet complete enough to call registry-ready

## 5. Best current publication stance

Best current stance:
1. finish publication hygiene/coherence work
2. decide the exact publication unit explicitly
3. prepare ClawHub metadata for that chosen unit
4. publish only after the release gate improves beyond `NOT YET GO`

## 6. Candidate publication options

### Option A — Publish the skill-facing asset first
Pros:
- simplest public story
- most aligned with the project's original public value proposition
- easier to explain to outside users

Cons:
- plugin story must be clearly framed as part of the repo/project but not confused with the first registry-facing unit unless intentionally included

### Option B — Publish the combined project as one package story
Pros:
- preserves the current repo reality
- reflects the actual skill + plugin project framing

Cons:
- may be heavier and less immediately legible to registry-facing users
- requires cleaner install/story surfaces first

### Option C — Delay ClawHub and publish only after repo-public plus another packaging pass
Pros:
- lowest confusion risk
- cleaner public first impression

Cons:
- slower ecosystem entry

## 7. Recommendation

Current recommendation:
- keep ClawHub in the plan
- but treat it as a **staged publication step**, not an immediate next action
- revisit after the release gate advances and the registry-facing unit is explicitly chosen

## 8. Current result label

**Not ClawHub-ready yet, but plausibly stageable after one more packaging/public-story pass.**
