# Multilingual Semantic Bridge

A retrieval bridge for people who ask naturally, but still miss the right technical answer because the system stores that answer under different names.

## The user problem first

You ask a clear question.
Sometimes it works.
Sometimes you rephrase it, use a synonym, switch languages, or describe the same problem more naturally, and suddenly the system misses.

Not because the answer does not exist.
Not because the docs are missing.
Not because memory is empty.

It misses because the wording you used and the technical target stored in the system do not line up well enough.

That is the real problem this project is built to reduce.

## What this looks like in real life

A user might ask in one way and get a hit.
Then ask the same thing in a slightly different way and get a miss.

Examples:

- Chinese: `OpenClaw 怎么找回我之前写的记录？`
- French: `Comment retrouver mes anciennes notes dans OpenClaw ?`
- Japanese: `OpenClawで前のメモをどう探せばいいですか？`
- Korean: `이전 메모는 OpenClaw에서 어디서 찾나요?`
- Spanish: `¿Cómo encuentro mis notas anteriores en OpenClaw?`
- Russian: `Как найти мои старые заметки в OpenClaw?`
- Arabic: `كيف أجد ملاحظاتي السابقة في OpenClaw؟`
- English: `why can't OpenClaw find my earlier notes?`

All of these may point to a similar target.
But the actual answer may still live under English-heavy technical names like:
- memory search
- docs page titles
- config fields
- provider names
- CLI commands
- skill metadata
- logs
- runbooks

So the failure pattern is often:
- the user is understandable
- the answer is already somewhere in the system
- retrieval still misses because the wording and the stored target are misaligned

## Who this is mainly for

This project is built **primarily for non-English-first users**, because they hit this mismatch more often and more painfully.

But it is **not only for them**.
English users can still benefit whenever:
- they paraphrase instead of using the official term
- they describe symptoms instead of naming the subsystem
- one phrasing hits but a near-synonym misses
- the system needs better target matching across memory, docs, config, skills, or runbooks

So the broader framing is:
- main audience: non-English-first users
- broader value: anyone dealing with retrieval misses caused by wording mismatch

## What this project does

Multilingual Semantic Bridge helps an assistant go from:
- what the user said

to:
- what the user probably means
- what that thing is actually called in the system
- where the best answer most likely lives

In practice, it helps the assistant:
1. preserve the original wording
2. recover canonical intent
3. generate a better technical pivot when useful
4. connect user phrasing to official terminology
5. choose the right retrieval target or answer surface

## Where vector retrieval fits

Yes, this project is closely related to:
- semantic search
- vector retrieval
- memory retrieval
- multilingual retrieval over docs, configs, skills, files, and runbooks

But the accurate claim is:
- the vector database is **not** this project
- embeddings are **not** this project
- the storage layer is **not** this project

This project is the **bridge layer on top**.
It helps the assistant make better retrieval moves.

A simple way to think about it:
- the vector database is the engine
- this bridge helps the assistant steer that engine toward the right target

So the value is:
- better query shaping
- better target matching
- better surface selection
- better use of the memory/docs/vector stack you already have

## Skill and plugin, in plain language

This project currently has two public pieces.

### Skill
The **skill** is the core method.
It carries the deeper bridge logic for intent recovery, terminology mapping, and retrieval-target choice.

### Plugin
The **plugin** is the lighter automatic trigger.
It helps the assistant notice earlier that a multilingual or paraphrased technical prompt probably needs bridge help.

### Best current setup
- **skill-only** works
- **plugin-only** can help, but is weaker
- **skill + plugin together** is the strongest current setup

So the short version is:
- the **skill** is the core solution
- the **plugin** makes it kick in more automatically

## What is in this repo?

- `skills/multilingual-semantic-bridge/` — the main skill
- `plugin/` — the automatic bridge trigger layer
- `scripts/` — validation helpers and support scripts
- `docs/` — release, usage, and public explanation materials
- `STATUS.md` — current maturity and checkpoint summary

## What this project does not claim

It does **not** claim:
- perfect multilingual reasoning everywhere
- automatic improvement of the underlying vector database itself
- that every non-English prompt should be rewritten into English
- that developer architecture matters more than user retrieval outcomes

This is a bridge layer, not the entire retrieval stack.

## Public links

- GitHub repo: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
