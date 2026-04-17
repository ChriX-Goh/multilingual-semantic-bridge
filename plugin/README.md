# Multilingual Semantic Bridge Plugin Prototype

A lightweight trigger layer for cases where one phrasing hits, but a paraphrase, synonym, or different language version would otherwise miss the right technical target.

## The user problem first

Sometimes the system already has the answer.
But it misses too early.

A user asks naturally.
Then asks again with a different phrasing.
Or asks in French, Japanese, Korean, Spanish, Russian, Arabic, Chinese, or English using less official wording.
And the assistant fails to switch into the right retrieval posture soon enough.

This plugin exists to catch that moment earlier.

## What this plugin changes

Without the plugin:
- the assistant may treat a multilingual or paraphrased technical question too literally
- the retrieval path may stay too shallow or too generic
- the right docs, memory, config, or runbook target may never get selected

With the plugin:
- likely bridge-worthy prompts get noticed earlier
- the assistant gets a better initial bridge posture
- the deeper skill can take over more effectively when needed

## Relationship to the skill

This plugin works best together with the **Multilingual Semantic Bridge skill**.

In plain language:
- the **plugin** notices that bridge help is probably needed
- the **skill** carries the fuller bridge method

So:
- plugin-only can help in simpler cases
- **plugin + skill together** is the stronger intended setup
- this plugin is an accelerator, not the whole solution

## Where vector retrieval fits

This plugin is related to semantic and vector retrieval, but it does not replace them.
Its role is to improve the assistant's early trigger and retrieval posture, not to replace the engine underneath.

## Public project links
- GitHub project: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill page: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
