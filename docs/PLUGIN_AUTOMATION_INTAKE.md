# Multilingual Semantic Bridge — Plugin Automation Intake

Date: 2026-04-17 UTC+8
Status: intake / phase-2 planning

## Why this intake exists

The project already proved value at the skill and routing-discipline layer, but it still depends too much on manual invocation or lucky semantic activation.

Current problem statement:
- the bridge is useful
- but it is not yet reliably on the default path
- this leaves too much dependence on the user remembering it exists, or the agent happening to invoke it

This fails part of the original goal:
- help non-English wording fully exploit OpenClaw's memory/vector/docs/skill/runbook surfaces
- reduce the gap between user wording and English-heavy technical target naming
- reduce recall failure caused by phrasing changes, synonyms, or language shifts

## What has been confirmed

### Project-side facts
- a live `multilingual-semantic-bridge` skill exists
- routing policy v1 exists
- the goal board already says the next major aim should be routing automation before deeper backend work
- the implementation matrix explicitly kept plugin/sidecar work as a later layer only if justified by evidence

### Official OpenClaw plugin facts
- native plugins are valid for tools, hooks, services, and routes
- hook-only plugins remain supported, though they are treated as a legacy-compatible shape
- OpenClaw docs explicitly recommend narrow documented SDK subpaths and clear plugin boundaries
- `before_model_resolve` is the preferred hook for model/provider override work
- `before_prompt_build` is the preferred hook for prompt mutation work
- plugin manifests must use `openclaw.plugin.json`

## Current judgment

A plugin is now justified, but only as a narrow automation layer.

Not recommended:
- giant always-on "semantic brain" plugin
- premature vector backend rewrite
- private core hacking

Recommended:
- a small plugin that automates bridge activation and route hints
- keep the existing skill as the explicit method/discipline layer
- use the plugin to reduce activation failure, not to replace all retrieval systems

## Minimum viable plugin scope

### Primary responsibility
Detect when user wording and likely technical target naming are misaligned enough that bridge assistance should be injected automatically.

### First-version responsibilities
1. inspect the incoming user wording
2. decide whether bridge activation is warranted
3. preserve original phrasing
4. derive canonical intent
5. derive a technical pivot when appropriate
6. attach routing guidance toward the most likely target surface:
   - memory
   - official docs
   - skill artifact
   - runbook/local file
   - exact-token artifact

### Explicit non-goals for v1
- do not replace OpenClaw memory search
- do not create a new vector database
- do not mutate unrelated plugin/runtime behavior
- do not become a broad catch-all prompt rewriter for every turn
- do not bypass official retrieval surfaces

## Candidate placement

### Most plausible first hook
- `before_prompt_build`

Reason:
- this is prompt mutation territory, not provider override territory
- the bridge mainly needs to influence how the system frames retrieval/routing before the model reasons with the turn

### Possible later extension
- additional lightweight routing/service support if the first hook is too weak

### Not first choice right now
- deep memory plugin slot
- context-engine replacement
- provider plugin

## Rollback rule

Any plugin version must stay detachable.
A broken bridge plugin should be removable with standard OpenClaw plugin disable/uninstall flows and should not leave the gateway dependent on it.

## GitHub/repo continuity note

The dedicated local repo boundary exists at:
- `exports/multilingual-semantic-bridge-repo`

During this intake, the local repo still had a configured `origin` URL but GitHub API checks could not resolve the target repository. That means remote continuity must be re-verified or repaired before GitHub-backed issue tracking is considered reliable again.

## Immediate next steps

1. verify or repair the GitHub remote boundary
2. create a tracked pluginization work item in GitHub
3. scaffold a narrow plugin package outside the live workspace root
4. implement only the minimum `before_prompt_build` automation path
5. validate on real multilingual retrieval cases before expanding scope
