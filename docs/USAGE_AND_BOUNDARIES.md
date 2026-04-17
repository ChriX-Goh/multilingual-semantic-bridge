# Multilingual Semantic Bridge — Usage and Boundaries

## In one sentence
Use this when the user asks naturally in one language, but the best technical answer is easier to find under another language or a more official technical name.

## Use it when
This bridge is a strong fit when:
- the user asks in a non-English or mixed-language way
- the likely target is named in English-heavy technical language
- retrieval or routing quality matters more than literal translation
- the assistant needs to move from colloquial wording to official/product/config terminology

## It helps most with
- official docs
- skill routing
- local operational files and runbooks
- config keys, provider names, CLI commands, logs, and exact error terms

## Concrete examples
Good fit:
- "OpenClaw 点样搵返我之前啲记录？"
- "喺边度设 model key？"
- "我个 repo 点解喺 OpenClaw 入面搵唔到？"

Why these are good fits:
- the user wording is natural
- the real target is technical
- the answer probably depends on exact English-heavy terminology somewhere in the system

## It helps less when
- local memory is already mixed-language and the original phrasing already overlaps well with stored notes
- the task is pure translation, not technical target resolution
- the user already gave the exact command, path, or config key and the issue is not wording mismatch

## Operating rule
Default pattern:
1. preserve the original wording
2. derive canonical intent
3. add an English technical pivot only when it improves target matching
4. keep exact identifiers verbatim
5. search the surface that best matches the target class

## Plugin vs skill boundary
- the plugin is the automatic narrow on-ramp
- the skill is the deeper reasoning and routing method
- plugin alone is often enough when the target class is already obvious
- the full skill should dominate when target arbitration and canonical-intent derivation are the real work

See `docs/PLUGIN_SKILL_COOPERATION_CONTRACT_V1.md`.

## Non-goals
This project is not trying to be:
- a generic translation tool
- a per-language hard-coded ruleset
- a promise of backend retrieval upgrades by itself
- a guarantee that every non-English query should be rewritten into English

## Public links
- GitHub: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
