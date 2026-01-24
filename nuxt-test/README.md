## Testing Nuxt
This demo shows how to setup basic testing scenarios in [Nuxt](https://nuxt.com/)

### How to use
1. `git checkout demos-nuxt project`
2. `cd nuxt-test`
3. `pnpm install`
4. `pnpm exec playwright install` to install browsers for e2e tests
5. `pnpm dev` to generate required files in .nuxt folder
6. `pnpm test` to run tests and keep them up for HMR **OR** `pnpm test-once` to run tests and end

### Tutorial article
Not yet

### Nuxt Spec
Check also my project [Nuxt Spec](https://github.com/AloisSeckar/nuxt-spec) which is based on this example setup and allows simple integration of all test-related stuff into Nuxt projects as a base layer you can extend from.

![Nuxt Spec](https://github.com/AloisSeckar/nuxt-spec/blob/main/public/nuxt-spec.png)
