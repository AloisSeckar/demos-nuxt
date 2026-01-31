<template>
  <div>
    <h1>nuxt-time</h1>
    <div>
      Displaying reactive SSR-friendly realtime info via
      <pre style="display: inline-block">&lt;NuxtTime /&gt;</pre> component.
    </div>
    <div style="width: 200px; border: 1px solid black; margin: 10px; padding: 5px; text-align: center;">
      <NuxtTime
        :datetime="currentTime"
        year="numeric"
        month="2-digit"
        day="2-digit"
        hour="2-digit"
        minute="2-digit"
        second="2-digit"
      />
    </div>
    <div>
      See <a href="https://nuxt.com/docs/4.x/api/components/nuxt-time">Nuxt Docs</a>
      for more details and configuration options.
    </div>
  </div>
</template>

<script setup lang="ts">
const currentTime = ref(Date.now())

onNuxtReady(() => {
  setInterval(() => {
    currentTime.value = Date.now()
  }, 1000)
})
</script>
