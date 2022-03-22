
function addToCart(id) {
   alert("add to cart")
}


function removeFromCart(id) {
    alert("remove to cart")
}

let card1 = document.getElementById ("card1")
let cardId1 = card1.getAttribute ("data-id")

card1.addEventListener ("click", e => {

    if (e.target.classList.contains ("cardAdd")) {

        alert ("afegim " + cardId1)
        addToCart (cardId1)
    }
if (e.target.classList.contains ("cardRemove")) {
    removeFromCart ("esborrat " + cardId1)
}
})

let card2 = document.getElementById ("card2")
let cardId2 = card2.getAttribute ("data-id")


card2.addEventListener ("click", e => {
    console.log(e.target.className);

    if (e.target.className == "btn btn-success text-white mt-2 cardAdd") {
        

        alert ("afegim " + cardId2)
        addToCart (cardId2)
    }
if (e.target.classList.classList == "btn btn-success text-white mt-2 cardRemove") {
    removeFromCart ("esborrat " + cardId2)
}
})
