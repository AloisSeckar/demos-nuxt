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

// custom type to specify awaited results
type Data = {
  id: number
  name: string
  value: number
}

const result = ref({} as Data)
async function doSelect() {
  result.value = await select(
    ['id', 'name', 'value'],
    'playing_with_neon',
  ) as Data // this will be changed to generics in future nuxt-neon module versions
}
</script>

  <style>
  .info {
    margin-bottom: 5px;
  }
  </style>
