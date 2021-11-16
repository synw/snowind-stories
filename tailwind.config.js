module.exports = {
  purge: content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  jit: true,
  plugins: [
    require('@tailwindcss/forms'),
    require('@snowind/plugin'),
  ],
}
