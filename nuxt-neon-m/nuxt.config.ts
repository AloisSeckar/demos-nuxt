// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxt-neon',
  ],

  compatibilityDate: '2025-05-05',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
