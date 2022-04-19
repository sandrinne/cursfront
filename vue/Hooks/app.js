var vm = new Vue({
    el: '#databinding',
    data() {
    return {
    author: "Manz"
    }
    },
    mounted() {
    console.log("El componente " + this.$options.el + " ha sido montado.");
    let divfondo = this.$refs.fondo;
    console.log(divfondo);
    divfondo.style.backgroundImage="url('https://picsum.photos/400')"
    divfondo.style.backgroundRepeat= 'no-repeat'
    divfondo.style.height='400px'
    divfondo.style.backgroundPosition='center'
    console.log(document.body.background)
    let fondobody = document.body
    fondobody.style.backgroundImage="url('https://picsum.photos/800')"
    fondobody.style.backgroundRepeat= 'no-repeat'
    fondobody.style.height='800px'
    fondobody.style.backgroundSize='cover'
    }

    })
// Excercici 1: Acces al DIV del DOM


