<template>
    <div>
        <h1>Nuxt 3 - API</h1>
        <button @click="handle">Make API call</button>
        <div>{{ apiResponse }}</div>
    </div>
</template>

<script setup lang="ts">
const apiResponse = ref('')

const handle = async () => {
    const { data } = await useFetch('/api/sample', { method: 'GET'})
    if (data.value) {
        apiResponse.value = data.value
    } else {
        apiResponse.value = "ERROR"
    }
}
</script>