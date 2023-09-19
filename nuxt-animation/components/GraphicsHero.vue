<template>
  <div class="hero" />
</template>

<script setup lang="ts">
import { onKeyDown, onKeyUp, useIntervalFn, useRafFn, useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const hero = useHeroStore()
hero.init(width.value, height.value)

type ControlSet = {
  ArrowDown: Function,
  ArrowUp: Function,
  ArrowRight: Function,
  ArrowLeft: Function,
}

const controls: ControlSet = {
  ArrowDown: () => {
    if (hero.direction !== 'd') {
      hero.frames = 0
    }
    hero.direction = 'd'
    hero.offset.y = 128
  },
  ArrowUp: () => {
    if (hero.direction !== 'u') {
      hero.frames = 0
    }
    hero.direction = 'u'
    hero.offset.y = 0
  },
  ArrowRight: () => {
    if (hero.direction !== 'r') {
      hero.frames = 0
    }
    hero.direction = 'r'
    hero.offset.y = 192
  },
  ArrowLeft: () => {
    if (hero.direction !== 'l') {
      hero.frames = 0
    }
    hero.direction = 'l'
    hero.offset.y = 64
  }
}

useIntervalFn(() => {
  if (hero.moving) {
    switch (hero.direction) {
      case 'u':
        hero.position.y -= 1
        break
      case 'd':
        hero.position.y += 1
        break
      case 'l':
        hero.position.x -= 1
        break
      case 'r':
        hero.position.x += 1
        break
    }
  }
}, 15)

useIntervalFn(() => {
  if (hero.moving) {
    switch (hero.phase) {
      case 1:
        hero.phase = 2
        hero.offset.x = 48
        break
      case 2:
        hero.phase = 3
        hero.offset.x = 96
        break
      case 3:
        hero.phase = 1
        hero.offset.x = 0
        break
    }
  }
}, 100)

useRafFn(() => {
  if (hero.moving) {
    hero.frames++
  }
})

onKeyDown(Object.keys(controls), (e) => {
  e.preventDefault()
  hero.lastKeyDown = Date.now()
  if (hero.moving === false) {
    hero.frames = 0
  }
  hero.moving = true
  controls[e.key as keyof ControlSet]()
})

onKeyUp(Object.keys(controls), (e) => {
  e.preventDefault()
  hero.lastKeyUp = Date.now()
  if (hero.frames > 20) {
    hero.moving = false
    hero.frames = 0
    hero.phase = 2
  }
  setTimeout(() => {
    if (Date.now() - hero.lastKeyDown >= 500 && Date.now() - hero.lastKeyUp >= 500) {
      hero.moving = false
      hero.frames = 0
      hero.phase = 2
    }
  }, 500)
})
</script>

<style scoped>
.hero {
  width: v-bind('hero.heroWidth + "px"');
  height: v-bind('hero.heroHeight + "px"');
  background: url('hero-sprite.png') v-bind('hero.offset.x + "px"') v-bind('hero.offset.y + "px"');
  position: absolute;
  top: v-bind('hero.position.y + "px"');
  left: v-bind('hero.position.x + "px"');
}
</style>
