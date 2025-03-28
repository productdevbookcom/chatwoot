import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json', 'html'],
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
    ],
    include: ['**/tests/**/*.{js,tsx,ts}'],
    alias: {
      '~/vue': './playground-vue',
      '~/nuxt': './playground-nuxt',
    },
  },
})
