# Multilingual Semantic Bridge Plugin Prototype

This plugin is the lightweight automatic on-ramp for the broader Multilingual Semantic Bridge project.

If the assistant sees a multilingual technical prompt that is probably bridge-worthy, this plugin can step in early and provide a tighter context style before the deeper skill takes over.

## Relationship to the skill

This plugin is best used together with the **Multilingual Semantic Bridge skill**.

Plainly:
- the **plugin** helps the assistant notice when bridging should start
- the **skill** provides the fuller method for canonical intent, terminology bridging, and target-surface choice

That means:
- plugin-only can still be useful in simpler cases
- but **plugin + skill together** is the intended stronger setup
- this plugin should be understood as an accelerator, not a replacement for the skill

## Public project links
- GitHub project: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill page: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge

## What this plugin is for
This plugin exists to reduce a specific failure mode:
- the user asks in natural multilingual wording
- the real target lives in English-heavy technical terminology
- the assistant fails to notice that bridging is needed early enough

So the plugin does a narrow job:
- detect likely bridge-worthy multilingual technical prompts
- select a compact context style
- stay auditable, bounded, and easy to disable

## Current state
- native OpenClaw plugin scaffold
- uses `before_prompt_build`
- supports configured test-trigger validation
- supports the current narrow multilingual technical heuristic layer
- routes trigger cases into compact context styles for retrieval, setup, docs/reference, troubleshooting, or generic bridge help

## Why it is intentionally narrow
This plugin is not meant to become a hidden always-on rewrite layer.
Its job is to create a better entry point, not silently replace the whole retrieval stack.

That keeps:
- rollback easy
- behavior inspectable
- false-positive risk lower
- the boundary with the deeper skill explicit

## Current operator controls
Config fields:
- `enabled`
- `testTrigger`
- `debug`

Practical meaning:
- `enabled=false` disables the plugin cleanly
- `testTrigger` can force activation for validation turns
- `debug=true` logs structured fire reasons for troubleshooting and validation

## Validation guidance
Use two layers:
- decision-layer validation via `plugin/logic.ts` and `scripts/validate-plugin-case-matrix.mjs`
- isolated runtime proof on a pinned non-user-facing gateway path

Do not validate by disturbing the active Control UI session.
See `docs/PLUGIN_VALIDATION_WORKFLOW_V1.md` for the current safe workflow.
