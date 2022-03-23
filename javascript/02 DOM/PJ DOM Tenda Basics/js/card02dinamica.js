document.addEventListener('DOMContentLoaded', () => {

    todaslascards ()
    
    })

    function todaslascards () {
        for (let index = 1; index < 10; index++) {
            let card = document.getElementById("card" +index)

            card.querySelector ("img").setAttribute ( "src", "assets/img/shop_01.jpg")

            card.querySelector (".h3").textContent = "Jersey cuello alto"
        
            card.querySelector ("p").textContent = "50€"
        
            card.querySelector (".card-body li").textContent = "Partes de arriba"
        }
    }

    