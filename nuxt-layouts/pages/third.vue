<template>
  <div>
    <div>
      This is the third page, where you can toggle between default and special layout
    </div>
    <div>
      <button @click="toggleLayout">
        Update layout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

function toggleLayout () {
  // get current layout name via `useRoute` composable
  const layout = useRoute().meta.layout === 'default' ? 'special' : 'default'
  // built-in function for dynamic layout changes
  setPageLayout(layout)
}
</script>
