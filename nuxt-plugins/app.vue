<template>
  <div>
    <h1>nuxt-plugin</h1>
    <div>How to use plugins in Nuxt 3</div>
    <div><a href="https://github.com/mirari/v-viewer/tree/v3">v-viewer</a> is added through a plugin here</div>

    <!-- v-viewer component incorporated into page -->
    <!-- this has to be client-only because of hydraton mismatch -->
    <h2>v-viewer gallery</h2>
    <ClientOnly>
      <VueViewer :images="images" class="images clearfix">
        <img v-for="src in images" :key="src" :src="src" class="image">
      </VueViewer>
    </ClientOnly>

    <!-- click to open v-viewer as modal overlay with extra functions -->
    <div>
      Click each image or
      <button @click="viewerFromApi">
        Click this button
      </button>
      to open v-viewer API
    </div>

    <div class="footer">
      Sample images by <a href="https://unsplash.com/">https://unsplash.com/</a>
    </div>
  </div>
</template>

<script setup>
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']

const viewerFromApi = () => {
  const viewerApi = useNuxtApp().vueApp.directive('viewerApi')
  viewerApi({
    images
  })
}
</script>

<style>
.image {
  width: 200px;
  height: 150px;
  cursor: pointer;
  margin: 5px;
  display: inline-block;
}

.footer {
  margin-top: 15px;
  font-size: 12px;
}
</style>
