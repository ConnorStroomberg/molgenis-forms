<template>
  <validate auto-label class="form-group required-field"
    :class="fieldClassName(state.name)">

    <label>Name</label>
    <input type="text" class="form-control" v-model="localValue"
      required name="name" />

    <field-messages name="name" class="form-control-feedback">
      <div slot="required" class="form-text text-muted">
        Name is a required field
      </div>
    </field-messages>
  </validate>
</template>

<script>
import VueForm from 'vue-form'

export default {
  name: 'TextField',
  mixins: [VueForm],
  props: ['value', 'state'],
  data () {
    return {
      // Store a local value to prevent changing the parent state
      localValue: this.value
    }
  },
  watch: {
    localValue (value) {
      // Emit value changes to the parent (form)
      this.$emit('input', value)
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
    }
  }
}
</script>
