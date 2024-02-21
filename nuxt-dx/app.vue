<template>
    <div>
        <h1>Nuxt + DevExtreme</h1>
        <DxButton 
            text="I am the DevExtreme button"
            @click="handle">
        </DxButton>
        <div>{{ clickResponse }}</div>
    </div>
</template>

<script setup lang="ts">
// simple import of predefined DevExtreme CSS theme
// https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/Predefined_Themes/
import 'devextreme/dist/css/dx.light.css'

const clickResponse = ref('')
const clicks = ref(0)

const handle = () => {
    clicks.value = clicks.value + 1
    clickResponse.value = `Button was clicked ${clicks.value} times`
}
</script>