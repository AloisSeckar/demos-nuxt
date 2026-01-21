// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
  ],

  // load Tailwind CSS and Nuxt UI styles
  css: ['~/assets/main.css'],

  compatibilityDate: '2026-01-21',

  // simple eslint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
