/**
 * Enpoint configured in the Vueform instance in /pages/index.vue
 * Data from the from are being sent here
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)
  return 'Form received and logged in server console'
})
