<!--
    https://nuxt.com/docs/guide/directory-structure/pages

    This page appears under `/second`
-->

<template>
  <div>
    <div class="m-4">
      {{ $t("page2") }}
    </div>
    <div class="link">
      <NuxtLink to="/">
        {{ $t("goto1") }}
      </NuxtLink>
    </div>
  </div>
</template>
