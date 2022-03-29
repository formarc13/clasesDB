var nombre = "Darío"; // Global
let edad; // Global
const apellido = "Perez"; // Alcance global

// Comentario en línea

/*
Bloque de 
comentario
de varias
líneas
 */

console.log(nombre)
console.log("¡Hola mundo!")
console.log(edad)

nombre = "Martin";

console.log(nombre)

edad = 19;

console.log(edad)

var nombre = "Luis"

console.log(nombre)


if(true){ 
    let userName = "Mati"; // Scope local
    //console.log(userName)
 }

//console.log(userName) // Scope global

if(true) {
    var fruta = "Manzana"; // Scope local
}

console.log(fruta)

apellido = "Gomez"
