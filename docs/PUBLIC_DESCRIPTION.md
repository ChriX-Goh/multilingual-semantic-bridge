# Multilingual Semantic Bridge — Public Description

## One-line description
Help multilingual users reach the right English-heavy technical target, not just a translated version of the question.

## Short description
Multilingual Semantic Bridge is a skill for assistant environments where the user speaks one way, but the system names the answer another way.

A user may ask in Chinese, Cantonese, or mixed language.
The real answer may live in English-heavy places such as:
- official docs
- config keys
- provider names
- CLI commands
- skill metadata
- logs and operational files

This project helps the assistant bridge that mismatch more intelligently.

## What it actually does
Instead of treating the problem as pure translation, the bridge helps the assistant:
- preserve the original user wording
- recover the real intent
- create a better technical pivot when needed
- map user language to official terminology
- route toward the most likely answer surface

## Why that matters
A lot of assistant mistakes happen because the wording and the target do not line up.
The user is understandable.
The system is searchable.
But the names do not match.

That is where this bridge helps most.

## Best-fit use cases
- multilingual memory recall
- official-doc lookup from non-English requests
- skill discovery when skill names and metadata are English-heavy
- local file and runbook targeting
- config, log, and error interpretation where exact English tokens matter

## What makes it different
This is not trying to be:
- a generic translator
- a phrasebook
- a hard-coded rule pack per language

It is trying to be a practical target-resolution layer for real technical work.

## Current public framing
Current v1 is deliberately narrow and honest:
- the **skill** is the deeper method
- the **plugin** is the narrow automatic on-ramp

The claim is not that multilingual retrieval is solved forever.
The claim is that this version is already coherent, useful, inspectable, and validated enough to be worth adopting and improving.

## Public links
- GitHub: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
