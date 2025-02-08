<template>
  <div>
    {{ text }}
  </div>
</template>

<script setup lang="ts">
// this is a very basic component that can take one string prop and just display it
// it is used to be mounted in test scenarios
defineProps({ text: { type: String, default: 'nuxt-spec' } })
</script>
