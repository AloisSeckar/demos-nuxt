<template>
  <div style="margin-bottom: 5px;">
    {{ textToDisplay }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  textToDisplay: { type: String, required: true },
})
</script>
