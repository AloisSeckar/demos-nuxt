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
      <div
        class="bg-green-400 margin-2 font-bold"
        style="color: red; padding: 5px;"
      >
        combination of Tailwind classes and plain CSS
      </div>
      <div class="plain-css">
        you can also just use plain CSS as you were used to
        <div>
          You can set custom colors by adding into `@theme` in /app/assets/css/tailwind.css:
          <ul>
            <li class="text-coda-green">
              Custom text-coda-green
            </li>
            <li class="text-coda-yellow">
              Custom text-coda-yellow
            </li>
            <li class="text-coda-purple">
              Custom text-coda-purple
            </li>
          </ul>
        </div>
        <div>
          Or custom fonts:
          <ul>
            <li class="font-header">
              Custom font-header
            </li>
            <li class="font-body">
              Custom font-body
            </li>
            <li class="font-code">
              Custom font-code
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- here you can see problem of global definition of <div> styles via @apply -->
    <!-- the text color setting needs to have "!" (!important) flag set up -->
    <!-- otherwise it would be overriden by the default (white) -->
    <!-- remember NOT to use @apply globally on html elements -->
    <div class="hover:text-amber-300! hover:font-bold">
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
    class: 'bg-slate-800',
  },
})
</script>

<style scoped>
.plain-css {
  border: 2px solid red;
  padding: 5px;
  margin-top: 10px;
  color: yellow;
  background-color: black;
}
</style>
