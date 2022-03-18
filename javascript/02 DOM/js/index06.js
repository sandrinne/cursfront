// Exercici 6: textContent
// Modificarem el següent text
console.log("++++++++++++++++++exercici 6")
console.log ("-------------- Mostrem el següent text H1")
// let el6 = document.getElementsByTagName("h1")
// console.log(el6)
// console.log ("-------------- Modifiquem el següent text H1")
// el6 = document.getElementsByTagName("h1")
// console.log(el6)
// el6.textContent = "Hola"
let nuevoH1 = document.createElement('H1')
nuevoH1.textContent = "Encuentra alojamiento para tus próximas vacaciones"
console.log(nuevoH1)

document.querySelector(".contenido-hero h1").textContent = "Encuentra un alojamiento"