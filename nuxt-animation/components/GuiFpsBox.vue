<template>
  <div>
    {{ framesPerSecond }} FPS
  </div>
</template>

<script setup>
import { useIntervalFn, useRafFn } from '@vueuse/core'

const totalFrames = ref(0)
const framesPerSecond = ref(0)

useRafFn(() => {
  totalFrames.value++
})

useIntervalFn(() => {
  framesPerSecond.value = totalFrames.value
  totalFrames.value = 0
}, 1000)
</script>
