<!-- 
  v2 legacy notes 
  ---------------
  - <ContentDoc /> component was dropped in v3 and replaced with <ContentRenderer />
  - while <ContentDoc /> works out-of-the-box in v2, <ContentRenderer /> require to be supplied
    with "value" prop containing content data obtained from queryCollection() util function
  - check v3 demo (https://github.com/AloisSeckar/demos-nuxt/tree/main/nuxt-content3) to see it in action
-->

<template>
  <div>
    <h1>nuxt-content</h1>
    <div>
      The following page content is rendered with help of
      <a href="https://content.nuxtjs.org/">Nuxt Content</a> module:
    </div>
    <hr>
    <div>
      <ContentDoc />
    </div>
    <hr>
    <div>
      All you need to do to start benefit from this is to
      <a href="https://content.nuxtjs.org/get-started#add-to-a-project">include the module</a>,
      add <pre>&lt;ContentDoc /&gt;</pre> component into template
      and provide corresponding sources into <strong>/content</strong> directory.
    </div>
  </div>
</template>
