// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
  ],
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
          height: 100
        }
      }
    }
  }
})
