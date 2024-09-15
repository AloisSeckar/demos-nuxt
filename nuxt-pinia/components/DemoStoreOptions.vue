<template>
  <div class="wrapper">
    <h2>usePiniaOptionsStore()</h2>
    <div>
      Pinia store written in <b>OptionsAPI</b> style is used
    </div>
    <h3>Stored values</h3>
    <div><strong>Boolean value:</strong> {{ store.demoBoolean }}</div>
    <div><strong>Number value:</strong> {{ store.demoNumber }}</div>
    <div><strong>String value:</strong> {{ store.demoString }}</div>
    <div><strong>Array value:</strong> {{ store.demoArray }}</div>
    <br>
    <button @click="store.fillWithRandomValues()">
      Init
    </button>
    &nbsp;
    <button @click="getterDemo">
      Getter
    </button>
  </div>
</template>

<script setup lang="ts">
const store = usePiniaOptionsStore()
const getterDemo = () => {
  alert(store.getDouble())
}
</script>

<style lang="css">
.wrapper {
  border: 1px solid black;
  margin: 10px 0px;
  padding: 0 10px 10px;
}
</style>
