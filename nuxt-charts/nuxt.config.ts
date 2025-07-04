// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  compatibilityDate: '2025-07-04',
  // simple ESLint config
  modules: [
    '@nuxt/eslint',
    "nuxt-charts"
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
