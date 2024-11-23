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
    <div class="hover:text-amber-200 hover:font-bold">
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
  // NOTE: this has priority before /assets/css/tailwind.css @apply directives
  // and it is better and clearer way of applying CSS styles on body-wide level
  bodyAttrs: {
    class: 'bg-slate-800'
  }
})
</script>
