<template>
  <div>
    <h1>special layout</h1>
    <div>This is special layout that has to be set for the page</div>
    <div>It is using double horizontal line to separate the content </div>
    <a href="/">Back to index
    </a>
    <hr><hr>
    <slot />
    <hr><hr>
    <div>Special footer (defined in special layout)</div>
  </div>
</template>
