//import { themes } from '@storybook/theming';
import '../src/assets/index.css';

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
    classTarget: 'html',
    darkClass: 'dark',
    lightClass: 'light'
  }
}