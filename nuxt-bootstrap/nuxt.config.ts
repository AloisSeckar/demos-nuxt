// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({

  // modules used in this project
  modules: [
    // linting
    '@nuxt/eslint',
  ],

  // Bootstrap styles are imported through this file
  // CSS preprocessor (saas package) is required to process `.scss`
  css: [
    '~/assets/main.scss',
  ],

  // Nuxt packages compatibility
  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

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

  // use ESlint also for code formatting (instead of Prettier)
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
