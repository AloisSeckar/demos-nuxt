<template>
  <div>
    <h1 class="text-4xl text-amber-400 font-bold">
      Nuxt + Tailwind CSS
    </h1>
    <div>
      <div>
        This demo shows how to include Tailwind in Nuxt application
      </div>
      <div class="p-1 bg-amber-300 text-red-700">
        div element customized with Tailwind inline classes
      </div>
      <div class="customized">
        div element customized with Tailwind @apply
      </div>
    </div>
    <NuxtLink to="https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-tailwind" class="footer">
      https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-tailwind
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt Demos - Nuxt + Tailwind CSS',
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
