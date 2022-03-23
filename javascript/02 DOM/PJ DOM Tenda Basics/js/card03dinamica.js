document.addEventListener('DOMContentLoaded', () => {

    todaslascardsdinamicas ()
    
    })

    function todaslascardsdinamicas() {
        products.forEach(item => {
            let card = document.getElementById("card" + item.id)
            card.querySelector ("img").setAttribute ( "src", item.img)

            card.querySelector (".h3").textContent = item.name
        
            card.querySelector ("p").textContent = item.price
        
            card.querySelector (".card-body li").textContent = item.type
            })  
    }