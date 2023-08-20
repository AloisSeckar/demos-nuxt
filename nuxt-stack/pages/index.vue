<!--
    https://nuxt.com/docs/guide/directory-structure/pages

    An example of Nuxt page.
    Nuxt automaticaly provides routing and displays this page when user visits root URL.
-->

<template>
  <div>
    <div class="features-list">
      <!-- an example of Nuxt components declared in `/components` directory -->
      <AppFeature text="Nuxt application framework atop Vue.js" />
      <AppFeature text="VueUse utils available" />
      <AppFeature text="Tailwind CSS for styling" />
      <AppFeature text="Pinia for state management" />
      <AppFeature text="Supabase for auth and DB services" />
      <AppFeature text="FormKit for input forms" />
      <AppFeature text="Icons as components with Icônes" />
    </div>
    <div class="link">
      <NuxtLink to="/second">
        {{ $t("goto2") }}
      </NuxtLink>
    </div>
  </div>
</template>
