// Exercici 2, mouseenter, mouseout
// a) Al entrar al menú de navegació, canviarem el seu estil de backgroundColor= White
let nuevanav = document.querySelector(".navegacion");
console.log(nuevanav);
nuevanav.addEventListener("mouseenter", canviarcolor);
nuevanav.addEventListener("mouseout", transparent);



function canviarcolor() {
  nuevanav.style.backgroundColor = "white";
}
// b) Al sortir del menú de navegació, tornarem a deixar l'estil inicial (backgroundColor=
// transparent )
function transparent() {
    nuevanav.style.backgroundColor = "transparent";
  }