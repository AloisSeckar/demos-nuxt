import { defineVitestConfig } from '@nuxt/test-utils/config'

// this is a basic config file for Vitest with Nuxt

export default defineVitestConfig({
  test: {
    // like this, every test will start running in Nuxt
    // you can also use "// @vitest-environment nuxt" comment on the first line of  *.test.ts file
    // to set it up per-file
    environment: 'nuxt',
    // this will be executed before each test run
    setupFiles: ['./test/vitest-utils.ts'],
  },
})
