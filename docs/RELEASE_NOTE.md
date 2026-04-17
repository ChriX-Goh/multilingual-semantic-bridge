# Multilingual Semantic Bridge — Release Note v1

> Status: signed-off narrow v1 release note
> Date: 2026-04-17 UTC+8

## At a glance

Multilingual Semantic Bridge v1 is the first public cut of a very practical idea:

**Non-English-first users should not lose good answers just because technical systems still store those answers under English-heavy names.**

This release introduces a bridge layer that helps assistants retrieve and route more effectively across multilingual wording and English-heavy technical targets.

Public pages:
- GitHub: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge

## The real problem

In many assistant systems, the answer already exists.
But the system still misses it because:
- the user asks in a non-English-first way
- the useful target is named in English-heavy technical terminology
- retrieval does not connect those two cleanly enough

That can affect:
- memory recall
- docs lookup
- config search
- skill discovery
- runbook targeting
- troubleshooting against logs and exact technical terms

## Example user languages

This project is designed for multilingual environments and is especially relevant when the user's natural conversation language is not English.

Example prompt languages include:
- Chinese
- Cantonese
- Japanese
- Korean
- Spanish
- Arabic
- Hindi

## What this release does

This version gives the assistant a practical bridge workflow:
1. preserve the original input
2. recover the actual intent
3. generate a better technical pivot when useful
4. connect user wording with official terminology
5. route toward the right answer surface

## Where vector retrieval fits

This release is highly relevant to systems that use:
- vector databases
- semantic search
- memory retrieval
- retrieval over docs, skills, configs, and local files

But the correct claim is:
- this project is **not** the vector database itself
- it is the bridge layer that helps the assistant use retrieval more effectively

It improves the path between:
- user wording
- retrieval query shape
- target-surface choice
- final answer location

## Skill and plugin

The current release shape is:
- **skill** = the core bridge method
- **plugin** = the lighter automatic entry point

Best current setup:
- skill-only works
- plugin-only is weaker
- **skill + plugin together** is strongest

## Honest boundary

This release does **not** claim that:
- multilingual retrieval is solved in every environment
- every language/domain pair will benefit equally
- the underlying vector store has been fundamentally upgraded
- the plugin replaces the deeper skill method

This is a bridge layer that makes existing retrieval and routing systems easier to use well across language mismatch.
