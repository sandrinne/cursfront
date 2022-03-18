// Exercici 7: Eliminar elements, removeChild
// a) Eliminem el primer Link que troba ... en aquest cas la opció de menú Vender
// b) Accedir a la class="navegacion" y eliminem la opció de menú Registro´. Eliminem a
// partir del pare.
console.log("++++++++++++++++++exercici 7")
console.log ("-------------- a) Eliminem el primer Link que troba ... en aquest cas la opció de menú Vender")
let primerEnlace = document.querySelector("a")
console.log(primerEnlace);
let enlaceborrado = primerEnlace.remove()
console.log ("-------------- b) Accedir a la class navegacion i eliminem la opció de menú Registro´. Eliminem a partir del pare.")
let navegacion1 = document.getElementsByClassName("navegacion")[0]
console.log(navegacion1)
navegacion1.removeChild(navegacion1.children[1])
