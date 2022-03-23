//printar tota lacar, segons un template
//aprenentatges:
//Crear un element DOM de manera dinàmica
//concepte template

//Nos traemos los elementos al DOM

let cards = document.getElementById ("cards")
let templateCard = document.getElementById ("template-card").content

//creamos en el DOM el fragmento
let fragment = document.createDocumentFragment()

//afegim l'escoltador d'events

document.addEventListener("DOMContentLoaded",() => {
    //cridem la funció
    llamarTodaslasCards ()
})

//creem la funció

function llamarTodaslasCards() {
    products.forEach(item => {

        templateCard.querySelector ("img").setAttribute ( "src", item.img)

        templateCard.querySelector (".h3").textContent = item.name
    
        templateCard.querySelector ("p").textContent = item.price
    
        templateCard.querySelector (".card-body li").textContent = item.type
        let clone = templateCard.cloneNode(true)
        //para que se muestre hay que clonar
        fragment.appendChild(clone)
        })

        cards.appendChild(fragment)
    
}
