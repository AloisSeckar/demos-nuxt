import OpenProps from 'open-props'

// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-07',
  // simple ESLint config
  modules: [
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  // this is required to make Open Props working in Nuxt
  // it is not possible to automatically evaluate CSS variables in Vue SFC <style> section
  // => CSS processor is required
  postcss: {
    plugins: {
      'postcss-jit-props': OpenProps,
    },
  },
})