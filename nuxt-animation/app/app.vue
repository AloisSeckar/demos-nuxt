<template>
  <div>
    <ClientOnly>
      <div class="overlay">
        <GuiCoordsBox />
        <GuiFpsBox />
      </div>
      <div>
        <GraphicsHero />
      </div>
    </ClientOnly>
  </div>
</template>

<style>
.overlay {
  position: relative;
  z-index: 1;
}
</style>
