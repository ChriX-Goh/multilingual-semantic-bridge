# Multilingual Semantic Bridge Plugin Prototype

A lightweight automatic trigger for **non-English-first technical prompts** that would otherwise miss the right English-heavy technical target.

## What pain point does this plugin solve?

Sometimes the system already has the answer, but it fails too early.
The user asks naturally in Chinese, Japanese, Korean, Spanish, Arabic, Hindi, or another non-English-first language.
The real target lives under English-heavy technical terms.
The assistant does not notice soon enough that it should switch into bridge mode.

This plugin exists to catch that moment earlier.

## Relationship to the skill

This plugin is best used together with the **Multilingual Semantic Bridge skill**.

In plain language:
- the **plugin** notices when a multilingual technical prompt probably needs bridge help
- the **skill** carries the fuller bridge method

So:
- plugin-only can still help in simpler cases
- but **plugin + skill together** is the stronger intended setup
- this plugin should be understood as an accelerator, not the whole solution

## Where vector and retrieval fit

This plugin is related to semantic retrieval and vector-backed systems, but it does not replace them.
Its job is to help the assistant trigger the right retrieval posture earlier.

That means it helps with:
- better early detection
- better retrieval intent shaping
- better routing into the deeper bridge method when needed

## What this plugin does

The plugin does a narrow job:
- detect likely bridge-worthy multilingual technical prompts
- select a compact context style
- stay auditable, bounded, and easy to disable

## Current state
- native OpenClaw plugin scaffold
- uses `before_prompt_build`
- supports configured test-trigger validation
- supports the current narrow multilingual technical heuristic layer
- routes trigger cases into compact context styles for retrieval, setup, docs/reference, troubleshooting, or generic bridge help

## Why it is intentionally narrow

This plugin is not meant to become a hidden always-on rewrite layer.
Its job is to create a better entry point, not silently replace the whole retrieval stack.

## Public project links
- GitHub project: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill page: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
