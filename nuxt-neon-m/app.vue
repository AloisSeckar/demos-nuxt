<template>
  <div>
    <h1>nuxt-neon</h1>
    <div>
      Sample integration to <a href="https://neon.tech/">Neon database</a> into Nuxt using <a href="https://github.com/AloisSeckar/nuxt-neon/">nuxt-neon module</a> created and maintained by me
    </div>
    <img
      src="https://github.com/AloisSeckar/nuxt-neon/blob/master/playground/public/nuxt-neon.png?raw=true"
      alt="nuxt-neon module logo"
      title="nuxt-neon"
      width="100"
      height="100"
    >
    <div>
      <strong>NOTE:</strong> own Neon account is necessary to run this demo (see README.md for instructions)
    </div>
    <h2>Neon database connection</h2>
    <div>Status: {{ dbStatus }}</div>
    <ExampleSelect />
  </div>
</template>

<script setup lang="ts">
const { neonStatus } = useNeon()
const dbStatus = await neonStatus(false)
</script>
