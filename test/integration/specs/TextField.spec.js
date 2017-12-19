// import Vue from 'vue'
import { mount } from 'vue-test-utils'
import TextField from '@/components/TextField'

describe('TextField.vue', () => {
  const wrapper = mount(TextField, {
    mocks: {
      vueForm: {name: {}},
      fieldstate: {_className: ['foo']}
    },
    propsData: {value: 'bop bop bop',
      state: {
        '$dirty': false,
        '$pristine': true,
        '$valid': false,
        '$invalid': true,
        '$submitted': false,
        '$touched': false,
        '$untouched': true,
        '$focused': false,
        '$pending': false,
        '$error': {
          // fields with errors are copied into this object
        },
        '$submittedState': {
          // each form sumbit, state is cloned into this object
        },
        'name': {
          '$name': 'name',
          '$dirty': false,
          '$pristine': true,
          '$valid': false,
          '$invalid': true,
          '$touched': false,
          '$untouched': true,
          '$focused': false,
          '$pending': false,
          '$error': {
            'required': true
          }
        }
      }
    }})

  it('should render correct contents', () => {
    expect(wrapper.html()).toContain('Name')
  })

  it('should invalidate when the field is cleared', () => {
    const input = wrapper.find('input')
    input.value = '' // clear field value
    input.trigger('input') // trigger change
    expect(wrapper.vm.state.$invalid).toBe(true)
  })
})
