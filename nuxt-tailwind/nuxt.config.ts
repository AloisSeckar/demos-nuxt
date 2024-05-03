// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
