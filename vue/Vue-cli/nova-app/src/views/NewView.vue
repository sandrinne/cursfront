<template>

  <div class="home">
    <NewComponent/>
    </div>  
  
</template>

<script>
// @ is an alias to /src
import NewComponent from '@/components/NewComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NewComponent
  }
}
</script>
