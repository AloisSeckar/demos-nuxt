<template>
  <h3>SELECT EXAMPLE</h3>
  <div>
    <pre>const { select } = useNeon()</pre>
  </div>
  <button @click="doSelect">
    Execute select
  </button>
  &nbsp;<pre style="display:inline">(SELECT id, name, value FROM playing_with_neon)</pre>
  <div>
    Result: {{ result }}
  </div>
</template>

<script setup lang="ts">
const { select } = useNeon()

const result = ref({})
async function doSelect() {
  result.value = await select(
    ['id', 'name', 'value'],
    'playing_with_neon',
  )
}
</script>

  <style>
  .info {
    margin-bottom: 5px;
  }
  </style>
