<template>
  <div>
    This is the second page, using special layout via definePageMeta
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'special'
})
</script>
