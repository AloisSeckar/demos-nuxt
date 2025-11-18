export default defineNuxtRouteMiddleware(() => {
  console.log('This only runs when navigating to "/second"')
  console.log('Middlewares are being executed in alphabetical order')
})
