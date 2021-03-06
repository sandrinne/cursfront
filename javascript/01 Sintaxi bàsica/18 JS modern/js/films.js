function getAllDirectors() {
  let result = []
  result = movies.map(function director(element) {
    return element.director
  })
  console.table(result)
}

// Ajuda: hauràs d'implementar un map que recorri tot l'array de pel·lícules, extraient només el camp director de cadascuna (no oblidis que cada pel·lícula és un objecte, que conté el camp que ens interessa "director").

function getPelisFromDirector(name) {
//   let result2 = []
//   result2 = movies.filter (function (film) {
//     return film.director === name
//   })
//   console.table(result2)
// }

//con arrow function
let result3 = []
result3 = movies.filter (film => film.director === name)
console.table(result3)
return result3
}

//Ex. 3 funció pelisAverage(), la qual rep un array de pel·lícules i retorna la nota mitjana, amb dos decimals.
// Ajuda: com vols obtenir un únic valor, el mètode .reduce() pot ser d'utilitat.
function pelisAverage(director) {

  // Filtrem totes les pelis del Director seleccionat
const filmsByDirector = movies.filter (film => film.director === director)
console.log("Director: " + director)
console.log(filmsByDirector)

//sumem els scores
const scores = filmsByDirector.reduce((contador, film) => {
  console.log("film: " + film.title + "Score: " + film.score + " Contador: " + contador)
  return contador + film.score
},0)

//dividir els scores entre el numero de pelis per treure la mitjana
const avg = scores / filmsByDirector.length
return avg
}