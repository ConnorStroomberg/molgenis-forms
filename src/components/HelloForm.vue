<template>
  <div class="hello-form">
    <h1>Hello Form</h1>

    <vue-form :state="formstate" @submit.prevent="onSubmit">

        <text-field v-model="model.name" :state="formstate"></text-field>

        <div class="py-2">
          <button class="btn btn-primary" type="submit">Submit</button>
          <span>{{msg}}</span>
        </div>
      </vue-form>
  </div>
</template>

<script>
import VueForm from 'vue-form'
import TextField from './TextField'

export default {
  name: 'HelloForm',
  mixins: [VueForm],
  components: {
    TextField
  },
  data () {
    return {
      msg: 'unsubmitted',
      formstate: {},
      model: {
        name: 'Henk de Bopper'
      }
    }
  },
  methods: {
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
