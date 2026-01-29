// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@formkit/nuxt',
    '@nuxt/eslint',
  ],

  css: ['@formkit/themes/genesis'],

  compatibilityDate: '2025-02-08',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
