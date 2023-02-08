<template>
    <!-- /pages/index.vue renders here by default -->
    <!-- or other component inside /pages structure -->
    <!-- based on current route -->
    <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt Demos - Nuxt + DevExtreme',
  htmlAttrs: {
    lang: 'en'
  }
})
</script>