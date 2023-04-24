<template>
  <div>
    <hr>
    Counter: {{ getCount }}
    <button @click="incCount(1)">
      +
    </button>
    <button @click="reset()">
      Reset
    </button>
    <hr>
  </div>
</template>

<script setup lang="ts">
const {
  getCount,
  incCount,
  reset
} = useCounter()
</script>
