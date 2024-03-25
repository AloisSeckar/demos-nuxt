import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFaceSmile, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope)
library.add(faFaceSmile)
library.add(faHouse)

export default defineNuxtPlugin(() => {
  useNuxtApp().vueApp.component('fa', FontAwesomeIcon)
})
