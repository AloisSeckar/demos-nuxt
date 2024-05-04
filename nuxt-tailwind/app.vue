<template>
  <div>
    <h1 class="text-4xl text-amber-400 font-bold">
      Nuxt + Tailwind CSS
    </h1>
    <div>
      <div>
        This demo shows how to include <a href="https://tailwindcss.com/">Tailwind CSS</a>
        in Nuxt application
      </div>
      <div class="p-1 bg-amber-300 text-red-700">
        div element customized with Tailwind inline classes
      </div>
      <div class="customized">
        div element customized with Tailwind @apply
      </div>
    </div>
    <div class="footer">
      <NuxtLink to="https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-tailwind">
        https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-tailwind
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt Demos - Nuxt + Tailwind CSS',
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
