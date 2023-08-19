<template>
  <div>
    <h1>Nuxt Stack</h1>
    <NuxtPage />
    <p>
      Current time by <NuxtLink to="https://vueuse.org/">
        VueUse:
      </NuxtLink>
      {{ useDateFormat(useNow(), 'HH:mm:ss DD.MM.YYYY').value.replace('"', '') }}
    </p>
    <NuxtLink to="https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-stack" class="text-xs hover:text-amber-200">
      https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-stack
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: useRuntimeConfig().public.pageTitle as string,
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
