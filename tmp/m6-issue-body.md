## Why this exists

Track the phase-2 pluginization line as a durable GitHub-backed work item now that repo continuity is healthy again.

## Current status

- plugin scaffold exists and loads as a hook-only plugin
- `before_prompt_build` runtime firing is proven in isolated live runs
- compact runtime proof now spans retrieval, config/setup, troubleshooting, and docs/reference classes
- compact case matrix expanded from 14 to 26 cases with a reproducible validator script
- M4 operator-control/validation workflow is documented
- M5 plugin-skill cooperation contract is documented

## Remaining work

- finish M6 packaging/continuity readiness cleanup
- decide whether tracked work should stay in one umbrella issue or split into milestone sub-issues later
- make the v1 package-boundary decision explicit in docs
- decide whether a release candidate checkpoint is justified after the current v1 gates are re-read

## Current proposed package-boundary decision

For v1, keep the plugin as a sibling package inside this dedicated repo rather than splitting it into a separate repo/package now.

Why:
- current plugin and skill are still evolving together
- shared docs/contract/validation surfaces are changing in lockstep
- a split now would add overhead before the packaging boundary is truly stable
- the plugin is not yet at an external-publication-ready independence level

## Next suggested follow-up

- update delivery-plan / roadmap / README surfaces to reflect the package-boundary decision and restored GitHub continuity
- then decide whether to open sub-issues for packaging, release-readiness, and tracked follow-up work
