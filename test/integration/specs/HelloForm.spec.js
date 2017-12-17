// import Vue from 'vue'
import { mount } from 'vue-test-utils'
import HelloForm from '@/components/HelloForm'

describe('HelloForm.vue', () => {
  const wrapper = mount(HelloForm)

  it('should render correct contents', () => {
    expect(wrapper.html()).toContain('Hello Form')
  })

  it('should update the message on submittion', () => {
    const form = wrapper.find('form')
    form.trigger('submit')
    expect(wrapper.vm.msg).toBe('submitted')
  })
})
