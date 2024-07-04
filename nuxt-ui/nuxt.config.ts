// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-04',
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
