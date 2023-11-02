// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  i18n: {
    // if required to modify i18n
  },
  image: {
    // if required to modify nuxt/image
    presets: {
      // for custom presets
    }
  },
  runtimeConfig: {
    // nitro-only secret env-like variables goes here
    public: {
      // client-exposed env-like variables goes here
    }
  },
  typescript: {
    strict: true
  }
})
