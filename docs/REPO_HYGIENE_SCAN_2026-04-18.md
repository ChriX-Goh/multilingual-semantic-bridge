# Multilingual Semantic Bridge — Repo Hygiene Scan

Date: 2026-04-18 UTC+8
Status: first-pass hygiene scan
Purpose: identify publication-facing traces that should be classified before public release

## 1. Scan scope

First-pass grep scan across the repo excluding `.git/` for likely local/personal publication-risk markers:
- local paths
- localhost / ws endpoints
- profile/session names used only for local validation
- personal identifiers
- local infrastructure names

## 2. Immediate findings

### A. Public attribution, expected to keep unless strategy changes
These are not contamination by default. They are expected public attribution/origin surfaces.

- `plugin/package.json`
  - package name: `@chrix/openclaw-multilingual-semantic-bridge-plugin`
- `plugin/index.ts`
  - copyright header for ChriX Goh
- `plugin/logic.ts`
  - copyright header for ChriX Goh
- `scripts/plugin-case-matrix-cases.mjs`
  - copyright header for ChriX Goh
- `scripts/validate-plugin-case-matrix.mjs`
  - copyright header for ChriX Goh
- `NOTICE`
  - attribution/origin references to ChriX Goh and the GitHub repo

Current classification:
- **portable/public attribution**

### B. Local validation history that should not be mistaken for universal defaults
These are valid engineering records, but they should not remain in public docs without explicit labeling or generalization.

- `docs/PLUGIN_CASE_MATRIX_V1.md`
  - pinned gateway target `ws://127.0.0.1:19031`
  - isolated profile/session names such as:
    - `bridgeproof-runtime-v1`
    - `bridgeproof-config-v1`
    - `bridgeproof-troubleshooting-v2`
    - `bridgeproof-docs-v1`
- `docs/PLUGIN_ROADMAP_V1.md`
  - explicit pinned gateway path and bridgeproof validation references
- `docs/PLUGIN_V1_READINESS_REVIEW_2026-04-17.md`
  - bridgeproof profile wording
- `docs/PLUGIN_V1_RC_CHECKLIST_2026-04-17.md`
  - `ws://127.0.0.1:19031`
  - bridgeproof profile naming

Current classification:
- **local validation history**

Publication action needed:
- keep if historically useful, but relabel as validation evidence rather than setup default
- consider moving detailed one-machine validation specifics into a narrower validation-history section or separate operator/internal note

### C. Hygiene-governance docs that mention risk classes
These are acceptable because they are discussing what to scan for, not prescribing local defaults.

- `docs/OFFICIAL_PATH_AND_GENERALIZATION_PLAN_2026-04-18.md`
  - mentions temporary artifacts under `tmp/` as a caution class
- `docs/PUBLIC_RELEASE_GOVERNANCE_PLAN_2026-04-18.md`
  - mentions pinned localhost/ws endpoints as a risk category

Current classification:
- **portable governance docs**

## 3. Preliminary judgment

Current repo state is better than a raw personal-environment dump, but not yet ready to be described as fully publication-sanitized.

Main remaining issue:
- public docs still contain local validation endpoints and isolated profile/session names that are fine as engineering evidence but should be clearly marked as local validation history rather than general usage guidance

## 4. Recommended next hygiene actions

1. Split public usage guidance from local validation evidence more clearly
2. Relabel pinned local runtime references as validation-history artifacts
3. Decide whether the detailed bridgeproof session names belong in a public-facing validation appendix or in a narrower internal/operator note
4. Re-check README/install/public package story after those edits

## 5. Important non-finding

This first-pass repo scan did **not** surface obvious public-facing leaks of:
- `/home/node/...` paths inside the project repo
- personal email addresses in public docs/code outside normal attribution surfaces
- local infrastructure names like `vaultwarden-caddy` in the project repo

That is good, but it does not remove the need for the next classification/edit pass.
