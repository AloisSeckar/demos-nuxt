// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
  ],

  // this would allow using Node.js native sqlite instead of better-sqlite3 package
  // however, it requires Node.js v22.5.0+
  // https://content.nuxt.com/docs/getting-started/configuration#experimentalnativesqlite-deprecated-use-sqliteconnector
  // content: {
  //   experimental: { nativeSqlite: true },
  // },

  compatibilityDate: '2026-01-27',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
