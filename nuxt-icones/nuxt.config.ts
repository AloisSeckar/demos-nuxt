// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],

  // Nuxt packages compatibility
  compatibilityDate: '2026-01-10',

  // simple ESLint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
