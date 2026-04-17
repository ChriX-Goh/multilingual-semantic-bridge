# Multilingual Semantic Bridge Plugin Prototype

This is the first narrow plugin scaffold for phase-2 automation work.

Current state:
- native OpenClaw plugin scaffold
- uses `before_prompt_build`
- can activate through the configured test trigger or the current narrow multilingual technical heuristic layer
- routes trigger cases into compact context styles for retrieval, setup, docs/reference, troubleshooting, or generic bridge help
- still aims to stay narrow, auditable, and easy to disable

Purpose of this version:
- prove the plugin boundary is viable
- reduce activation failure for multilingual technical prompts without turning into a hidden backend rewrite
- keep rollback easy
- avoid premature always-on semantic rewriting
