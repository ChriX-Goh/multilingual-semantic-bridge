# Multilingual Semantic Bridge — Public Description

## One-line description
A bridge for non-English-first users who need English-heavy technical systems to actually find the right answer.

## What problem does it solve?
Many assistant systems already have the knowledge.
What they do not always have is the right **cross-language retrieval path**.

A user may ask clearly in Chinese, Japanese, Korean, Spanish, Arabic, Hindi, or another non-English-first language.
But the best answer may still be stored under English-heavy names such as:
- docs titles
- config keys
- provider names
- CLI commands
- skill metadata
- logs
- memory snippets
- local runbooks

That mismatch causes missed hits.
This project exists to reduce those misses.

## What it actually does
Instead of treating the problem as simple translation, the bridge helps the assistant:
- preserve the original wording
- recover canonical intent
- generate a stronger technical pivot when useful
- connect user wording with official terminology
- route toward the best target surface

## Why non-English-first users should care
This project is aimed at users who do **not** naturally talk to systems in English first, even though the system underneath is still organized in English-heavy technical language.

Example prompt types:
- Chinese: `OpenClaw 怎么找回我之前写的记录？`
- Japanese: `前のメモはどこで探せますか？`
- Korean: `이 설정은 어디서 바꾸나요?`
- Spanish: `¿Dónde configuro la clave del modelo?`
- Arabic: `لماذا لا أجد المهارة داخل OpenClaw؟`

## Where vector search fits
This project is closely related to semantic search, vector retrieval, and memory retrieval.

But it is important to state this accurately:
- it does **not** replace the vector database
- it does **not** magically improve embeddings by itself
- it **does** help the assistant make better retrieval moves on top of existing retrieval systems

In short:
- vector retrieval is part of the engine
- this bridge improves how the assistant aims that engine

## Current public framing
Current v1 is deliberately clear:
- the **skill** is the core method
- the **plugin** is the lighter automatic on-ramp
- the strongest setup is **skill + plugin together**

## Public links
- GitHub: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
