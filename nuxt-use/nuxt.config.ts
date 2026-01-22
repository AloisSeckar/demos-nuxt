// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],

  routeRules: {
    // there would be an issue with `useMouse()` and `v-bind` in CSS
    // if we try to render this page on the server...
    '/mouse': { ssr: false },
  },

  compatibilityDate: '2026-01-22',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
