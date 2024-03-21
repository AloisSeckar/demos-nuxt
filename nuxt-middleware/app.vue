<template>
  <div>
    <h1>nuxt-middlware</h1>
    <div>Navigate through the app to see how middlware works in Nuxt</div>
    <NuxtPage />
    <div>
      <NuxtLink to="/first" :internal="true">
        First
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/second" :internal="true">
        Second
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/third" :internal="true">
        Third
      </NuxtLink>
    </div>
  </div>
</template>
