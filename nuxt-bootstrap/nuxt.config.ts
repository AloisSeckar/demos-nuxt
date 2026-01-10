// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
  ],

  // Bootstrap styles are imported through this file
  // CSS preprocessor (saas package) is required to process `.scss`
  css: [
    '~/assets/main.scss',
  ],

  // Nuxt packages compatibility
  compatibilityDate: '2026-01-10',

  // this is required to surpress sass deprecation warnings
  // bootstrap scss file appears invalid to the recent sass compiler
  // might be fixed later in future bootstrap releases (if any)
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['import'],
        },
      },
    },
  },

  // simple eslint config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
