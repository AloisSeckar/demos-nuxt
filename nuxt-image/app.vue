<template>
  <div>
    <h1>nuxt-image</h1>
    <div>
      This demo shows how to work with images easily with
      <a href="https://image.nuxt.com/" title="Nuxt">Nuxt Image module</a>
    </div>
    <div>
      Classic <pre><img></pre> tag
      <img src="01.jpg">
    </div>
    <div>
      Nuxt Image <pre>&lt;NuxtImg&gt;</pre> tag
      <NuxtImg src="01.jpg" />
    </div>
    <div>
      <pre>&lt;NuxtImg&gt;</pre> with <pre>preset</pre> attribute
      <NuxtImg src="01.jpg" preset="thumb" />
    </div>
  </div>
</template>
