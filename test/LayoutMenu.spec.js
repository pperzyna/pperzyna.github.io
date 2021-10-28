import { mount } from '@vue/test-utils'
import LayoutMenu from '@/components/layout/menu.vue'

describe('LayoutMenu', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LayoutMenu)
    expect(wrapper.vm).toBeTruthy()
  })
})
