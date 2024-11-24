/**
 * http://localhost:3000/api/sample
 *
 * Simple server-side getter method
 */

export default defineEventHandler(() => 'Hello, Nuxt! @ ' + new Date().toISOString())
