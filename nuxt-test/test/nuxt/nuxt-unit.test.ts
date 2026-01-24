import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { NuxtTestComponent } from '#components'

// this example shows how to test single components

// mockNuxtImport - macro for mimicking external functionality for unit tests

const text = 'custom-text'

describe('NuxtTestComponent', () => {
  test('component mounts and renders text properly', () => {
    const wrapper = mount(NuxtTestComponent, {
      propsData: {
        text,
      },
    })
    expect(wrapper.text()).toContain(text)
  })
})

describe('NuxtTestComponentSuspended', () => {
  test('component mounts using mountSuspended and renders text properly', async () => {
    const component = await mountSuspended(NuxtTestComponent, {
      props: {
        text,
      },
    })
    expect(component.html()).toContain(text)
  })
})
