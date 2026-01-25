<template>
  <div>
    [ {{ posX }} x {{ posY }} ]
  </div>
</template>

<script setup>
const posX = computed(() => useHeroStore().position.x)
const posY = computed(() => useHeroStore().position.y)
</script>
