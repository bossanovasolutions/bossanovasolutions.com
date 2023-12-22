/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";

// Types
import type { App } from "vue";

import Vue3Marquee from "vue3-marquee";

export function registerPlugins(app: App) {
  app.use(vuetify).use(Vue3Marquee);
}
