// 4. Fes un programa que demani dos números a l’usuari i informi per pantalla de quin és el menor i el major, o si són iguals.
let a=prompt("Introdueix un número");
let b=prompt("Introdueix un altre número");
if (a > b) {
    window.alert(a + " és el número més gran");
}
if (a < b) {
    window.alert(b + " és el número més gran");
}
if (a==b) {
    document.write("Els dos números són iguals")
}
