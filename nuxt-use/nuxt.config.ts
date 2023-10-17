// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // TODO deal with "hydration mismatch issue"
  modules: ['@vueuse/nuxt']
})
