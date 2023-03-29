<template>
  <div>
    <h1>Nuxt + Pinia</h1>
    <div>Working starter for <a href="https://nuxt.com/" title="Nuxt">Nuxt</a> project</div>
    <div>
      Here you can see, how to integrate <a href="https://pinia.vuejs.org/" title="Pinia">Pinia</a> state management into your application.
    </div>
    <h2>Stored values</h2>
    <div><strong>Boolean value:</strong> {{ store.demoBoolean }}</div>
    <div><strong>Number value:</strong> {{ store.demoNumber }}</div>
    <div><strong>String value:</strong> {{ store.demoString }}</div>
    <div><strong>Array value:</strong> {{ store.demoArray }}</div>
    <button @click="store.fillWithRandomValues()">Init</button>
    <button @click="getterDemo">Getter</button>
  </div>
</template>

<script setup lang="ts">
const store = usePiniaDemoStore()
const getterDemo = () => {
  alert(store.getDouble())
}
</script>
