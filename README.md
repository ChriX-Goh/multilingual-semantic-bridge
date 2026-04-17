# Multilingual Semantic Bridge

A bridge for **non-English-first users** who keep asking clear questions, but still fail to hit the right technical answer because the system stores that answer under English-heavy names.

## What pain point does this solve?

This project solves a very practical problem:

A user asks naturally in their own language.
The assistant system, docs, config, commands, logs, skills, and memory surfaces are still heavily English-shaped.
So even when the answer already exists, retrieval often misses it.

That usually looks like this:
- the user describes the problem correctly
- the useful target is stored under a different technical name
- vector search or keyword search does not hit the best result
- the assistant searches the wrong memory, wrong docs page, wrong file, or wrong tool
- the user feels like the system is "not understanding", even though the knowledge is actually there

This project is meant to reduce that failure mode.

## Who is this for?

This project is especially for **users whose first conversation language is not English**, but who are using assistant systems built on English-heavy technical infrastructure.

That includes people who mainly work in languages such as:
- Chinese
- Cantonese
- Japanese
- Korean
- Spanish
- Arabic
- Hindi
- Thai
- Vietnamese
- Indonesian

It is not limited to those languages, but the target user is clear:
**people who think and ask naturally in a non-English-first way, while the system underneath is still named and organized mostly in English.**

## Example user prompts

These are the kinds of prompts this project is trying to help with:

- Chinese: `OpenClaw 怎么找回我之前写的记录？`
- Cantonese: `我个 repo 点解喺 OpenClaw 入面搵唔到？`
- Japanese: `OpenClawで前のメモをどう探せばいいですか？`
- Korean: `model key는 어디서 설정하나요?`
- Spanish: `¿Por qué no encuentro mi skill en OpenClaw?`
- Arabic: `أين أضبط مفتاح النموذج؟`
- Hindi: `OpenClaw में मेरी पुरानी notes क्यों नहीं मिल रही हैं?`

The real answer might live under English-heavy technical targets like:
- official documentation pages
- config paths and field names
- provider names
- CLI commands
- skill metadata
- logs
- local runbooks
- memory entries with different wording

## What this project actually does

Multilingual Semantic Bridge helps an assistant go from:
- what the user said

to:
- what the user actually means
- what that thing is called in the system
- where the best answer probably lives

In practice, it helps the assistant:
1. keep the user's original wording
2. recover the real intent behind the wording
3. generate a better technical pivot when useful
4. connect user language with official terminology
5. route toward the right target surface

## Where vector retrieval fits

Yes, this project is closely related to **vector retrieval**, **memory retrieval**, and **semantic search**.

The cleanest way to describe it is:

- the vector database or retrieval system is the **engine**
- this bridge is part of the **steering and query-shaping layer**

In other words:
- it does **not** replace the vector database
- it does **not** claim to improve embeddings by magic
- it does **not** rewrite the storage layer itself
- it **does** help the assistant ask better retrieval questions and choose better retrieval targets

That matters because many retrieval misses are not caused by the database being empty.
They are caused by the query and the stored target not lining up well enough across languages, terminology, and technical naming.

So the practical value here is:
- better multilingual query shaping
- better target matching
- better retrieval-surface selection
- better use of existing memory/docs/vector infrastructure

## What is in this repo?

- `skills/multilingual-semantic-bridge/` — the main skill, and the first public skill release
- `plugin/` — the narrow plugin on-ramp for automatic bridge activation
- `scripts/` — validation helpers and case-matrix support scripts
- `dist/multilingual-semantic-bridge.skill` — packaged artifact snapshot
- `docs/RELEASE_NOTE.md` — release note
- `docs/USAGE_AND_BOUNDARIES.md` — practical fit and non-fit cases
- `docs/PUBLIC_DESCRIPTION.md` — short public-facing description
- `STATUS.md` — maturity and checkpoint summary

## Skill vs plugin, in plain language

This project currently has two public parts:

### 1. The skill
The **skill** is the main method.
It contains the deeper bridge logic:
- canonical intent
- terminology bridging
- retrieval-surface choice
- routing discipline

### 2. The plugin
The **plugin** is the lighter automatic trigger.
It helps the assistant notice early that a multilingual technical prompt may need the bridge.

### Best way to think about them
- **skill-only** works
- **plugin-only** can help, but is weaker
- **skill + plugin together** is the strongest current setup

So the short version is:
- the **skill** is the core solution
- the **plugin** makes that solution kick in more automatically

## What makes this different?

This project is **not** mainly trying to be:
- a translation tool
- a phrasebook
- a giant per-language ruleset
- a fake claim that multilingual retrieval is already solved forever

Its real job is narrower and more useful:
- improve multilingual-to-technical target matching
- improve how assistants use memory, docs, config, runbooks, and semantic retrieval
- reduce missed hits caused by language mismatch and terminology mismatch

## Current project status

- Whole-project progress: ~96%
- Public repo: live on GitHub
- ClawHub skill: published
- ClawHub plugin package: published
- Stable conclusion: the bridge already improves retrieval and routing quality in a real, inspectable way

## Scope boundary

This project does **not** claim:
- perfect multilingual reasoning in every environment
- automatic improvement of the underlying vector database itself
- that every non-English prompt should be rewritten into English
- that official docs should be ignored in favor of memory

It is a bridge layer, not the whole stack.

## Public links

- GitHub repo: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
