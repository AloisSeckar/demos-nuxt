import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faFaceSmile, faHouse } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope)
library.add(faFaceSmile)
library.add(faHouse)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})
