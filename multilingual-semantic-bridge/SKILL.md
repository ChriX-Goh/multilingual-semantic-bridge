---
name: multilingual-semantic-bridge
description: Build a general cross-lingual semantic bridge between user input and English-heavy technical targets such as memory, docs, config terms, skill metadata, and tool paths. Use when the user's wording and the likely target system do not naturally live in the same linguistic or terminological space, and the assistant needs to derive canonical intent, create a technical pivot, bridge terminology, and improve retrieval or routing without relying on one rule pack per language.
---

# Multilingual Semantic Bridge

Use this skill to bridge between:
- the user's surface language
- the system's likely target language/terminology
- the actual retrieval/routing surfaces that matter

The goal is not translation for its own sake.
The goal is to recover the **right technical target**.

## Mainline workflow

### 1. Preserve the original input
Keep the user's original wording available.
It may contain:
- nuance
- local nicknames
- symptom wording
- exact fragments that should not be lost

Do not discard the original phrasing just because a technical reformulation seems cleaner.
The original wording is one of the retrieval candidates.

### 2. Derive canonical intent
Identify the stable underlying request independent of surface language.
Examples of what to recover:
- the actual problem being described
- the actual capability being requested
- the actual technical uncertainty being resolved

Canonical intent should usually be treated as the default middle layer for non-trivial technical work.
Use it especially when:
- the user wording is colloquial or compressed
- the wording emphasizes symptoms rather than the real target
- several nearby targets could match the same surface phrase
- the task is to distinguish capability vs implementation vs root cause

### 3. Generate a technical pivot
Express the canonical intent in the technical language most likely to match the real target.
Very often that means an English technical pivot because these targets are often English-heavy:
- docs
- config keys
- package names
- CLI commands
- logs
- error messages
- past engineering notes

Do not force this step blindly for every query.
Strongly prefer it when the target surface is:
- official documentation
- skill metadata / skill routing
- an English-named operational file or document
- logs, provider names, config keys, CLI commands, or exact technical tokens

Use it more lightly when the target is mixed-language local memory and the original phrasing already overlaps well with existing notes.

### 4. Bridge terminology
Connect:
- user wording
- local/project wording
- official terminology

Do this to improve matching, not to build a phrasebook.
Focus on canonical term bridges that help the system hit the right target surface.

### 5. Improve retrieval and routing
Use the combination of:
- original input
- canonical intent
- technical pivot
- bridged terminology

to improve the odds of reaching the correct:
- memory snippet
- local file/doc
- official doc page
- skill
- tool path

Choose the lightest effective retrieval mix:
- for mixed-language local memory, original phrasing + canonical intent is often enough
- for official docs and skills, canonical intent + technical pivot is usually stronger
- for exact-token targets, keep identifiers and official terms verbatim

### 6. Persist confirmed mappings
When a mapping repeatedly proves useful, persist it in the right place.
Learn canonical mappings and retrieval improvements, not random language debris.
Persist what improves future target matching, not what merely looked linguistically interesting once.

## What to consult

Read these only when needed:
- `references/query-expansion.md`
- `references/retrieval-playbooks.md`
- `references/learning-loop.md`
- `references/publication-readiness.md`

Older support material should not override this mainline.

## Standard of success

The skill is succeeding when it helps the assistant find or route to the right technical target more reliably than naive same-surface wording alone.
