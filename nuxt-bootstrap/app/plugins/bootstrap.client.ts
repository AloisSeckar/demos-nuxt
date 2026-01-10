export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bootstrap', import('bootstrap'))
})
