import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

const DEFAULT_TRIGGER = "bridge-plugin-test";

type PluginConfig = {
  enabled?: boolean;
  testTrigger?: string;
  debug?: boolean;
};

export default definePluginEntry({
  id: "multilingual-semantic-bridge",
  name: "Multilingual Semantic Bridge",
  description: "Narrow prompt-time automation layer for multilingual bridge activation.",
  register(api) {
    const config = (api.pluginConfig ?? {}) as PluginConfig;

    api.on("before_prompt_build", async (event, ctx) => {
      if (config.enabled === false) return undefined;
      if (ctx.trigger !== "user") return undefined;

      const trigger = (config.testTrigger || DEFAULT_TRIGGER).trim();
      const prompt = event.prompt || "";
      if (!prompt.includes(trigger)) return undefined;

      if (config.debug) {
        api.logger.info("multilingual bridge test hook fired", {
          agentId: ctx.agentId,
          sessionKey: ctx.sessionKey,
          trigger,
        });
      }

      return {
        prependSystemContext: [
          "<multilingual_semantic_bridge_plugin>",
          "Plugin test hook fired.",
          `Original prompt matched test trigger: ${trigger}`,
          "Preserve the original wording.",
          "Derive canonical intent before retrieval.",
          "Use a technical pivot only if the likely target surface is English-heavy.",
          "</multilingual_semantic_bridge_plugin>"
        ].join("\n"),
      };
    });
  },
});
