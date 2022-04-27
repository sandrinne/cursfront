<template>
  <div v-if="currentProducto" class="edit-form">
    <h4>Producto</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentProducto.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentProducto.description"
        />
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentProducto.published ? "Published" : "Pending" }}
      </div>
    </form>
    <button class="badge badge-primary mr-2"
      v-if="currentProducto.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>
    <button class="badge badge-danger mr-2"
      @click="deleteProducto"
    >
      Delete
    </button>
    <button type="submit" class="badge badge-success"
      @click="updateProducto"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Producto...</p>
  </div>
</template>
<script>
import ProductoDataService from "../services/ProductoDataService";
export default {
  name: "ProductoUnico",
  data() {
    return {
      currentProducto: null,
      message: ''
    };
  },
  methods: {
    getProducto(id) {
      ProductoDataService.get(id)
        .then(response => {
          this.currentProducto = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        id: this.currentProducto.id,
        title: this.currentProducto.title,
        description: this.currentProducto.description,
        published: status
      };
      ProductoDataService.update(this.currentProducto.id, data)
        .then(response => {
          this.currentProducto.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateProducto() {
      ProductoDataService.update(this.currentProducto.id, this.currentProducto)
        .then(response => {
          console.log(response.data);
          this.message = 'The Producto was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteProducto() {
      ProductoDataService.delete(this.currentProducto.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Productos" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getProducto(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>