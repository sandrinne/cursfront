// Exercici 3, Event al formulari: input
// a) Afegeix un event perquè ens mostri un alert cada vegada que escrivim una lletra al buscador
let escribirletra = document.querySelector(".busqueda");
console.log(escribirletra)
escribirletra.addEventListener("input", escriure);

function escriure(params) {
    window.alert("estás escribiendo")
}

// b) Afegeix un event perquè ens mostri un alert cada vegada que escrivim la lletra a al buscador
// escribirletra.addEventListener("input", e => {
//     if (e.target.value == "a") {
//         alert("Has escrit a...")
//     }
// })


// c) El mateix que l'exercici 2, però ara fes servir una funció.

escribirletra.addEventListener("input", leerInput)

function leerInput(e) {
    console.log(e)
    if (e.target.value == "a") {
        alert ("Has escrit a...")
    }  
}