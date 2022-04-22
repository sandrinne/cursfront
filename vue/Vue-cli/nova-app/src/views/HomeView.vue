<template>
  <div class="home">
    <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  <div class="home">
    <NewComponent/>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NewComponent from '@/components/NewComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NewComponent
  }
}
</script>
