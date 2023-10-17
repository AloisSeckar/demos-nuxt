<template>
  <div>
    <p><pre style="display: inline-block;">useInfiniteScroll</pre> allows user to keep scrolling down and new items will be dynamically loaded</p>
    <div ref="list" style="border: 1px solid black; height: 180px; overflow: auto;">
      <div v-for="item in data" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'

const list = ref<HTMLElement>(null)
const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

useInfiniteScroll(
  list,
  () => {
    data.value.push(...getMoreData(data.value.length))
  },
  { distance: 10 }
)

function getMoreData (start: number) {
  const values: number[] = []
  for (let i = start + 1; i <= start + 10; i++) {
    values.push(i)
  }
  return values
}
</script>
