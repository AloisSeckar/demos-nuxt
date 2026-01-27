<template>
  <div>
    <h1>nuxt-content</h1>
    <div>
      Use <a href="https://content.nuxt.com/">Nuxt Content</a> module to render page content from markdown files:
    </div>
    <hr>
    <div>
      <NuxtPage />
    </div>
    <div>
      <NuxtLink
        to="/first"
        :external="true"
      >
        First
      </NuxtLink>
      &bull;
      <NuxtLink
        to="/second"
        :external="true"
      >
        Second
      </NuxtLink>
    </div>
    <hr>
    <div>
      Check <a href="https://content.nuxt.com/docs/getting-started">Nuxt Content docs</a> to learn more.
    </div>
  </div>
</template>
