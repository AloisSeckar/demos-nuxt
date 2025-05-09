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

const result = ref([] as Data[])
async function doSelect() {
  // sql wrapper for `SELECT`
  // returns either an array of expected data type
  // or a string with an error occured (TODO will be changed to NeonError instance)
  const res = await select<Data>(
    ['id', 'name', 'value'],
    'playing_with_neon',
  )
  if (Array.isArray(res)) {
    result.value = res as Data[]
  }
  else {
    alert(res)
  }
}
</script>

  <style>
  .info {
    margin-bottom: 5px;
  }
  </style>
