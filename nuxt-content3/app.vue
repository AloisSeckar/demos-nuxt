<template>
  <div>
    <h1>nuxt-content</h1>
    <div>
      The following page content is rendered with help of
      <a href="https://content.nuxtjs.org/">Nuxt Content</a> module:
    </div>
    <hr>
    <div>
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </div>
    <hr>
    <div>
      All you need to do to start benefit from this is to
      <a href="https://content.nuxtjs.org/get-started#add-to-a-project">include the module</a>,
      add <pre>&lt;ContentDoc /&gt;</pre> component into template
      and provide corresponding sources into <strong>/content</strong> directory.
    </div>
  </div>
</template>

<script setup lang="ts">
// v3 works with "collections"
// by default 'content' exists and contains everything under /content directory
// you can customize the collections and source directories using content.config.ts
// check https://content.nuxt.com/docs/collections/define for more info
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  // returns parsed content page data based on current route
  // data are being displayed inside <ContentRenderer /> component
  // check https://content.nuxt.com/docs/components/content-renderer for more info
  return queryCollection('content').path(route.path).first()
})
</script>
