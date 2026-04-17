# Multilingual Semantic Bridge

Help multilingual users hit the **right technical target**, not just get a translation.

If someone asks in Chinese, Cantonese, mixed Chinese-English, or other non-English phrasing, but the real target lives in English-heavy technical surfaces like docs, config keys, CLI commands, skill metadata, logs, or runbooks, this project helps the assistant bridge that gap more reliably.

## Quick links

- GitHub: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
- Release note: `docs/RELEASE_NOTE.md`
- Usage and boundaries: `docs/USAGE_AND_BOUNDARIES.md`
- Current status: `STATUS.md`

## Why this matters

A lot of real technical environments are still English-heavy.
Users are not.

That mismatch causes a very common failure mode:
- the user describes the problem naturally
- the important target is named differently
- the assistant searches the wrong surface, or searches the right surface with the wrong words
- good docs, memory, skills, or local runbooks stay effectively invisible

This project is built to reduce that gap.

## What this project does

Multilingual Semantic Bridge helps an assistant:
1. keep the user's original wording
2. identify the real intent behind the wording
3. generate a better technical pivot when needed
4. connect user language with official terminology
5. route toward the right target surface

In plain terms, it helps the assistant go from:
- "what the user said"

to:
- "what they actually need"
- "what this thing is called in the system"
- "where the best answer probably lives"

## What problem it solves

This is especially useful when the user says something like:
- "OpenClaw 点样搵返我之前啲记录？"
- "我个 repo 点解喺 OpenClaw 入面搵唔到？"
- "喺边度设 model key？"

while the real answer may depend on English-heavy targets such as:
- official documentation pages
- config paths and field names
- provider names
- CLI commands
- skill metadata
- operational docs and troubleshooting notes

Instead of flattening everything into a generic translation workflow, the bridge tries to recover the right technical target.

## What is in this repo

- `skills/multilingual-semantic-bridge/` — the main skill, and the current first public publication unit
- `plugin/` — the narrow plugin on-ramp for bridge-worthy multilingual technical prompts
- `scripts/` — validation helpers and case-matrix support scripts
- `dist/multilingual-semantic-bridge.skill` — packaged artifact snapshot
- `docs/RELEASE_NOTE.md` — signed-off narrow v1 release note
- `docs/USAGE_AND_BOUNDARIES.md` — practical fit and non-fit cases
- `docs/PUBLIC_DESCRIPTION.md` — short public-facing description
- `STATUS.md` — maturity and checkpoint summary

## Current release shape

The current signed-off shape is intentionally simple:
- **skill** = the deeper method
- **plugin** = the automatic narrow on-ramp

That means:
- the skill carries the real bridge discipline
- the plugin helps the assistant notice when that discipline should come into play
- the project does not pretend the plugin alone solves multilingual retrieval everywhere

## What makes it different

This project is **not** mainly trying to be:
- a translation tool
- a phrasebook
- a giant per-language ruleset
- a magical claim that all multilingual queries should be rewritten into English

Its real focus is narrower and more useful:
- better target matching
- better terminology bridging
- better routing across memory, docs, skills, files, and exact technical surfaces

## Current project status

- Whole-project progress: ~96%
- Current mainline: narrow v1 is signed off, and public-facing polish is underway
- Public repo: live on GitHub
- First ClawHub publication: live as a staged skill-first release
- Stable conclusion: the bridge already improves retrieval and routing quality in a real, inspectable way

## Scope boundary

This repo is a clean project boundary for the bridge work.
It is meant to be readable, reviewable, and publishable without dragging in private workspace state.

## Non-goals

This project does not claim:
- perfect multilingual reasoning in every environment
- backend retrieval improvements by itself
- that official docs should be ignored in favor of local memory
- that every non-English prompt should be forced into English

## Current routing rule

Do not route everything to one place.
Choose the surface that actually matches the target:
- prior work, local incidents, remembered decisions → memory first
- upstream behavior, official command semantics, product docs → official docs first
- installed-skill behavior → skill artifact first
- local runbooks and recovery procedures → local file first
- exact commands, paths, config keys, filenames → exact-token artifact first

## Packaging note

Right now, this repo keeps the skill, plugin, and validation story together because that is still the clearest review and maintenance boundary.
The first public publication unit is the skill-facing asset, not the whole repo as one undifferentiated package.

## License and attribution

This repository is licensed under **Apache-2.0**.

Repo-level attribution surfaces:
- `LICENSE`
- `NOTICE`

## Public surfaces

If you are discovering the project from one side, the other side is here too:
- GitHub repo: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill page: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
