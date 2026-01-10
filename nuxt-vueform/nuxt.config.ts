// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@vueform/nuxt',
  ],

  // Nuxt packages compatibility
  compatibilityDate: '2025-03-29',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
