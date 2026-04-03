# Multilingual Semantic Bridge

A skill that helps non-English or mixed-language technical requests hit the right English-heavy technical targets more reliably.

## What it is

Multilingual Semantic Bridge is a cross-lingual retrieval and routing skill for technical environments where user phrasing and system terminology do not naturally live in the same language.

It is **not** a generic translation-first tool.
Its job is to improve **target matching**.

## Core workflow

The skill follows one mainline pipeline:
1. preserve original input
2. derive canonical intent
3. generate a technical pivot when needed
4. bridge terminology
5. improve retrieval and routing
6. persist confirmed mappings

## What problem it solves

In many assistant environments, the user may ask in another non-English language, while the most useful targets are named in English:
- official docs
- config keys
- provider names
- CLI commands
- skill metadata
- operational files and troubleshooting docs

This skill helps connect those two worlds without collapsing the workflow into a language-by-language phrasebook.

## Included in this repo

- `skills/multilingual-semantic-bridge/` — live skill source
- `dist/multilingual-semantic-bridge.skill` — packaged artifact snapshot
- `docs/RELEASE_NOTE.md` — first stable release note
- `docs/USAGE_AND_BOUNDARIES.md` — where the skill helps and where it does not
- `docs/PUBLIC_DESCRIPTION.md` — short public-facing description
- `STATUS.md` — current maturity and checkpoint summary

## Current project status

- Whole-project progress: ~90%
- Current completed mainline phase: 100%
- Stable current conclusion: the bridge already improves retrieval/routing quality, but current builtin-memory evidence is best described as **memory-mediated target concentration** rather than a blanket claim of direct artifact retrieval in every surface.

## Scope boundary

This repo boundary is intentionally narrower than the full OpenClaw workspace.
It contains the project-clean artifact set for backup, review, and future publication-oriented work.

## Non-goals

This skill is not:
- a per-language hard-coded rule pack
- a promise of backend retrieval upgrades by itself
- a replacement for official docs or exact-token reasoning
- a claim that every multilingual query should be rewritten into English

## Current working routing rule

Do not default everything into memory-first behavior just because memory search is available.
Choose the retrieval surface by target class:
- local history / local lessons → memory first
- upstream behavior / official docs → official docs first
- installed skill instructions → skill artifact first
- runbooks / local procedures → local-file first
- exact command/path/token → exact-token artifact first

## Packaging note

This repo is currently arranged as a clean GitHub/project boundary for the skill and its minimal public support surfaces. It is not yet a full automated publication pipeline.
