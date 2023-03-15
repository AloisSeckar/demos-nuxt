export default defineNuxtRouteMiddleware((to, from) => {
    console.log("This runs before each routing")
    console.log("FROM: " + from.path)
    console.log("TO: " + to.path)
  })