<template>
  <div>
    {{ textToDisplay }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  textToDisplay: { type: String, required: true },
})
</script>
