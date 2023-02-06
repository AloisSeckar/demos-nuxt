/**
 * 
 * http://localhost:3000/api/error/
 * 
 * This method demonstrates the behaviour of 'createError' method in Nuxt.
 * It just throws a error with random HTTP code 400-410.
 * 
 * When then error code is 404 (Not found), Nuxt does nothing special.
 * When the code is anything else but 404, then stack trace is appended.
 * However, this ONLY works when app runs in DEV mode, for apparent security reasons.
 * 
 */

export default defineEventHandler(() => {
  const code = 400 + Math.floor(Math.random() * 10)
  throw createError({
    statusCode: code,
    message: code.toString()
  })
})
  