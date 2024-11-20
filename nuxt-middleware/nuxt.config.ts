// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  compatibilityDate: '2024-09-07',
  modules: [
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },

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
})
