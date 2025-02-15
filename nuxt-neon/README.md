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

**WARNING**: Using "PUBLIC" .env variables will leak your connection data to client-side! This may work in demo, but for real application you should hide them on Nuxt server.

Check your project dasboard for values (Quickstart section). 

Connecton string will look like this: 
`postgres://<<neonUser>>:<<neonPass>>@<<neonHost>>.neon.tech/<<neonDB>>`

### Tutorial article
https://master-coda.cz/article/nuxt-database

### nuxt-neon module
Check also my project [nuxt-neon](https://github.com/AloisSeckar/nuxt-neon) which extends the idea and provides convenient and safe Nuxt module to be used for communication with Neon database.
