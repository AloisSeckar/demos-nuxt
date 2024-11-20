// https://formkit.com/guides/optimizing-for-production#using-the-nuxt-module
import '@formkit/themes/genesis'
import { en, de, cs } from '@formkit/i18n'
import type { DefaultConfigOptions } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'

const config: DefaultConfigOptions = {
  // example of importing different message translations and set the default one
  locales: { en, de, cs },
  locale: 'en',
  // to fix SSR issue - https://github.com/formkit/formkit/issues/539
  icons: { ...genesisIcons },
}

export default config
