# Multilingual Semantic Bridge — Usage and Boundaries

## When to use
Use this skill when:
- the user asks in a non-English or mixed-language way
- the likely target is named in English-heavy technical language
- retrieval or routing quality matters more than literal translation
- the system needs to bridge from colloquial phrasing into official/product/config terminology

## When it helps most
- official docs
- skill routing
- local operational files
- config keys, provider names, CLI commands, and logs

## When it helps less
- when local memory is already heavily mixed-language and the original phrasing already overlaps with stored notes
- when the task is pure natural-language translation rather than technical target resolution

## Operating rule
Default pattern:
1. preserve original wording
2. derive canonical intent
3. add English technical pivot only when it improves target matching
4. keep exact identifiers verbatim

## Non-goals
This skill is not:
- a per-language hard-coded rule pack
- a promise of backend retrieval upgrades
- a replacement for official docs or exact-token reasoning
- a guarantee that every non-English query should be rewritten into English
