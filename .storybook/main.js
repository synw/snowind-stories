module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-dark-mode'
  ],
  "core": {
    "builder": "storybook-builder-vite",
  },
  // overwrite the vite config for base url
  // when building the storybook for github pages
  /*async viteFinal(config, { configType }) {
    config.base = '/snowind-stories/';
    return config;
  },*/
}