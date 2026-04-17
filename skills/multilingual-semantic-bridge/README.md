# Multilingual Semantic Bridge

Help multilingual users reach the right technical target, not just a translated version of the question.

This skill is designed for a common technical mismatch:
- the user asks naturally in one language
- the best answer is named in another language, often English-heavy technical terminology
- the assistant needs help connecting the two

It works by preserving the user's original wording, recovering canonical intent, generating a stronger technical pivot when useful, and routing toward the most likely target surface.

Strong-fit targets include:
- official docs
- config keys
- provider names
- CLI commands
- skill metadata
- local operational files and runbooks

## Relationship to the plugin

This skill is the core bridge method.
The plugin is the lighter automatic entry point.

So:
- this skill works on its own
- the plugin can make activation more automatic
- the strongest current setup is **skill + plugin together**

Public links:
- GitHub: https://github.com/ChriX-Goh/multilingual-semantic-bridge
- ClawHub skill: https://clawhub.ai/chrix-goh/multilingual-semantic-bridge
