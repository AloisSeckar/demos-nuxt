import {
  faEnvelope, faFaceSmile, faHouse,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// those icons will be available as values of "icon" attributes
library.add(faEnvelope)
library.add(faFaceSmile)
library.add(faHouse)

// "fa" component will be available globally
// usage: <fa icon="..." />
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})
