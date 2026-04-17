# Multilingual Semantic Bridge — Release Note v1

> Status: signed-off narrow v1 release note
> Date: 2026-04-17 UTC+8

## At a glance

Multilingual Semantic Bridge v1 is the first clean public cut of a simple idea:

**When users ask in one language, but the answer is named in another, the assistant should still be able to find the right thing.**

This release packages that idea into:
- a deeper **skill** for multilingual retrieval and routing discipline
- a narrow **plugin** on-ramp that helps catch bridge-worthy multilingual technical prompts automatically

Public pages:
- GitHub: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge

## The problem this release tackles

In real technical environments, users often ask naturally, but the answer is stored unnaturally.

The user might write in Chinese, Cantonese, or mixed language.
The system might store the important target under English-heavy names like:
- config keys
- provider names
- CLI commands
- doc titles
- skill metadata
- logs or operational docs

That mismatch creates missed hits, weak routing, and a lot of unnecessary assistant confusion.

## What this version does

This version gives the assistant a practical bridge workflow:
1. preserve the original input
2. recover the actual intent
3. generate a stronger technical pivot when needed
4. connect user wording with official terminology
5. route toward the right answer surface

That answer surface may be:
- memory
- official docs
- a skill
- a local file or runbook
- an exact technical artifact such as a command, path, or config key

## Why this release is useful

This release matters because it addresses a very common failure mode without pretending to solve everything.

It does **not** say:
- translate everything
- rewrite everything into English
- trust memory for everything
- guess based on vibes

Instead, it says:
- preserve the original meaning
- use a technical pivot only when it helps
- choose the right target surface deliberately
- keep exact identifiers exact

## What evidence supports this cut

This release is supported by more than design preference.
It is backed by:
- trigger and style-matrix validation
- isolated runtime proof across history recall
- isolated runtime proof across config and setup
- isolated runtime proof across troubleshooting
- isolated runtime proof across docs and upstream reference
- explicit validation workflow and plugin-skill boundary documentation

## Honest boundaries

This release does **not** claim that:
- multilingual retrieval is solved in every environment
- every language/domain pair will benefit equally
- backend retrieval quality is magically upgraded by this package alone
- the plugin replaces the deeper skill method

This is a strong first release, not a final theory of multilingual technical assistance.

## Practical framing

The current v1 shape is intentionally clear:
- **skill** = the deeper method
- **plugin** = the lightweight automatic entry point

That makes the project easier to inspect, safer to roll back, and easier to improve in bounded steps.

## Likely next phase

Post-v1 work should focus on:
- broader evaluation sets
- harder multilingual edge cases
- more examples of plugin-only vs plugin-plus-skill behavior
- further utility hardening where evidence shows real value
