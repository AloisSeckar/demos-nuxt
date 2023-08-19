// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  runtimeConfig: {
    public: {
      pageTitle: 'Nuxt Demos - Nuxt Stack'
    }
  },
  typescript: {
    strict: true
  }
})
