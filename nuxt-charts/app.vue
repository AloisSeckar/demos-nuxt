<template>
  <div>
    <h1>nuxt-charts</h1>
    <div>
      Using <a href="https://nuxtcharts.com/">nuxt-charts</a> in <a href="https://nuxt.com/">Nuxt</a> project
    </div>
    <!-- <ClientOnly> required due to https://nuxtcharts.com/docs/server-side-rendering -->
    <ClientOnly>
      <DemoLineChart />
    </ClientOnly>
  </div>
</template>
