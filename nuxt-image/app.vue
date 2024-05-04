<template>
  <div>
    <h1>nuxt-image</h1>
    <div>
      This demo shows how to work with images easily with
      <a href="https://image.nuxt.com/">Nuxt Image module</a>
    </div>
    <h2>Example 1</h2>
    <div>
      Classic <pre>&lt;img&gt;</pre> tag
    </div>
    <img
      src="/01.jpg"
    >
    <h2>Example 2</h2>
    <div>
      Nuxt Image <pre>&lt;NuxtImg&gt;</pre> tag
    </div>
    <NuxtImg
      src="/01.jpg"
    />
    <h2>Example 3</h2>
    <div>
      Nuxt Image <pre>&lt;NuxtPicture&gt;</pre> tag with a default <pre>format</pre>
    </div>
    <NuxtPicture
      format="webp"
      src="/01.jpg"
    />
    <h2>Example 4</h2>
    <div>
      <pre>&lt;NuxtImg&gt;</pre> with <pre>preset</pre> attribute
    </div>
    <NuxtImg
      src="/01.jpg"
      preset="thumb"
    />
  </div>
</template>

<style>
pre {
  display: inline-block;
}
</style>
