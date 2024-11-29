import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../../playground-vue/src/App.vue'

describe('button', () => {
  it('alert render', () => {
    const wrapper = mount(Button)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
