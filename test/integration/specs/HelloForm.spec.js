// import Vue from 'vue'
import { mount } from 'vue-test-utils'
import HelloForm from '@/components/HelloForm'

describe('HelloForm.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(HelloForm)
    expect(vm.html()).toContain('Hello Form')
  })
})
