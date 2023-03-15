<template>
  <div>
    <h1>Nuxt + Font Awesome</h1>
    <div>
      Here you can see, how to integrate <a href="https://fontawesome.com/" title="Font Awesome">Font Awesome icons</a> into your Nuxt app via simple plugin.
    </div>
    <div>
      <fa class="icon" icon="envelope" title="FA 'envelope' icon" />
      <fa class="icon" icon="face-smile" title="FA 'facesmile' icon" />
      <fa class="icon" icon="house" title="FA 'house' icon" />
    </div>
  </div>
</template>

<style scoped>
.icon {
  margin: 10px;
  height: 50px;
  width: 50px;
}
</style>
