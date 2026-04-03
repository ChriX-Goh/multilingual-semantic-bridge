# accthub

accthub is a local account-hub workflow for OpenClaw / Codex OAuth environments where the user wants to keep one agent and one session lineage, but still switch between multiple Codex OAuth accounts in a controlled way.

## Current state

This GitHub boundary now contains the project structure, design notes, install notes, and iteration documents.

The live runtime script is still maintained in the user's local OpenClaw workspace and should be imported into this project boundary when ready.

## Why this project exists

OpenClaw currently supports multiple auth profiles in general, but Codex OAuth flows still collapse onto a single effective `openai-codex:default` in practical use. That makes same-provider multi-account switching awkward.

accthub solves this with:

- external inventory files
- cold switching only
- explicit backups
- explicit ownership correction
- a terminal UI layer
- startup self-checks for active-vs-inventory drift

## Core rules

1. Never hot-swap `auth-profiles.json` while gateway is running.
2. Always stop gateway before replacing the active auth file.
3. Always repair ownership for files that OpenClaw reads through the mounted workspace.
4. Treat runtime inventory management as external to OpenClaw rather than pretending Codex OAuth multi-profile is already solved upstream.

## Current project layout

```text
projects/accthub/
├─ README.md
├─ DESIGN.md
├─ INSTALL_WSL.md
├─ CHANGELOG.md
├─ ROADMAP.md
├─ STATUS.md
└─ scripts/
   └─ import_local_vnext.sh
```

## Next step

Import the latest working local `accthub.py` from the user's WSL workspace into this GitHub project, then split the project into:

- runtime script
- parser/cache logic
- inventory storage format docs
- release notes

## Safety boundary

Do not commit real auth profile JSON files or live tokens into GitHub.
