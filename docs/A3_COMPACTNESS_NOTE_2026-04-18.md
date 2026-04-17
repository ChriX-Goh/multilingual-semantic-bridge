# Multilingual Semantic Bridge — A3 Compactness Note

Date: 2026-04-18 UTC+8
Status: completed Bucket A3 note

## Purpose

Record the first post-signoff compactness/noise-trimming pass on the injected bridge block.

## Problem

The bridge block had become slightly repetitive:
- generic boilerplate repeated ideas already restated by intent-specific lines
- each style block repeated a task-class sentence that the `Bridge intent` and `Context style` fields already communicated

This did not look broken, but it risked becoming mildly over-explanatory at prompt-build time.

## Change

`plugin/logic.ts` was tightened so that:
- repeated task-class lead-in lines were removed from the style blocks
- generic bridge guidance was shortened
- the bridge block still preserves:
  - activation reasons
  - bridge intent
  - context style
  - one compact general instruction layer
  - two intent-specific lines

## Result

- the injected block is leaner and less repetitive
- class guidance remains explicit
- compact validator still passes 32/32

## Non-goal

This slice did not reopen trigger heuristics broadly.
It was a compactness/noise pass, not a routing-policy redesign.
