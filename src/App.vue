<template>
  <div id="app" class="container">
    <div class="row justify-content-md-center">
       <div class="col-md-auto">
         <img src="./assets/logo.png">
         <HelloForm/>
       </div>
     </div>
  </div>
</template>

<script>
import HelloForm from './components/HelloForm'

export default {
  name: 'app',
  components: {
    HelloForm
  }
}
</script>
