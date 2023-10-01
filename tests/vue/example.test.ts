import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '~/vue/src/App.vue'

describe('button', () => {
  it('alert render', () => {
    const wrapper = mount(Button)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
