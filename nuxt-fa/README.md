## Nuxt + Font Awesome
This demo shows how to include [Font Awesome icons](https://fontawesome.com/) in [Nuxt](https://nuxt.com/) using [Fort Awesome pacakage](https://github.com/FortAwesome/Font-Awesome)

### How to use
1. `git checkout demos-nuxt project`
2. `cd nuxt-fa`
3. `pnpm install`
4. `pnpm dev` 
5. `localhost:3000` 

### Tutorial article
https://master-coda.cz/article/nuxt-gui#fontawesome

### Current limits/gotchas
- only work correctly with `ssr: false` setting
- [issue](https://github.com/FortAwesome/Font-Awesome/discussions/19557) with ESLint and `FontAwesomeIcon` import
