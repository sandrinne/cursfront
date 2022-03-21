// Exercici 5: delegation
// Com hem vist, la següent variable recull información de la primera card
// const cardDiv = document.querySelector('.card');

//Primer pas: cridem l'element des del DOM i fem console log per verificar que es crida correctament.

const cardDiv = document.querySelector(".card");
console.log(cardDiv);

//Segon pas: Afegim l'escoltador d'esdeveniments, per executar una acció a l'element del DOM que hem cridat.


cardDiv.addEventListener("click", (event) => {
    
    // Tercer pas, organitzem els esdeveniments per delegació (amb event.target.className)
  
  let elemento = event.target.className;
  switch (elemento) {
    case "categoria concierto":
      console.log("categoria concierto");
      event.stopPropagation();
      break;

      case "titulo":
        console.log("titulo");
        event.stopPropagation();
        break;

        case "precio":
            console.log("precio");
            event.stopPropagation();
            break;

  }
});
