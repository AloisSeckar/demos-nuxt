// this file should exist to avoid startup warning
// https://content.nuxt.com/docs/getting-started/installation#create-your-first-collection

import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
  },
})
