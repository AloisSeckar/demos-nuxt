// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  // modules used in this project
  modules: [
    // linting
    '@nuxt/eslint',
    // working with charts
    'nuxt-charts',
  ],

  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

  // use ESlint also for code formatting (instead of Prettier)
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
