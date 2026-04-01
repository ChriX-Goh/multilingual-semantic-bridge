# Retrieval Playbooks

Use retrieval as the downstream consumer of the bridge pipeline.

Main priority order:
1. recover the right target
2. choose the right source
3. compare source authority correctly

Typical targets:
- memory
- local docs/files
- official docs
- skill/tool path

Target-oriented retrieval rule:
- memory: original phrasing often works; add canonical intent by default; add a pivot when ranking precision matters
- official docs: strongly favor canonical intent + English technical pivot
- skill/tool path: strongly favor product/action nouns and English technical pivots when metadata is English-heavy
- local docs/files: use the pivot whenever filenames or headings are operationally English-heavy
- exact-token surfaces: preserve exact identifiers, config keys, provider names, CLI commands, and errors verbatim

Do not multiply playbooks unless they materially strengthen the mainline.
