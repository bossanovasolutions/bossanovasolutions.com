import type { App } from 'vue';

// CUSTOM PLUGINS
import MaskNumber from '@/directives/MaskNumber';

const registerDirectives = (app: App) => {
  app.directive('mask-number', MaskNumber);
};

export default registerDirectives;
