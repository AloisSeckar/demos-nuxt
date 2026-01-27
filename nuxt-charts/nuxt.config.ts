// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxt-charts',
  ],

  compatibilityDate: '2026-01-27',

  // simple ESLint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
