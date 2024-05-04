export default defineNuxtRouteMiddleware(() => {
  console.log('This only runs when navigating to "/third"')
  console.log('This middleware was set in nuxt.config.ts (available since Nuxt 3.11)')
})
