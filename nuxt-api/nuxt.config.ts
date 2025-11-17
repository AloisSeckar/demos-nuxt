// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],

  compatibilityDate: '2025-11-15',

  // simple ESLint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
