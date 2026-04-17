/*
 * Copyright 2026 ChriX Goh
 * SPDX-License-Identifier: Apache-2.0
 */

import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import { buildBridgeContext, decideBridgeActivation } from "./logic";

export default definePluginEntry({
  id: "multilingual-semantic-bridge",
  name: "Multilingual Semantic Bridge",
  description: "Narrow prompt-time automation layer for multilingual bridge activation.",
  register(api) {
    const config = (api.pluginConfig ?? {}) as PluginConfig;

    api.on("before_prompt_build", async (event, ctx) => {
      if (config.enabled === false) return undefined;
      if (ctx.trigger !== "user") return undefined;

      const prompt = event.prompt || "";
      const decision = decideBridgeActivation(prompt, config);
      if (!decision.shouldActivate) return undefined;

      if (config.debug) {
        api.logger.info("multilingual bridge hook fired", {
          agentId: ctx.agentId,
          sessionKey: ctx.sessionKey,
          reasons: decision.reasons,
          intent: decision.intent,
          contextStyle: decision.contextStyle,
          promptPreview: prompt.slice(0, 160),
        });
      }

      return {
        prependSystemContext: buildBridgeContext(decision.intent, decision.contextStyle, decision.reasons),
      };
    });
  },
});
