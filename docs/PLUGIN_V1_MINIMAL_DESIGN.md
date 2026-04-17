# Multilingual Semantic Bridge — Plugin V1 Minimal Design

Date: 2026-04-17 UTC+8
Status: draft design

## Objective

Move the bridge from a useful but manually activated skill into a narrow automation layer that reduces activation failure for multilingual / cross-terminology queries.

## V1 success condition

For selected multilingual cases, the system should automatically preserve the original wording, derive a canonical intent and technical pivot when needed, and improve prompt-side retrieval/routing guidance without requiring the user to remind the assistant that the bridge exists.

## Recommended first implementation shape

### Plugin shape
- native OpenClaw plugin
- non-capability or hook-focused plugin
- narrow manifest + narrow runtime entry

### First hook
- `before_prompt_build`

Reason:
- official docs describe this as the preferred place for prompt mutation work
- the bridge's first goal is to improve prompt-time retrieval/routing framing, not to replace model resolution or backend storage

## Proposed V1 flow

1. observe the incoming user turn
2. score whether bridge activation is likely useful
3. if not useful, do nothing
4. if useful:
   - preserve original wording
   - derive canonical intent
   - derive technical pivot when justified
   - add a compact routing hint block to prompt-build context
5. leave actual memory/docs/skill/runbook retrieval on official/core surfaces

## Activation heuristics for V1

The plugin should activate only when at least one of these is true:
- user wording is non-English or mixed-language and the likely target is English-heavy technical terminology
- wording is colloquial/symptom-first and likely hides a more canonical technical target
- likely target class is one of:
  - official docs
  - config keys
  - CLI commands
  - skill metadata
  - runbook names
  - exact operational files
- phrasing drift or synonym variation is likely to reduce memory/vector hit quality

## Guardrails

- keep the plugin detachable
- keep prompt mutation compact and inspectable
- do not auto-fire on every multilingual turn
- do not overwrite original wording
- do not add broad speculative rewrites when the exact target is already explicit
- do not treat memory as the default target for everything

## Relationship between plugin and skill

The intended model is **cooperative, not replacement**.

### What the plugin should do
- run automatically at prompt-build time when the activation conditions are met
- add a compact bridge context block
- reduce activation failure for multilingual / synonym-drift / terminology-mismatch cases
- stay narrow, fast, and detachable

### What the skill should still do
- provide the explicit bridge method
- provide richer reasoning discipline and examples
- guide deeper target-surface selection when the case is ambiguous
- carry the longer-form operational method and reusable mapping ideas

### Practical effect
- In easy cases, the plugin may be enough by itself.
- In harder cases, the plugin should act like an automatic on-ramp that makes the assistant more likely to use the original bridge discipline well.
- So the desired outcome is not "plugin or skill" but "plugin helps the skill's logic show up automatically when needed".

## What remains in the skill

The skill still owns:
- the explicit bridge method
- the richer reasoning discipline
- long-form guidance and examples
- durable mapping/persistence guidance
- human-invoked deep bridge behavior

## What the plugin adds

The plugin adds:
- automatic bridge activation
- automatic compact bridge context injection
- lower dependence on user reminders or lucky invocation

## Open questions before implementation

1. What exact hook payload should be mutated in the current OpenClaw version?
2. How should the plugin expose its own debug signal for validation without spamming normal turns?
3. Should V1 keep learned mappings purely markdown-first, or keep plugin runtime stateless?
4. Should V1 live in this repo as a sibling package to the skill, or in a separate repo/package later?

## Immediate next coding step

The original smallest-safe proof was to read the exact current `before_prompt_build` hook contract and scaffold a plugin package that does nothing except:
- load cleanly
- register the hook
- no-op unless a hardcoded trigger phrase matches
- log whether the hook fired

That proof is now complete, and the current implementation has already moved beyond it into a narrow heuristic activation pass.

## Confirmed runtime validation method (2026-04-17)

For real runtime proof, use an isolated validation path instead of the active Control UI / main gateway path.

Recommended method:
- isolated profile
- isolated gateway port
- isolated copied plugin path when needed
- direct gateway RPC with explicit target URL pinning
- gateway-log inspection for hook execution evidence

Evidence to look for:
- `before_prompt_build` hook runner invocation
- `multilingual bridge hook fired`
- prompt-context mutation before model submission

## Confirmed runtime result

The plugin's `before_prompt_build` hook has now been confirmed to fire in a real runtime path.
The handler executes and injects prompt context before model submission.

## Validation lesson

Do not rely on `openclaw agent` or status commands alone for isolated plugin-runtime proof unless the target gateway URL is explicitly pinned. Those commands can silently resolve against the active/default gateway and produce misleading evidence.
