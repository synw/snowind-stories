module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-dark-mode',
  ],
  "core": {
    "builder": "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    // overwrite the vite config for base url
    // when building the storybook for github pages
    //config.base = '/snowind-stories/';
    // enable the @ alias
    config.resolve.alias = [
      { find: '@/', replacement: '/src/' },
      { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' }
    ]
    return config;
  },
}