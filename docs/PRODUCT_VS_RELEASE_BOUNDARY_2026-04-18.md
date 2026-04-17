# Multilingual Semantic Bridge — Product vs Release Boundary

Date: 2026-04-18 UTC+8
Status: active boundary clarification
Purpose: separate the remaining product-mainline work from pure publication/release execution so product remains the primary axis

## 1. Product-mainline objective

The product mainline is complete enough to be real, but not complete enough to be treated as "done forever".
The right remaining question is:
- what still improves actual multilingual routing quality or product confidence?

## 2. What counts as product-mainline work

These are still product work:
- bounded hardening of trigger/class-fit behavior
- pressure-test families that expose real routing weaknesses
- validator/matrix improvements that answer a real product question
- sharper skill/plugin operational boundary when it affects actual use quality
- proof/evidence updates when they materially change product confidence

## 3. What no longer counts as product-mainline work

These are now release/publish execution or governance work, not product core:
- repo visibility change
- ClawHub publication mechanics
- outward/community/official posting
- release gate administration by itself
- wording-only publication polish that does not change product confidence

## 4. Current product judgment

Current product judgment:
- narrow v1 is real and signed off
- post-v1 hardening has produced multiple meaningful improvements
- the product line is already strong enough to justify publication preparation
- remaining product work should now be selective, evidence-driven, and bounded

## 5. Remaining product-mainline queue

### Product P1 — one more bounded pressure-test family
Question:
- is there another realistic multilingual edge family that could still change routing confidence materially?

Preferred candidate:
- alias-heavy / shorthand-heavy technical prompts with weaker official token overlap

Definition of done:
- one named family added
- validator result recorded honestly
- only narrow fixes if the family surfaces a real weakness

### Product P2 — stop-or-continue judgment
Question:
- after P1, does product evidence justify another hardening slice, or is further product work already diminishing-return relative to release execution?

Definition of done:
- explicit answer: continue one more product slice, or freeze product mainline for release execution

## 6. Release-only queue

These should wait behind the product stop-or-continue judgment unless a blocking regression appears:
- repo public execution
- ClawHub publish execution
- outward/community entry

## 7. Current immediate recommendation

Current immediate move:
- do **one more bounded product slice**
- then make an explicit stop-or-continue judgment for the product mainline

This keeps product first without reopening uncontrolled scope.
