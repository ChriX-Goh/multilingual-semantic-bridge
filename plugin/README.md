# Multilingual Semantic Bridge Plugin Prototype

This is the first narrow plugin scaffold for phase-2 automation work.

Current state:
- native OpenClaw plugin scaffold
- uses `before_prompt_build`
- no-op by default
- only fires when the prompt contains the configured test trigger

Purpose of this version:
- prove the plugin boundary is viable
- keep rollback easy
- avoid premature always-on semantic rewriting
