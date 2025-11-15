<template>
  <div>
    <h1>Nuxt API</h1>
    <div>
      <button @click="handle">
        Make API call
      </button>
    </div>
    <div>
      {{ apiResponse }}
    </div>
    <h2>Endpoints</h2>
    <div>
      <a href="/api/sample">/api/sample</a>
    </div>
    <div>
      <a href="/api/error">/api/error</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const apiResponse = ref('')

const handle = async () => {
  const data = await $fetch<string>('/api/sample', { method: 'GET' })
  if (data) {
    apiResponse.value = data
  }
}
</script>
