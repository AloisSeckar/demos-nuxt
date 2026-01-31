// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  // modules used in this project
  modules: [
    // linting
    '@nuxt/eslint',
    // working with fonts
    '@nuxt/fonts',
  ],

  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

  // use ESlint also for code formatting (instead of Prettier)
  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    // for more customization reffer to https://google-fonts.nuxtjs.org/getting-started/options

    // specify how the font sets are being loaded
    defaults: {
      // no configuration is need by default
      // the module will try to load "normal" and "italic" variants of the font with "400" weight
      // it also downloads subsets with extra characters
      // you can change the defaults here

      // weights: [400],
      // styles: ['normal', 'italic'],
      // subsets: [
      //   'cyrillic-ext',
      //   'cyrillic',
      //   'greek-ext',
      //   'greek',
      //   'vietnamese',
      //   'latin-ext',
      //   'latin',
      // ]
    },

    // settings can be adjusted per-family
    families: [
      {
        // https://fonts.google.com/specimen/Public+Sans
        name: 'Public Sans',
        provider: 'google', // download from Google
        styles: ['italic'], // only italic variant
        subsets: ['latin'], // only regular latin characters
      },
    ],

    // single font provider can be selected
    // provider: 'google'

    // font providers can be added or disabled
    // providers: {
    //   custom: '/path/to/provider',
    //   google: false,
    // },

    // providers' priority can be altered
    // priority: [],

    // you can load fonts from a directory
    // assets: {
    //   prefix: '/path/to/dir'
    // }
  },
})
