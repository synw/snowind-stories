module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', '../docs/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: ['sm:block', 'sm:hidden'],
    }
  },
  darkMode: 'class',
  jit: true,
  plugins: [
    require('@tailwindcss/forms'),
    require('@snowind/plugin'),
  ],
}
