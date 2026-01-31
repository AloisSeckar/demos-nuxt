// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // modules used in this project
  modules: [
    // linting
    '@nuxt/eslint',
  ],

  // CSS importing Tailwind CSS styles
  css: [
    './app/assets/css/tailwind.css',
  ],

  // Nuxt packages compatibility
  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

  // integration via a dedicated Vite plugin
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // use ESlint also for code formatting (instead of Prettier)
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
