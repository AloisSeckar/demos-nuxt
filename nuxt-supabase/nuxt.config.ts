// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/eslint',
  ],

  compatibilityDate: '2026-01-29',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
