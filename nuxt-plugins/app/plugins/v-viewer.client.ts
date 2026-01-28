// import the stuff you want to use from 3rd party package
import { api, component } from 'v-viewer'
// also import related CSS style
import 'viewerjs/dist/viewer.css'

// https://nuxt.com/docs/guide/directory-structure/plugins
export default defineNuxtPlugin((nuxtApp) => {
  // `nuxtApp` is Nuxt application context that can automatically be passed into plugin's callback
  // `vueApp` exposes the underlying Vue 3 application context
  const app = nuxtApp.vueApp

  // method `.component()` can be used for global component registration
  app.component('VueViewer', component)

  // method `.directive()` can be used for global function registration
  app.directive('viewerApi', api)
})
