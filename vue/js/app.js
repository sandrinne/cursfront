let nombre = window.prompt ("Escribe tu nombre ")
console.log ("hola " + nombre)

//creamos instancia de Vue
const app = new Vue({
  el: "#app",
  template: "#ejemplo",
  data: { 
      mensaje: "Hola, " + nombre, 
      mensajeHTML: "<b>Mensaje de ejemplo </b><br>",
      imagen: "img/arcoiris-curvo_0.jpg",
      url: "https://ecometas.com/",
      number: 10,
      ok: true
    },
});

    // Creating Vue Instance
    var vm = new Vue({
      // Assigning id of DOM in parameter
      el: '#home',
      // Assigning values of parameter
      data: {
          title: "Geeks for Geeks",
          name: "Vue.js",
          topic: "Instances"
      },

      // Creating methods
      methods: {

          // Creating function
          show: function () {
              return "Welcome to this tutorial on " +
                  this.name + " - " + this.topic;
          },
          showName: function (nombre) {
              return this.title + " " + nombre
          }
      }
  });



