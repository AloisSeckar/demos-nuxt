<template>
  <div>
    <h1>Nuxt API</h1>
    <button @click="handle">
      Make API call
    </button>
    <br>
    <div>{{ apiResponse }}</div>
  </div>
</template>

<script setup lang="ts">
const apiResponse = ref('')

const handle = async () => {
  const { data } = await useFetch<string>('/api/sample', { method: 'GET' })
  if (data.value) {
    apiResponse.value = data.value
  } else {
    apiResponse.value = 'ERROR'
  }
}
</script>
