// Exercici 4: QuerySelector
// Mostra per consola:
// • La primera .card
// • L’element de la classe info del contenidor premium
// • La segona card de hospedaje
// • El formulari per id
// • El primer menú de navegació <nav>
console.log("++++++++++++++++++exercici 4")
console.log ("-------------- La primera .card")
let el4 = document.querySelector(".card")
console.log(el4)
console.log ("-------------- L’element de la classe info del contenidor premium")
el4 = document.querySelector(".premium > .info")
console.log(el4)
console.log ("-------------- La segona card de hospedaje")
el4 = document.querySelectorAll(".hospedaje .card")[1]
console.log(el4)
// • El formulari per id
console.log ("-------------- El formulari per id")
el4 = document.querySelector("#formulario")
console.log(el4)
// • El primer menú de navegació <nav>
console.log ("-------------- El primer menú de navegació <nav>")
el4 = document.querySelector("nav")
console.log(el4)