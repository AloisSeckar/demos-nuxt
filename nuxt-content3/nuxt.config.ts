// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  // modules used in this project
  modules: [
    // working with content files
    '@nuxt/content',
    // linting
    '@nuxt/eslint',
  ],

  // this would allow using Node.js native sqlite instead of better-sqlite3 package
  // however, it requires Node.js v22.5.0+
  // https://content.nuxt.com/docs/getting-started/configuration#experimentalnativesqlite-deprecated-use-sqliteconnector
  // content: {
  //   experimental: { nativeSqlite: true },
  // },

  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

  // use ESlint also for code formatting (instead of Prettier)
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
