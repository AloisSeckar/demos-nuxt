<template>
  <div>
    <h2>Second page</h2>
    <button @click="fetchAPI">
      Fetch from API
    </button>
    <div>
      {{ fetchedData }}
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'only-second'
})

const fetchedData = ref('')
async function fetchAPI () {
  const { data } = await useFetch<string>('/api/data')
  if (data.value) {
    fetchedData.value = data.value
  } else {
    fetchedData.value = 'Failed to fetch'
  }
}
</script>
