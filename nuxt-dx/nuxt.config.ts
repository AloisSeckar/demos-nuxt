// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
  ],
  // for some reason DevExtreme only works client-side only in production build
  ssr: false, compatibilityDate: '2025-02-08',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
