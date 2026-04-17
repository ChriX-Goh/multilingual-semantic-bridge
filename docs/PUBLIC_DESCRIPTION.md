# Multilingual Semantic Bridge — Public Description

## One-line description
A bridge package that helps non-English or mixed-language technical requests hit the right English-heavy technical targets more reliably.

## Short description
Multilingual Semantic Bridge is a cross-lingual retrieval and routing bridge package for technical environments where user phrasing and system terminology do not naturally live in the same language.

Instead of acting like a generic translator, it helps the assistant:
- preserve the original user wording
- derive canonical intent
- generate an English technical pivot when it improves target matching
- bridge terminology across user wording, local vocabulary, and official terminology
- improve routing toward memory, docs, skills, files, and exact technical surfaces

## What problem it solves
In many assistant environments, the user may ask in Chinese or another non-English language, while the most useful targets are named in English:
- official docs
- config keys
- provider names
- CLI commands
- skill metadata
- operational files and troubleshooting docs

This skill helps connect those two worlds without reducing the workflow to a language-by-language rule pack.

## What makes it different
- not a phrasebook
- not a translation-only skill
- not a per-language hard-coded routing table
- focused on target resolution and retrieval/routing precision

## Best-fit use cases
- multilingual memory recall
- official-doc lookup from non-English requests
- skill discovery when skill metadata is English-heavy
- local operational-file targeting
- config/log/error interpretation where exact English tokens matter

## Boundary
This skill improves retrieval/routing discipline.
It does not by itself guarantee better embeddings, perfect multilingual reasoning, or automatic backend-level retrieval upgrades.

## Current public framing
This project now has a signed-off **narrow v1** baseline:
- the skill carries the deeper bridge method
- the plugin provides an automatic narrow on-ramp for bridge-worthy multilingual technical prompts

The claim is not that multilingual retrieval is universally solved.
The claim is that this narrow v1 package is already coherent, useful, inspectable, and supported by real validation evidence.
