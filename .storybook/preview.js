import { themes } from "@storybook/theming"
import '../src/assets/index.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import logo from "@/logo.png"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: 'html',
    stylePreview: true,
    current: "light",
    light: {
      ...themes.normal,
      brandTitle: "Snowind",
      brandUrl: 'https://synw.github.io/snowind',
      brandImage: logo,
    },
  },
  options: {
    storySort: {
      method: '',
      order: ['Design', 'Widgets', 'Layout', 'Forms'],
      locales: '',
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};