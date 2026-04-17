# Multilingual Semantic Bridge — Release Note v1

> Status: signed-off narrow v1 release note
> Date: 2026-04-17 UTC+8

## Summary

This release marks the signed-off **narrow v1** cut of **Multilingual Semantic Bridge**:
a bridge package that combines:
- a deeper skill for multilingual retrieval/routing discipline
- a narrow prompt-time plugin on-ramp for bridge-worthy multilingual technical prompts

The project is not a generic translation tool.
Its job is to improve **target matching** across English-heavy technical surfaces such as:
- memory recall
- official docs
- local files and operational docs
- skill routing
- config / CLI / provider terminology

## What this version does

The skill now expresses one clear mainline pipeline:
1. preserve original input
2. derive canonical intent
3. generate a technical pivot when needed
4. bridge terminology
5. improve retrieval and routing
6. persist confirmed mappings

Operationally, this version now makes explicit:
- when original phrasing is often enough
- when canonical intent should be treated as the default bridge layer
- when an English technical pivot is strongly recommended
- when exact identifiers must remain verbatim

## What evidence supports this cut

This cut is not based only on design preference.
It is backed by project evidence across multiple target classes and validation layers:
- compact trigger/style matrix validation
- isolated runtime proof across retrieval/history recall
- isolated runtime proof across config/setup
- isolated runtime proof across troubleshooting/symptom diagnosis
- isolated runtime proof across docs/upstream reference
- documented validation workflow, operator controls, and plugin-skill boundary contract

Current project conclusion:
- original-language retrieval remains first-class
- English technical pivots act as an additive precision layer
- the bridge is especially valuable when target naming is English-heavy and operationally specific
- the current narrow plugin on-ramp is useful enough to sign off, without replacing the deeper skill method

## What this version does not claim

This release does **not** claim that:
- multilingual retrieval is a solved problem in every setting
- backend experimentation is complete
- broad external benchmarking is already exhaustive
- every language/domain pair will benefit equally

This is the first stable publishable cut, not the last word on the project.

## Why this release matters

Many technical environments remain English-heavy even when user requests are not.
This skill gives the assistant a practical way to:
- keep the user's original meaning
- reformulate it into a better retrieval/routing target
- improve precision without collapsing everything into one language-only workflow

## Likely next phase

Future work, if pursued, should now be treated as **post-v1** work rather than hidden unfinished v1 cleanup.
Possible later directions:
- broader evaluation sets
- explicit benchmark harnesses
- utility hardening on harder multilingual prompts
- stronger examples of plugin-alone vs plugin-plus-skill discipline
- deeper retrieval-side experiments only if later evidence justifies them
