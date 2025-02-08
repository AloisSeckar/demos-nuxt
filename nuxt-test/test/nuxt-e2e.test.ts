import { setup, $fetch, createPage, url } from '@nuxt/test-utils/e2e'
import { describe, expect, test } from 'vitest'

// this example shows how to setup E2E test against the (almost) real instance of your Nuxt app

describe('NuxtTestComponent E2E test', async () => {
  // setup app.vue in headless browser
  await setup()

  test('component renders in browser', async () => {
    // fetch for the rendered value
    const html = await $fetch('/')
    expect(html).toContain('nuxt-spec')
  })

  test('with playwright', async () => {
    // render page in headless browser
    const page = await createPage()
    await page.goto(url('/'), { waitUntil: 'hydration' })
    const hasText = await page.getByText('nuxt-spec').isVisible()
    expect(hasText).toBeTruthy()
  })
})
