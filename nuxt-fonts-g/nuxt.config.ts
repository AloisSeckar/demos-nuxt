// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  // modules used in this project
  modules: [
    // working with fonts
    '@nuxtjs/google-fonts',
    // linting
    '@nuxt/eslint',
  ],

  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

  // use ESlint also for code formatting (instead of Prettier)
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
