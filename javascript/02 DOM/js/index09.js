console.log("++++++++++++++++++exercici 9")
console.log ("-------------- Crear una Nova card")
// let nuevoH2 = document.createElement("h1")
// let nuevoparrafo = document.createElement ("p")

// // crear element
// noumenu = document.createElement ("a")
// //afegir contingut
// noumenu.textContent = "text nou"
// //on volem que vagi
// navegacion1.appendChild(noumenu)
// console.log(navegacion1.appendChild(noumenu));


// let crearemos elementos
let novacard = document.createElement ("div")
novacard.className = "card"
console.log(novacard);
let novaimatge = document.createElement ("img")
novaimatge.src = "img/hacer2.jpg"
console.log(novaimatge)
let novainfo = document.createElement ("div")
novainfo.className = "info"
console.log(novainfo)
let novacategoria = document.createElement ("p")
novacategoria.className = "categoria concerto"
console.log(novacategoria)
let noutitol = document.createElement ("p")
noutitol.className = "titulo"
console.log(noutitol)
let noupreu = document.createElement ("p")
noupreu.className = "precio"
console.log(noupreu)

//afegim contingut
novacategoria.textContent = "concierto"
noutitol.textContent = "Concierto de Rock"
noupreu.textContent = "$800 por persona"

// donde queremos que vaya. Hijos.
novacard.appendChild(novaimatge)
novacard.appendChild(novainfo)
novainfo.appendChild(novacategoria)
novainfo.appendChild(noutitol)
novainfo.appendChild(noupreu)

let padre = document.querySelector(".contenedor-cards")
padre.appendChild(novacard)



