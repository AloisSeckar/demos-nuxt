// Nitro plugins are executed once during server and allow extending Nitro's runtime behavior
// by accessing the app instance and its hooks.
// See https://nitro.build/guide/plugins

export default defineNitroPlugin((nitroApp) => {
  console.log('Server-side plugin running ONCE on startup with access to Nitro app instance')
  console.debug(nitroApp) // change log level to see the output
})
