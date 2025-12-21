import OpenProps from 'open-props'

// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],

  compatibilityDate: '2025-12-21',

  // this is required to make Open Props working in Nuxt
  // it is not possible to automatically evaluate CSS variables in Vue SFC <style> section
  // => CSS processor is required
  postcss: {
    plugins: {
      'postcss-jit-props': OpenProps,
    },
  },

  // simple ESLint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
