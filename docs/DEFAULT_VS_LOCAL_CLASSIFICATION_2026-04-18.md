# Multilingual Semantic Bridge — Default vs Local Classification

Date: 2026-04-18 UTC+8
Status: active publication-hygiene classification surface
Purpose: make it explicit which project statements are portable defaults, which are validation evidence, and which are author-local/operator-specific

## 1. Why this exists

This project should be publishable as a reusable ecosystem asset without forcing other users to clean up one author's machine history first.

That requires a stable distinction between:
- what the project generally is
- what was only used as local validation evidence
- what belongs to one author's/operator's environment only

## 2. Classification model

### A. Portable/default project guidance
Use this label for statements that should hold for a normal reader of the project.

Examples:
- what problem the bridge solves
- what the plugin does and does not do
- current compatibility statements declared by the package/plugin surfaces
- how to reason about the skill/plugin boundary
- validator expectations and matrix purpose
- release/publication rules

Publication rule:
- these are allowed in README, package docs, roadmap, proof summaries, and other public-facing docs

### B. Local validation evidence
Use this label for statements that document how the project was validated on one local path or one isolated setup.

Examples:
- pinned local gateway URLs or localhost/ws targets
- local isolated session/profile names
- one-machine validation runs proving the hook fired
- local operator observations that are useful as engineering evidence but not required defaults for future users

Publication rule:
- allowed only when explicitly framed as validation evidence
- must not be written as if they are universal setup requirements
- should be minimized or moved into validation/history sections where possible

### C. Example-only configuration
Use this label for examples that illustrate a shape without claiming they are the author's real local config or every user's default config.

Examples:
- hypothetical plugin config snippets
- example install flows
- illustrative integration shapes

Publication rule:
- must be clearly presented as example-only
- should avoid unnecessary one-machine values

### D. Author-local / operator-specific configuration
Use this label for anything tied to one author's actual environment, recovery path, workstation setup, or operational history.

Examples:
- private/local filesystem paths
- personal hostnames or container names
- one-machine port bindings
- local recovery procedures that only make sense in the author's environment
- private scratch references

Publication rule:
- do not leave these in public-facing assets as if they were project defaults
- move to private notes, narrow operator docs, or remove entirely from public release surfaces

## 3. Writing rules

When writing or editing public docs for this repo:
1. prefer portable/default guidance first
2. if local validation evidence matters, label it as local validation evidence
3. if a config example is illustrative only, say so
4. do not let author-local configuration masquerade as project guidance

## 4. Interpretation rule

If a sentence contains a specific local endpoint, profile name, filesystem path, machine-bound port, or other one-machine identifier, assume it is **not** a portable default unless explicitly proven otherwise.

## 5. Immediate usage

Current immediate application areas:
- `README.md`
- `docs/PLUGIN_CASE_MATRIX_V1.md`
- `docs/PLUGIN_ROADMAP_V1.md`
- `docs/PLUGIN_V1_RC_CHECKLIST_2026-04-17.md`
- later release-gate checklist and publication-facing copy
