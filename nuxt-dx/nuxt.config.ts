// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],

  compatibilityDate: '2026-01-10',

  // for some reason DevExtreme only works client-side only in production build
  ssr: false,
  
  // simple eslint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
