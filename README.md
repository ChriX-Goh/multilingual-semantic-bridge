# Multilingual Semantic Bridge

A bridge package that helps non-English or mixed-language technical requests hit the right English-heavy technical targets more reliably.

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
- `plugin/` — phase-2 pluginization package
- `scripts/` — compact validator/support scripts for plugin decision-layer checks
- `dist/multilingual-semantic-bridge.skill` — packaged artifact snapshot
- `docs/RELEASE_NOTE.md` — signed-off narrow v1 release note
- `docs/PLUGIN_V1_PROOF_SUMMARY.md` — compact proof summary for the signed-off plugin baseline
- `docs/USAGE_AND_BOUNDARIES.md` — where the skill helps and where it does not
- `docs/PUBLIC_DESCRIPTION.md` — short public-facing description
- `STATUS.md` — current maturity and checkpoint summary

## Current project status

- Whole-project progress: ~96%
- Current mainline: signed-off narrow v1 baseline, followed by release/publish surface stabilization
- Stable current conclusion: the bridge already improves retrieval/routing quality, and the pluginized on-ramp is now evidenced strongly enough for narrow v1 signoff.
- Pluginization status: multi-class runtime proof baseline exists, broader curated coverage exists, operator controls/validation workflow are documented, the plugin-skill cooperation contract is explicit, and RC tightening is complete.
- GitHub continuity is repaired and tracked via issue `#2`.

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

This repo is currently arranged as a clean GitHub/project boundary for the skill, the narrow v1 plugin package, and the shared validation/boundary docs that still evolve together.

## Publication hygiene rule

Public project docs in this repo distinguish between:
- portable/default project guidance
- local validation evidence
- example-only configuration
- author-local/operator-specific configuration

Local validation evidence may appear in technical history or proof surfaces, but it should not be read as a universal default deployment path.

See `docs/DEFAULT_VS_LOCAL_CLASSIFICATION_2026-04-18.md` for the current classification model.

Current v1 decision:
- keep the plugin as a sibling package inside this repo for now
- do not split into a separate repo/package until real post-v1 usage justifies a cleaner separation

## Signed-off v1 framing

The current signed-off v1 shape is:
- **skill** = deeper bridge method and richer retrieval/routing discipline
- **plugin** = automatic narrow on-ramp for bridge-worthy multilingual technical prompts

This repo does not claim that multilingual retrieval is solved in every setting.
It does claim that the current narrow v1 package is coherent, inspectable, and backed by real runtime evidence.

## License and attribution

This repository is now licensed under **Apache-2.0**.

Practical meaning:
- others may use, modify, and redistribute the work under Apache-2.0 terms
- they must retain the required license and attribution notices
- modified files must carry prominent modification notices as required by Apache-2.0
- the license does **not** grant trademark rights

Repo-level attribution surfaces:
- `LICENSE`
- `NOTICE`

If later you want stronger brand protection around the project name itself, that is a separate trademark/branding question, not something the open-source license solves by itself.
