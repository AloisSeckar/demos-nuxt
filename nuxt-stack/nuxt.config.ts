// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  i18n: {
    // if required to modify i18n
  },
  runtimeConfig: {
    public: {
      pageTitle: 'Nuxt Demos - Nuxt Stack'
    }
  },
  typescript: {
    strict: true
  }
})
