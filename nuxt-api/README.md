## Nuxt API
This demo shows how to create and consume [Nuxt](https://nuxt.com/) server-side API.

### How to use
1. `git checkout demos-nuxt project`
2. `cd nuxt-api`
3. `pnpm install`
4. `pnpm dev` 
5. `localhost:3000` 

Hit "API call" button to see the dynamic response from server-side API provided by Nuxt itself.

### API methods
* **sample** - `http://localhost:3000/api/sample/` - returns "Hello, world" message + current time
* **error** - `http://localhost:3000/api/error/` - returns random HTTP error 400 - 410

### Tutorial article
https://master-coda.cz/article/nuxt-api
