<template>
    <div>
        <h1>Nuxt 3 + DevExtreme</h1>
        <DxButton 
            text="I am the DevExtreme button"
            @click="handle">
        </DxButton>
        <div>{{ clickResponse }}</div>
    </div>
</template>

<script setup lang="ts">
const clickResponse = ref('')
const clicks = ref(0)

const handle = () => {
    clicks.value = clicks.value + 1
    clickResponse.value = `Button was clicked ${clicks.value} times`
};
</script>