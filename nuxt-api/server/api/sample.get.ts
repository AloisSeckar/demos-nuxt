/**
 * http://localhost:3000/api/sample
 *
 * Simple server-side getter method
 * 
 * See https://nuxt.com/docs/4.x/directory-structure/server
 */

export default defineEventHandler(() => 'Hello from Nuxt Server! @ ' + new Date().toISOString())
