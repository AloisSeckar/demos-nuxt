<template>
  <div>
    <h1>Nuxt Stack</h1>
    <NuxtPage />
    <NuxtLink to="https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-stack" class="text-xs text-white hover:text-amber-200">
      https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-stack
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt Demos - Nuxt Stack',
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
