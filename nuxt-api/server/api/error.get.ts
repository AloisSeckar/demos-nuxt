/**
 * http://localhost:3000/api/error
 *
 * This method demonstrates the behaviour of 'createError' method in Nuxt.
 * It just throws a error with random HTTP code 400-410.
 *
 * Nuxt will cathch this error and display a special error page.
 * Whenb app runs in DEV mode, it is also possible to display enhanced information.
 * See https://nuxt.com/blog/v4-2#better-error-pages-in-development
 */

export default defineEventHandler(() => {
  const code = 400 + Math.floor(Math.random() * 10)
  throw createError({
    statusCode: code,
    message: code.toString(),
  })
})
