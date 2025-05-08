## Nuxt + Neon
This demo shows how to include [Neon database](https://neon.tech/) in [Nuxt](https://nuxt.com/) using s://github.com/AloisSeckar/demos-nuxt/tree/main/nuxt-neon-m) - integration with [Neon](https://neon.tech/) using [nuxt-neon](https://github.com/AloisSeckar/nuxt-neon/) module.

### How to use

1. `git checkout demos-nuxt project`
2. `cd nuxt-neon-m`
3. `pnpm install`
4. Provide config details in `.env` file
5. `pnpm dev` 
6. `localhost:3000` 

**Prerequisities:** You need to create a Neon account, set up your project and create `playing_with_neon` database (can be done quickly with provided sample query).

**Details:** Nuxt-Neon configuration to be provided in `.env` file:
- NUXT_NEON_HOST - sever instance, where your DB is hosted 
- NUXT_NEON_USER - your project DB user name
- NUXT_NEON_PASS - your project DB user password
- NUXT_NEON_DB - your project DB name (alternatively NUXT_PUBLIC_NEON_DB that is exposed to client)

Note that `nuxt-neon` module is not exposing sensitive data to client-side. The only public variable might be the database name (if public variant is used).

Check your project dasboard for values (Quickstart section). 

### Tutorial article
NOT YET
