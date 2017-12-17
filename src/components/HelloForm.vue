<template>
  <div class="hello-form">
    <h1>Hello Form</h1>

    <vue-form :state="formstate" @submit.prevent="onSubmit">

        <validate auto-label class="form-group required-field"
          :class="fieldClassName(formstate.name)">

          <label>Name</label>
          <input type="text" class="form-control" v-model="model.name"
            required name="name" />

          <field-messages name="name" class="form-control-feedback">
            <div slot="required" class="form-text text-muted">
              Name is a required field
            </div>
          </field-messages>
        </validate>

        <validate auto-label class="form-group required-field"
          :class="fieldClassName(formstate.age)">

          <label>Age</label>
          <input type="text" class="form-control" v-model="model.age"
            required name="age" />

          <field-messages name="age" class="form-control-feedback">
            <div slot="required" class="form-text text-muted">
              Age is a required field
            </div>
          </field-messages>
        </validate>

        <div class="py-2">
          <button class="btn btn-primary" type="submit">Submit</button>
          <span>{{msg}}</span>
        </div>
      </vue-form>
  </div>
</template>

<script>
import VueForm from 'vue-form'

export default {
  name: 'HelloForm',
  mixins: [VueForm],
  data () {
    return {
      msg: 'unsubmitted',
      formstate: {},
      model: {
        name: 'Henk de Bopper',
        age: ''
      }
    }
  },
  methods: {
    fieldClassName: function (field) {
      if (!field) {
        return ''
      }
      if ((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success'
      }
      if ((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger'
      }
    },
    onSubmit: function () {
      this.msg = 'submitted'
      console.log(this.formstate)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
</style>
