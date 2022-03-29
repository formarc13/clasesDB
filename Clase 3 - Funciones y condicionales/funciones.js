/* Funciones
Estructura
*/

// FUNCIÓN DECLARADA
function triple (numero) {
    return numero * 3;
}

//FUNCIÓN EXPRESADA
let doble = function (valor) {
    let resultado = valor * 2;
    return resultado;
}

function sumar (numero1, numero2) {
    return numero1 + numero2;
}


//console.log(triple(10))
//console.log(triple(5222))
//console.log(triple(6))
//doble()
let number = 25

console.log(doble(number))
console.log(sumar(150, 2))

let hacerSushi = function (cantidad) {
    return "Sushi\n".repeat(cantidad)
}

//console.log(hacerSushi(5))

function saludar(nombre = "Cosme", apellido = "Fulanito"){
    return "Hola" + " " + nombre + " " + apellido
}

let userName = "Americo"
let userLastName = "Ortega"

console.log(saludar("Franco", "Choque"))
console.log(saludar(userName, userLastName))