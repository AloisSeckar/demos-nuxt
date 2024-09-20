<template>
  <div class="card">
    <h1>nuxt-openprops</h1>
    <div>
      Using <a href="https://open-props.style/">Open Props</a> in <a href="https://nuxt.com/">Nuxt</a>
    </div>
  </div>
</template>

<style>
/* importing Open Props style variables */
@import 'open-props/normalize';
@import 'open-props/buttons';

html {
  /* https://open-props.style/#gradients */
  background: var(--gradient-18);
}

body {
  display: grid;
  place-content: center;
}

.card {
  padding: 20px 40px;
  border-radius: 10px;

  /* https://open-props.style/#colors */
  background-color: var(--teal-6);
  /*  https://open-props.style/#shadows */
  box-shadow: var(--shadow-3);

  &:hover {
    box-shadow: var(--shadow-5);
  }
}

a {
  color: var(--sand-12);
}

a:hover {
  color: var(--yellow-2);
}
</style>
