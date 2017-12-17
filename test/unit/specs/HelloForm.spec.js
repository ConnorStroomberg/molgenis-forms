import Vue from 'vue'
import HelloForm from '@/components/HelloForm'

describe('HelloForm.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloForm)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello-form h1').textContent)
    .to.equal('Hello Form')
  })
})
