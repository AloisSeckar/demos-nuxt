<template>
  <div>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
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
