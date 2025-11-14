## Nuxt Pages
This demo shows how pages and components work in [Nuxt](https://nuxt.com/)

### About
- **/app/components** - fundamental building blocks of an application in [Vue.js](https://vuejs.org/) (and therefore also in Nuxt). Nuxt automatically scans contents of this directory and make them available throughout the application without explicit importing (which is required in plain Vue.js). Read more [in the docs](https://nuxt.com/docs/4.x/directory-structure/app/components).
- **/app/pages** - special directory for components, that are being automatically exposed as URL routes based on their directory structure and name. For example you create file `/app/pages/page.vue` and it automatically become available via `http://localhost:3000/page`. Read more [in the docs](https://nuxt.com/docs/4.x/directory-structure/app/pages).
- **`<NuxtLink>`** - navigation between the pages is not made using traditional [HTML anchor](https://www.w3schools.com/tags/tag_a.asp) but with Nuxt special build-in [`<NuxtLink>`](https://nuxt.com/docs/4.x/api/components/nuxt-link). It works basically the same, but it allows optimized routing without global page reloads for internal links to avoid extra rendering and data-fetching when it is not needed.

### How to use
1. `git checkout demos-nuxt project`
2. `cd nuxt-pages`
3. `pnpm install`
4. `pnpm dev` 
5. `localhost:3000` 

You can navigate through the links to see different pages build by using different components appear.

### Tutorial article
- `dev.to`: [Nuxt Tutorial 2 - Components & Pages](https://dev.to/aloisseckar/nuxt-tutorial-2-components-pages-432g)
