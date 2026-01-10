// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // allow code linting via ESLint module
  modules: [
    '@nuxt/eslint',
  ],

  // CSS importing Tailwind CSS styles
  css: [
    './app/assets/css/tailwind.css',
  ],

  // Nuxt packages compatibility
  compatibilityDate: '2025-12-21',

  // integration via a dedicated Vite plugin
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // simple ESLint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
