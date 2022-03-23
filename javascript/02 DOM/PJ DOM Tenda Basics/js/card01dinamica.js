let card = document.getElementById ("card1")
console.log(card);

let primeracard = function primeracard () {
    card.querySelector ("img").setAttribute ( "src", "assets/img/shop_01.jpg")

    card.querySelector (".h3").textContent = "Jersey cuello alto"

    card.querySelector ("p").textContent = "50€"

    card.querySelector (".card-body li").textContent = "Partes de arriba"
}

document.addEventListener('DOMContentLoaded', () => {

primeracard ()

})
