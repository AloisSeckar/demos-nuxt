<template>
  <div class="mx-4">
    <h1 class="mt-2 text-2xl font-bold">
      nuxt-ui
    </h1>
    <div class="mt-2">
      Showcase of <a href="https://ui.nuxt.com/">Nuxt UI</a> - the dedicated UI framework for Nuxt
    </div>
    <h2 class="mt-2 text-xl font-bold">
      Features
    </h2>
    <div class="text-green-500">
      <Icon
        name="material-symbols:check-box-outline"
        color="black"
      />
      You can automatically use <a href="https://tailwindcss.com/">Tailwind CSS</a>
    </div>
    <div class="text-purple-500">
      <Icon
        name="material-symbols:check-box-outline"
        color="black"
      />
      You can automatically use icons from <a href="https://github.com/nuxt-modules/icon">Nuxt Icon</a> module.
    </div>
    <div class="text-blue-500">
      <Icon
        name="material-symbols:check-box-outline"
        color="black"
      />
      You have number of UI elements optimized for Nuxt at your disposal
    </div>
    <div class="text-amber-500">
      <Icon
        name="material-symbols:check-box-outline"
        color="black"
      />
      Automatic toggle between light and dark mode
    </div>
    <h2 class="mt-2 text-xl font-bold">
      UI elements
    </h2>
    <div class="p-2 flex flex-row items-center gap-2">
      <UButton
        label="Button"
      />
      <UButton
        label="Button with icon"
        icon="i-heroicons-pencil-square"
      />
    </div>
    <div>
      MORE TO COME
    </div>
  </div>
</template>
