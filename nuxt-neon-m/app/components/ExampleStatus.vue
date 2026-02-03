<template>
  <h2>STATUS EXAMPLE</h2>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data } = useFetch('/api/get-status')
</script>
