import path from 'path'
import { defineConfig } from 'vite'
import ESLintPlugin from 'vite-plugin-eslint'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ESLintPlugin({
      fix: true,
    }),

    Vue(),
  ],

  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
