// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],

  // fa component doesn't work correctly with SSR
  ssr: false,

  compatibilityDate: '2026-01-10',

  // simple eslint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
