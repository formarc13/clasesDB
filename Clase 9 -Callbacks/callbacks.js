/* 
const TIME_IN_MILISECONDS = 3000

setTimeout(function (){
    console.log('Hola mundo')
}, TIME_IN_MILISECONDS)

setInterval(function (){
    console.log('Hola mundo 2')
}, TIME_IN_MILISECONDS)
 */

let sumar = (a, b) => a + b; 
let restar = (a, b) => a - b; 
let multiplicar = (a, b) => a * b; 
let dividir = (a, b) => a / b; 

let calculadora = (a, b, operacion) => {
    return operacion(a, b)
}

console.log(calculadora(2, 2, multiplicar))
