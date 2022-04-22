<template>
  <div class="about">
    <h1>Chuck's Joke of the day <br> </h1>
    <p>{{acudit}}</p>
  </div>
 
</template>

<script>

import axios from "axios";

export default {
name: 'AboutView',
data() {
return {
post: null,
acudit:""
};
},
mounted() {
console.log("entra");
axios
.get("https://api.chucknorris.io/jokes/random")
.then((response) => (this.acudit = response.data.value));
},
}

</script>
