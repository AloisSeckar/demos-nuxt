// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],

  // DevExtreme only works client-side in production build
  ssr: false,

  // Nuxt packages compatibility
  compatibilityDate: '2026-01-10',

  // simple eslint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
