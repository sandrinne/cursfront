<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="producto.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="producto.description"
          name="description"
        />
      </div>
      <button @click="saveproducto" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newproducto">Add</button>
    </div>
  </div>
</template>
<script>
import productoDataService from "../services/productoDataService";
export default {
  name: "add-producto",
  data() {
    return {
      producto: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveproducto() {
      var data = {
        title: this.producto.title,
        description: this.producto.description
      };
      productoDataService.create(data)
        .then(response => {
          this.producto.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newproducto() {
      this.submitted = false;
      this.producto = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>