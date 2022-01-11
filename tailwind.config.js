module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
      './node_modules/@snowind/**/*.{vue,js,ts}',
    ],
  },
  // for storybook builds
  //purge: false,
  darkMode: 'class',
  jit: true,
  plugins: [
    require('@tailwindcss/forms'),
    require('@snowind/plugin'),
  ],
}
