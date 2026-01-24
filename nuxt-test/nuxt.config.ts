export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
  ],

  compatibilityDate: '2026-01-24',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
