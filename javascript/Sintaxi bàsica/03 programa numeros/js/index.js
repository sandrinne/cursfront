//3. Implementa un programa que comprovi que les dades introduïdes són números.
// també es pot assignar un valor des de la pantalla 
var requiredNum = prompt("Introdueix un número: ");
parseInt(requiredNum);
console.log(requiredNum);
if (isNaN(requiredNum)) {
    window.alert ("\"" + requiredNum + "" is a Number."")
}
else {
    window.alert ("\"" + requiredNum + "" is not a Number."")
}
//aquí un condicional para validar si es número