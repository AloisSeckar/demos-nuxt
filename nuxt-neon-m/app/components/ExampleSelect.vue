<template>
  <h2>SELECT EXAMPLE</h2>
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
import type { NeonError } from 'nuxt-neon'

const result = ref([] as ExampleData[])
async function doSelect() {
  const res = await $fetch<ExampleData[] | NeonError>('/api/get-data')
  if (Array.isArray(res)) {
    result.value = res as ExampleData[]
  }
  else {
    alert(formatNeonError(res as NeonError))
  }
}
</script>
