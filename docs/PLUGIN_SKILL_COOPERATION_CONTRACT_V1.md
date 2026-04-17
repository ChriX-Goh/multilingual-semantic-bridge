# Multilingual Semantic Bridge — Plugin/Skill Cooperation Contract V1

Date: 2026-04-17 UTC+8
Status: active boundary contract

## Purpose

Make the relationship between the prompt-time plugin and the deeper bridge skill explicit.

This contract exists to prevent two opposite drifts:
- the plugin silently swelling into a hidden second bridge system
- the skill remaining theoretically richer but practically bypassed or forgotten

## Roles

### Plugin role
The plugin is the automatic narrow on-ramp.

It should:
- fire only for bridge-worthy multilingual technical prompts
- preserve the user's wording
- add compact context that improves target-surface selection
- bias the run toward the right retrieval/routing class
- remain fast, inspectable, and detachable

It should not:
- become a large reasoning engine
- hold a long library of mappings or policies that really belong in the skill/docs
- replace deliberate target-surface choice with a hidden black box
- silently override exact identifiers or exact official terms

### Skill role
The skill is the deeper bridge method.

It should:
- carry the full bridge workflow
- define canonical-intent discipline
- define technical-pivot discipline
- define target-surface selection rules
- hold richer examples, reusable mapping guidance, and durable method

It should not:
- be required for every easy multilingual technical turn
- duplicate the plugin's narrow runtime wiring concerns

## Decision rule: plugin alone vs deeper skill discipline

### Plugin alone is usually enough when
- the likely target class is already obvious
- the bridge need is mostly activation, not deep ambiguity resolution
- the prompt can be cleanly classified as one of the current compact classes:
  - retrieval/history recall
  - config/setup
  - docs/upstream reference
  - troubleshooting/symptom diagnosis
- the likely next move is straightforward once the target surface is chosen

Typical examples:
- mixed-language prompt asking where official docs are
- colloquial token-error prompt where the subsystem is already obvious
- multilingual setup/config prompt with clear technical anchors
- retrieval failure around prior notes/runbooks with a clear artifact class

### Deeper skill discipline should dominate when
- the target surface itself is ambiguous
- multiple neighboring targets could match the same symptom wording
- the user is asking for a method, not only a destination
- the case needs explicit canonical-intent derivation before any retrieval is trustworthy
- terminology mapping itself is the main work product
- the problem crosses memory/docs/config/runbooks in a way that needs deliberate surface arbitration

Typical examples:
- a colloquial request could plausibly refer to memory, docs, a skill, or a runbook
- the user wants to design or improve the bridge itself
- the user asks how the bridge should reason, not just what file/doc/key to hit
- a multilingual phrase keeps mapping to the wrong target and needs a reusable correction

## Practical interaction model

### Normal path
1. plugin fires if the prompt looks bridge-worthy
2. plugin adds compact context and bias toward the likely target class
3. ordinary retrieval/routing proceeds
4. if the case remains straightforward, stop there

### Escalation path
1. plugin fires
2. ambiguity remains materially unresolved
3. the assistant should then apply the deeper bridge skill discipline explicitly
4. the final answer or work should reflect that deeper arbitration

## Hard boundary

The plugin may hint at the bridge method.
It must not become the full method.

If a useful future behavior would require:
- richer examples
- persistent mapping doctrine
- deeper target-surface arbitration
- more philosophy about canonical intent and technical pivots

that behavior belongs in the skill/docs layer first, not as hidden plugin growth.

## Documentation ownership

- plugin wiring, controls, and runtime validation belong with the plugin docs
- bridge method, canonical-intent discipline, and target-surface doctrine belong with the skill/docs layer
- when both layers change together, update both in the same work cycle

## Current V1 stance

For V1:
- keep the plugin narrow
- keep the skill authoritative for the deeper method
- allow plugin-alone wins in easy cases
- escalate to skill discipline when ambiguity or surface arbitration becomes the real task
