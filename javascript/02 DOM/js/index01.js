// Exercici 1: Accedint al document 


// • document
console.log("• ------------------document")
let el1 = document
console.log(el1)
// • body
console.log("• ------------------body")
el1 = document.body
console.log(el1)
// • el links
console.log("• ------------------links")
el1 = document.links
console.log(el1)
// • id del formulari
console.log("• ------------------formulari")
el1 = document.forms[0].id
console.log(el1)
// • el className d’algun dels links
console.log("• ------------------el className d’algun dels links")
el1 = document.links[4].className
console.log(el1)
// • totes les imatges
console.log("• ------------------totes les imatges")
el1 = document.images
console.log(el1)