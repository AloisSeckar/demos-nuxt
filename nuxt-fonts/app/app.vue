<template>
  <div>
    <h1>nuxt-fonts</h1>
    <div>
      Incorporating fonts easily with an official <a href="https://fonts.nuxt.com/">Nuxt Fonts</a> module
    </div>
    <h2>Fonts gallery</h2>
    <div class="fonts">
      <div class="font1">
        This font is called
        <a href="https://fonts.google.com/specimen/Montserrat"><strong>Montserrat</strong></a>
      </div>
      <div class="font2">
        This font is called
        <a href="https://fonts.google.com/specimen/Freeman"><strong>Freeman</strong></a>
      </div>
      <div class="font3">
        This font is called
        <a href="https://fonts.google.com/specimen/Pacifico"><strong>Pacifico</strong></a>
      </div>
      <div class="font4">
        This font is called
        <a href="https://fonts.google.com/specimen/Public+Sans"><strong>Public Sans</strong></a> (only italic is downloaded)
      </div>
    </div>
  </div>
  <div>
    Check <pre style="display: inline-block; font-weight: bold;">nuxt.config.ts</pre> to see how to set things up
  </div>
</template>

<style>
.fonts {
  font-size: 30px;
}
.font1 {
  font-family: "Montserrat";
}
.font2 {
  font-family: "Freeman";
}
.font3 {
  font-family: "Pacifico";
}

/* is italic out-of-the-box thanks to configuration */
.font4 {
  font-family: "Public Sans";
}
</style>
