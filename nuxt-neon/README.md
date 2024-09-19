## Nuxt + Neon
This demo shows how to include [Neon database](https://neon.tech/) in [Nuxt](https://nuxt.com/)

### How to use

1. `git checkout demos-nuxt project`
2. `cd nuxt-neon`
3. `pnpm install`
4. Provide config details in `.env` file
5. `pnpm dev` 
6. `localhost:3000` 

**Prerequisities:** You need to create a Neon account, set up your project and create `playing_with_neon` database (can be done quickly with provided sample query).

**Details:** Nuxt-Neon configuration to be provided in `.env` file:
- NUXT_PUBLIC_NEON_HOST - sever instance, where your DB is hosted
- NUXT_PUBLIC_NEON_USER - your project DB user name
- NUXT_PUBLIC_NEON_PASS - your project DB user password
- NUXT_PUBLIC_NEON_DB - your project DB name

Check your project dasboard for values (Quickstart section). 

Connecton string will look like this: 
`postgres://<<neonUser>>:<<neonPass>>@<<neonHost>>.neon.tech/<<neonDB>>`

### Tutorial article
Not yet
