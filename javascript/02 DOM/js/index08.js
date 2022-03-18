// Exercici 8: Crear un nou link en el menú de Navegació principal
// Amb appendChild crearem una nova opció de navegació en el menú principal -- crear un element i afegir a l'arbre - create element i 
console.log("++++++++++++++++++exercici 8")
console.log ("-------------- Crear un nou link en el menú de Navegació principal// Amb appendChild crearem una nova opció de navegació en el menú principal")
let nuevoH2 = document.createElement("h1")
let nuevoparrafo = document.createElement ("p")

// crear element
noumenu = document.createElement ("a")
//afegir contingut
noumenu.textContent = "text nou"
//on volem que vagi
navegacion1.appendChild(noumenu)
console.log(navegacion1.appendChild(noumenu));


