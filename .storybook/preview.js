import { themes } from "@storybook/theming"
import '../src/assets/index.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import logo from "@/assets/logo.png"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: 'html',
    stylePreview: true,
  },
  options: {
    storySort: {
      method: '',
      order: ['Colors', 'Widgets', 'Layout', 'Forms'],
      locales: '',
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};