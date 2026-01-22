// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  // simple ESLint config
  modules: [
    '@nuxt/eslint',
  ],

  compatibilityDate: '2026-01-22',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
