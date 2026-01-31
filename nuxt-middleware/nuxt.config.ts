// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  // modules used in this project
  modules: [
    // linting
    '@nuxt/eslint',
  ],

  // since Nuxt 3.11.0 it is possible to configure middleware in routeRules
  // https://github.com/nuxt/nuxt/releases/tag/v3.11.0
  routeRules: {
    '/third': {
      appMiddleware: {
        'only-third': true,
        // can be also "false" to surpress a middleware triggered by another "group" rule
        // it is not applicable for "global" middleware
      },
    },
  },

  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

  // use ESlint also for code formatting (instead of Prettier)
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
