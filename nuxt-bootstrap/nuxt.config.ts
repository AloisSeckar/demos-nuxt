// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  compatibilityDate: '2026-01-10',
  css: [
    '~/assets/main.scss',
  ],
  modules: [
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  // this is required to surpress sass deprecation warnings
  // bootstrap scss file appears invalid to the recent sass compiler
  // might be fixed later in future bootstrap releases (if any)
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['import'],
        }
      }
    }
  }
})
