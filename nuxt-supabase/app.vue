<template>
  <div>
    <h1>Nuxt + Supabase</h1>
    <div>
      Here you can see, how to integrate <a href="https://supabase.com/">Supabase</a> cloud DB into your application.
    </div>
    <div>
      This app is connected to test database hosted on Supabase and starts fetching data via provided JavaScript client on startup. Once data are successfully retrieved, they will be displayed.
    </div>
    <h2>Fetch first 10 items from nuxt_items table</h2>
    <div v-if="loadingList">
      Loading...
    </div>
    <div>
      <img
        v-for="value in listOfItems"
        :key="value.id"
        :src="value?.image"
        :alt="value?.name"
        :title="`${value?.name} - ${value?.dscr}`"
        class="supabase"
      >
      <h2>Fetch from nuxt_items table where id = {{ randomItem || '' }}</h2>
      <div v-if="loadingItem">
        Loading...
      </div>
      <pre>{{ item }}</pre>
      <hr>
      <div>
        TODO other Supabase CRUD methods
      </div>
      <div>
        TODO Supabase with Pinia
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loadingList = ref(true)
const listOfItems = ref()
const loadingItem = ref(true)
const item = ref()
const randomItem = ref(0)

onBeforeMount(async () => {
  listOfItems.value = await usePlainSelectListOfItems()
  loadingList.value = false

  randomItem.value = Math.round(Math.random() * 10)
  item.value = await usePlainSelectItem(randomItem.value)
  loadingItem.value = false
})
</script>

<style scoped>
.supabase {
  display: inline-block;
  width: 200px;
  height: 150px;
}
</style>
