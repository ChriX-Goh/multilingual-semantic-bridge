# Multilingual Semantic Bridge — Plugin Validation Workflow V1

Date: 2026-04-17 UTC+8
Status: active validation runbook

## Purpose

Provide one repeatable validation path for the plugin that:
- does not disturb the active user session
- makes hook execution evidence easy to inspect
- keeps operator controls explicit instead of relying on ad hoc memory

## Core operator controls

Current plugin config surface:
- `enabled: boolean`
  - `true` or unset: plugin may activate normally
  - `false`: plugin stays off
- `testTrigger: string`
  - if present in the prompt, it forces activation
  - default: `bridge-plugin-test`
- `debug: boolean`
  - when `true`, logs a structured plugin-fire event with reasons
  - when `false` or unset, normal runs stay quieter

## Recommended validation modes

### Mode A — pure decision-layer check
Use when:
- tuning activation heuristics
- tuning intent/style mapping
- expanding the compact matrix

Path:
- edit `plugin/logic.ts`
- update `scripts/plugin-case-matrix-cases.mjs`
- run `scripts/validate-plugin-case-matrix.mjs`

Strengths:
- fast
- reproducible
- no gateway disturbance

Limit:
- does not prove runtime hook execution by itself

### Mode B — isolated runtime proof
Use when:
- validating real hook firing
- validating prompt-context mutation in a live gateway path
- confirming class-specific behavior after meaningful logic changes

Required discipline:
- use an isolated profile
- use an isolated gateway port
- pin the target gateway URL explicitly
- avoid touching the active Control UI / current user session
- inspect gateway logs for hook execution evidence

## Safe isolated runtime recipe

### 1. Use an isolated profile and gateway
Do not validate against the active user-facing session.

Required characteristics:
- separate profile
- separate gateway port
- explicit plugin load path
- explicit model config known to work with current auth

### 2. Pin the gateway target
Do not rely on default gateway resolution.

Need explicit target pinning such as:
- pinned gateway URL
- pinned session key for the proof turn

### 3. Keep debug intentional
Recommended defaults:
- ordinary runtime proof: `debug=false`
- troubleshooting a missed fire or wrong class: `debug=true`

### 4. Evidence to collect
Successful proof should capture at least:
- `before_prompt_build` runner invocation
- `multilingual bridge hook fired` when debug is enabled
- prompt mutation evidence such as `prependSystemContext/appendSystemContext`
- the sample prompt and expected context style

## When to use `testTrigger`

Use `testTrigger` when:
- validating hook wiring
- forcing activation to inspect downstream behavior
- separating hook problems from heuristic problems

Do not use `testTrigger` as the only evidence for normal-case quality.
After a forced-fire check passes, return to heuristic-driven prompts.

## Recommended workflow by change type

### Heuristic-only changes
1. run decision-layer validator first
2. only if that passes, run one isolated runtime proof

### Context-style changes
1. run decision-layer validator first
2. run at least one isolated runtime proof for the affected class
3. compare observed downstream shape with expected class

### Debug/control changes
1. check config surface/docs first
2. run one isolated proof with `debug=true`
3. run one isolated proof with `debug=false`

## Current known pitfalls

- Do not treat the active Control UI session as a disposable validation target
- Do not trust default gateway selection when proving isolated plugin behavior
- Do not confuse wrapper auth state, profile state, and plugin-load state
- Do not rely on local matrix success alone as runtime proof

## Current minimal operator stance

For v1, stay with a small control surface:
- `enabled`
- `testTrigger`
- `debug`

Do not add a larger operator UI or command surface unless repeated real use shows the current controls are insufficient.
