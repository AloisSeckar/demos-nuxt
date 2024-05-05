// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
