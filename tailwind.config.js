const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/@snowind/**/*.{vue,js,ts}',
  ],
  // for storybook builds
  //purge: false,
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@snowind/plugin'),
  ],
  theme: { extend: { colors: { green: colors.emerald, yellow: colors.amber, purple: colors.violet, } }, },
}
