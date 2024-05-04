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
    viewBox="0 0 24 24"
  >
    <path
      fill="rgba(100,200,50,1)"
      d="M5 20v-8H2l10-9l4 3.6V4h3v5.3l3 2.7h-3v8h-5v-6h-4v6Zm5-9.975h4q0-.8-.6-1.313Q12.8 8.2 12 8.2q-.8 0-1.4.512q-.6.513-.6 1.313Z"
    />
  </svg>
</template>

<!--
This part comes from "VueTS" export on Icônes site
But since this is Nuxt and not plain Vue.js, no exporting and registering components elsewhere is needed
Contents from '/components' folder gets auto-imported application wide

<script lang="ts">
export default {
  name: 'MaterialSymbolsHouse'
}
</script>
-->
