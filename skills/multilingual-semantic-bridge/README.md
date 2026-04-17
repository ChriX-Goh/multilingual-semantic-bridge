# Multilingual Semantic Bridge

A bridge for **non-English-first users** who are talking naturally, but still missing the right answer because technical systems store that answer under English-heavy names.

## What problem does this skill solve?

This skill helps when:
- the user asks clearly in their own language
- the answer already exists somewhere in the system
- but memory, docs, config, skills, or runbooks are indexed under different English-heavy terminology

That mismatch can cause missed hits even when the system already has the knowledge.

## Example user languages
This skill is especially relevant for multilingual users working in languages such as:
- Chinese
- Cantonese
- Japanese
- Korean
- Spanish
- Arabic
- Hindi

## What this skill does

This skill is the **core bridge method**.
It helps the assistant:
- preserve the user's original wording
- recover canonical intent
- generate a better technical pivot when useful
- route toward the most likely technical target

## Relationship to the plugin

The plugin is the lighter automatic entry point.
This skill is the deeper method.

So:
- this skill works on its own
- the plugin can make activation more automatic
- the strongest current setup is **skill + plugin together**

## Where vector retrieval fits

This skill is highly relevant to systems using semantic search, vector retrieval, and memory retrieval.
But it is important to describe it correctly:
- this skill is **not** the vector database itself
- it is the bridge layer that helps retrieval hit the right target more often

## Public links
- GitHub: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
