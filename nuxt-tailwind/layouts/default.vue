<!-- 
    https://nuxtjs.org/docs/directory-structure/layouts/

    layouts are useful to declare common parts of an appliction only
    once and in a dedicated place where everyone familiar with Nuxt
    will look for them

    Unless your app really is a "single page", and probably even then,
    it is considered best practice to use default layout instead of
    polluting app.vue with any header/footer/menu logic.
-->

<template>
    <div>
        <h1 class="text-4xl text-amber-400 font-bold">Nuxt + Tailwind CSS</h1>
        <NuxtPage />
        <NuxtLink to="https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-tailwind" class="footer">
            https://github.com/AloisSeckar/demos-nuxt/tree/master/nuxt-tailwind
        </NuxtLink>
    </div>
</template>