// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  compatibilityDate: '2025-04-28',
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  routeRules: {
    // there would be an issue with `useMouse()` and `v-bind` in CSS
    // if we try to render this page on the server...
    '/mouse': { ssr: false },
  },
})
