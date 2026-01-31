import OpenProps from 'open-props'

// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  // modules used in this project
  modules: [
    // linting
    '@nuxt/eslint',
  ],

  // Nuxt packages compatibility
  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

  // this is required to make Open Props working in Nuxt
  // it is not possible to automatically evaluate CSS variables in Vue SFC <style> section
  // => CSS processor is required
  postcss: {
    plugins: {
      'postcss-jit-props': OpenProps,
    },
  },

  // use ESlint also for code formatting (instead of Prettier)
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
