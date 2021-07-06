module.exports = {
  purge: false, // ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge is disabled to be able to deploy the storybook on GitHub pages

  darkMode: 'class',

  jit: true,

  plugins: [
    require('@tailwindcss/forms'),
    require('@snowind/plugin'),
  ],
}
