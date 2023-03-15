export default defineEventHandler((event) => {
  // you will see this in your terminal, NOT in the browser console
  console.log('This runs on server before every API call')
  console.log('New request: ' + event.node.req.url)
})
