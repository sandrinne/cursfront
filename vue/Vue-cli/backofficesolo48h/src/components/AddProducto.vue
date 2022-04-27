<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="titulo">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="titulo"
          required
          v-model="producto.titulo"
          name="titulo"
        />
      </div>
      <div class="form-group">
        <label for="descripcion">Descripcion</label>
        <input
          class="form-control"
          id="descripcion"
          required
          v-model="producto.descripcion"
          name="descripcion"
        />
      </div>
      <button @click="saveproducto" class="btn btn-success">Enviar</button>
    </div>
    <div v-else>
      <h4>¡Los has subido correctamente!</h4>
      <button class="btn btn-success" @click="newproducto">Add</button>
    </div>
  </div>
</template>
<script>
import productoDataService from "../services/ProductoDataService";
export default {
  name: "add-producto",
  data() {
    return {
      producto: {
        id: null,
        titulo: "",
        descripcion: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveproducto() {
      var data = {
        titulo: this.producto.titulo,
        descripcion: this.producto.descripcion
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