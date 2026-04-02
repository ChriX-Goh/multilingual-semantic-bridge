# Multilingual Semantic Bridge — Release Note v1

> Status: draft release note for the first stable publishable cut
> Date: 2026-04-01 UTC

## Summary

This release introduces the first stable cut of **Multilingual Semantic Bridge**:
a skill that helps map non-English or mixed-language user input onto English-heavy technical targets such as:
- memory recall
- official docs
- local files and operational docs
- skill routing
- config / CLI / provider terminology

The skill is not a generic translation tool.
Its job is to improve **target matching**.

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
It is backed by project evidence across multiple target classes:
- builtin memory retrieval case samples
- official-doc targeting comparison
- skill-routing comparison
- local file / operational-doc targeting comparison
- decision matrix derived from those results

Current project conclusion:
- original-language retrieval remains first-class
- English technical pivots act as an additive precision layer
- the bridge is especially valuable when target naming is English-heavy and operationally specific

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

Future work, if pursued, should be phase-2 quality expansion rather than more phase-1 package cleanup.
Possible later directions:
- broader evaluation sets
- explicit benchmark harnesses
- more systematic publication polish
- official retrieval-side experiments only if evidence justifies them
