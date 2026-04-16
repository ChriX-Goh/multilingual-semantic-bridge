# Multilingual Semantic Bridge — Plugin Case Matrix V1

Date: 2026-04-17 UTC+8
Status: working validation matrix

## Purpose

Track a small, explicit prompt set for the plugin's early activation behavior.
This is not the full benchmark harness. It is a compact runtime-focused matrix for checking whether the plugin fires when it should, stays quiet when it should, and behaves reasonably on borderline prompts.

## Expected trigger classes

### Should trigger
1. Mixed-language technical/problem prompts aimed at English-heavy targets
2. CJK technical/problem prompts with enough English technical anchors
3. Explicit test-trigger prompts containing the configured `testTrigger`

### Should not trigger
1. Generic progress/status requests
2. Generic weather or non-technical chat
3. Pure English prompts that are already explicit and do not need bridge help
4. Generic conceptual comparison prompts unless they strongly look like retrieval/routing/problem-solving queries

## Initial case matrix

| ID | Prompt | Expected | Why |
|---|---|---|---|
| T01 | `bridge-plugin-test openclaw plugin 怎么设置` | Trigger | Explicit test trigger should force activation |
| T02 | `怎么让 OpenClaw 的 memory search 更容易命中中文说法？` | Trigger | Mixed Chinese/English technical retrieval wording |
| T03 | `为什么我的 github repo 在 openclaw 里找不到` | Trigger | Multilingual technical problem prompt with English-heavy target |
| T04 | `如何配置 vaultwarden token 给 OpenClaw plugin 用？` | Trigger | Multilingual config/auth prompt with technical anchors |
| T05 | `为什么 Codex 在 OpenClaw 插件里报 token 错误` | Trigger | Multilingual technical error prompt |
| N01 | `请帮我总结今天的进度` | No trigger | Generic progress request, not a bridge/routing problem |
| N02 | `今天天气怎么样` | No trigger | Non-technical everyday query |
| N03 | `OpenClaw plugin docs for before_prompt_build hook` | No trigger | Pure English and already explicit |
| B01 | `skill 和 memory 的区别是什么` | No trigger | Borderline conceptual comparison; should stay quiet after false-positive tuning |

## Current status

- T01-T05: validated as trigger cases
- N01-N03: validated as non-trigger cases
- B01: previously over-triggered, now tuned to remain quiet and validated as non-trigger

## Latest validation result (2026-04-17)

A first compact matrix pass was run against the current plugin logic with the configured test trigger set to `bridge-plugin-test`.

Result: 9/9 cases passed.

- Trigger cases passed: T01, T02, T03, T04, T05
- Non-trigger cases passed: N01, N02, N03
- Borderline case passed: B01

## Next use

Use this matrix as the first compact check surface before expanding into a broader multilingual prompt set or full benchmark integration.
