// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
