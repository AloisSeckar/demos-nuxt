// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  // modules used in this project
  modules: [
    // linting
    '@nuxt/eslint',
    // working with images
    '@nuxt/image',
  ],

  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

  // use ESlint also for code formatting (instead of Prettier)
  eslint: {
    config: {
      stylistic: true,
    },
  },

  image: {
    // check https://image.nuxt.com/get-started/configuration for all options
    presets: {
      // allow you to define your own configuration preset
      // "thumb" is a custom identifier, you can use any otherr name you want
      thumb: {
        // custom config values
        // this will make all "thumb" images 100x75 pixels in WEBP format
        // Nuxt Image will create respective file from the original one during build
        modifiers: {
          format: 'webp',
          width: 150,
          height: 100,
        },
      },
    },
  },
})
