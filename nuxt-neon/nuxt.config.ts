// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/getting-started/configuration#nuxt-configuration
export default defineNuxtConfig({
  compatibilityDate: '2025-02-08',
  // simple ESLint config
  modules: [
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
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
})
