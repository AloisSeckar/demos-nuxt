## Nuxt Minimal Starter
This demo shows how little is needed to start working with [Nuxt](https://nuxt.com/)

### Warning
This setup is "minimal", thus consciously omitting some important, if not crucial, files and features.

Above others:
* `nuxt.config.ts` file for Nuxt settings
* `tsconfig.json` file to correctly resolve aliases for Nuxt auto-imports in IDE
* **ESLint** for static code analysis

Do not use this as a starter for your real projects. Rather pick my `nuxt-stack` (with build-in integrations) or `nuxt-simple` (just plain Nuxt, but not gutted like this one).

### How to use
1. `git checkout demos-nuxt project`
2. `cd nuxt-minimal`
3. `npm install`
4. `npm run dev` 
5. `localhost:3000` 

Congratulations. You have working Nuxt app.

The only two required really files are:
- `package.json` with `devDependency` on nuxt
- `app.vue` with a simple `template` section

### Tutorial article
https://master-coda.cz/article/nuxt-simple#nuxt-minimal
