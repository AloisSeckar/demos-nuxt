<!--
  https://github.com/antfu/icones

  Icônes - super-easy way of importing graphic components with no additional depenencies

  - change 'width' and 'height' for displayed dimensions
    - any valid unit definition is possible (see https://www.w3schools.com/cssref/css_units.php)
    - note: in current setup icon scales according to higher of the two values and the other one can be omitted
  - change 'fill' to change color
    - 'currentColor' stands for currenty applied css color
    - any other valid color definiton is possible (see https://www.w3schools.com/cssref/css_colors_legal.php)
  - replace 'd' with another SVG definition for another icon
    - refer to https://icones.js.org/ for TONS of free and ready-to-use icons
-->

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2l7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383l-4.708 2.825L15 11.105V5.383Zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795l-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
    />
  </svg>
</template>

<!--
This part comes from "VueTS" export on Icônes site
But since this is Nuxt and not plain Vue.js, no exporting and registering components elsewhere is needed
Contents from '/components' folder gets auto-imported application wide

<script lang="ts">
export default {
  name: 'BiEnvelope'
}
</script>
-->
