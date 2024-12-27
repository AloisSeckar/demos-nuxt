// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  compatibilityDate: '2024-12-27',
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    // for more customization reffer to https://google-fonts.nuxtjs.org/getting-started/options
    families: {
      // just specify font families to include here
      // NOTE: keys for multi-word font names must be quoted
      Montserrat: true,
      Freeman: true,
      Pacifico: true,
    },
  },
})
