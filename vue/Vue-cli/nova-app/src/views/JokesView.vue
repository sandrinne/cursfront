<template>
  <div class="about">
    <h1>Chuck's Joke of Cheese <br> </h1>
    <HeaderVue/>
    <section v-if="errored"> 
        <p> 
          Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde 
        </p> 
      </section>
      <section v-else>
        <ul>
            <li v-for="acudit in acudits" :key="acudit.id">
              {{ acudit.value }}
            </li>
        </ul>
      </section>
  </div>
 
</template>

<script>

import axios from 'axios';
import HeaderVue from '@/components/HeaderVue.vue'

export default {
name: 'AboutView',
  components: {
    HeaderVue
  },
data() {
return {
post: null,
acudits:[],
errored: false
};
},
mounted() {
console.log("entra");
axios
.get("https://api.chucknorris.io/jokes/search?query=cheese")
.then((response) => (this.acudits = response.data.result))
.catch((error) => { 
  this.errored = true; 
  if (error.response) { 
  // The request was made and the server responded with a status code // that falls out of the range of 2xx 
console.log("El servidor respon amb missatge d'error:"); 
console.log(error.response.data); 
console.log(error.response.status); 
console.log(error.response.headers); 
} 
else if (error.request) { 
  // The request was made but no response was received console.log("El servidor NO respon"); 
  console.log(error.request); } 
  else { 
  // Something happened in setting up the request that triggered an Error console.log("hi ha algun problema amb la request"); 
  console.log("Error", error.message); 
  } 
  console.log("Hi ha hagut un error en la configuració"); 
  console.log(error.config); 
  })
}}

</script>
