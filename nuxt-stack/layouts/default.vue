<!-- 
    https://nuxt.com/docs/guide/directory-structure/layouts
    https://nuxt.com/docs/api/components/nuxt-layout

    Layouts are useful to declare common parts of an appliction only
    once and in a dedicated place where everyone familiar with Nuxt
    will look for them.

    Unless your app really is a "single page", and probably even then,
    it is considered best practice to use default layout instead of
    polluting app.vue with any header/footer/menu logic.
-->


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