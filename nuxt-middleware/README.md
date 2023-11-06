## Nuxt Middleware
This demo shows example of how middleware works in [Nuxt](https://nuxt.com/)

### About
Nuxt offers middleware both for [client side](https://nuxt.com/docs/guide/directory-structure/middleware) and [server side](https://nuxt.com/docs/guide/directory-structure/server#server-middleware). Client side middlewares can be bound to certain components via `definePageMeta` or can run before each routing event thanks to `*.global.ts` filename. Server middlewares are being executed before each server API call.

### How to use
1. `git checkout demos-nuxt project`
2. `cd nuxt-middlware`
3. `npm install`
4. `npm run dev` 
5. `localhost:3000` 

The behavior of each middleware is demonstrated by the log messages in the browser console (F12). Navigate through the app and interact with the UI to see what is happening when.

### Tutorial article
https://master-coda.cz/article/nuxt-middleware
