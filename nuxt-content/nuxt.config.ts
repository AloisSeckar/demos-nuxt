// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
  ],

  compatibilityDate: '2026-01-27',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
