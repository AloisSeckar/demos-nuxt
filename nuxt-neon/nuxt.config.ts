// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  // modules used in this project
  modules: [
    // linting
    '@nuxt/eslint',
  ],

  runtimeConfig: {
    public: {
      // you need to create your own neon.tech account and start a project for that
      // in Quickstart section of your admin console, you will find your connection string in format:
      // postgres://<<neonUser>>:<<neonPass>>@<<neonHost>>.neon.tech/<<neonDB>>
      // put your runtime values into private .env file
      neonHost: '',
      neonUser: '',
      neonPass: '',
      neonDB: '',
    },
  },

  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: '2026-01-31',

  // use ESlint also for code formatting (instead of Prettier)
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
