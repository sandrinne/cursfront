Vue.component('friends', {
    template: `
    <span><h2>{{name}}</h2>
    <button @click="toggleMostrar">Hide Details</button>
    <ul v-if="mostrar">
      <li><strong>Phone:</strong> {{phone}}</li>
      <li><strong>Email:</strong> {{email}}</li></ul></span>
    `,
    data() {
    return {
        mostrar: true,
    }
    },
    props: ["name", "phone", "email"],
    methods: {
        toggleMostrar: function () {
          // alert ("mostrar " + this.mostrar)
          this.mostrar = !this.mostrar
          
        }
      },
    })