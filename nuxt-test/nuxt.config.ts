export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
  ],

  compatibilityDate: '2025-01-26',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
