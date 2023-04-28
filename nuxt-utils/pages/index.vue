
import TheMenu from '~~/components/TheMenu.vue';

<template>
  <div>
    <h2>This is the index page</h2>
    <div>
      <TextBox text-to-display="This is the content of INDEX page defined as component prop" />
    </div>
    <hr>
    <div>
      (Example of using /utils directory)
      <ul>
        <!-- this is kind of a "bonus" thing not related to Nuxt itself         -->
        <!-- instead of defining array manually, we use JS generator            -->
        <!-- see `generateSequence` definition in `/utils/utils.ts` for details -->
        <!-- note special `of` keyword instead of typical `in` in the for-cycle -->
        <li v-for="value of generator" :key="value">
          <strong>{{ value }}</strong> is a prime number: <strong>{{ isPrime(value) }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// because `generateSequence` is not a regular function, but a generator (function*),
// we cannot benefit from auto-import here and we have to explicitly import it
import { generateSequence } from '@/utils/utils'
const generator = generateSequence()
</script>
