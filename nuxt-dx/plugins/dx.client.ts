// this is required to bypass 'tree shaking' process during production build
// without this custom plugin there is nothing telling build server DevExtreme
// components from node_modules are actually used, so they would be omitted 
// from production packages

// ssr: false is required for this to work

// the list of imports from DevExtreme goes on as the app grows

import { DxButton } from "devextreme-vue/button";

export default defineNuxtPlugin(() => {
  useNuxtApp().vueApp.component("DxButton", DxButton)
});