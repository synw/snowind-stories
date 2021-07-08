import { themes } from '@storybook/theming';
import '../src/assets/index.css';
import snowind from './snowind_theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    stylePreview: true,
    dark: {
      ...themes.dark,
      appContentBg: snowind.background.dark,
      appBg: snowind.background.dark,
      barBg: snowind.background.dark,
    },
  }
}