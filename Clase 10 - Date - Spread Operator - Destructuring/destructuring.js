let [objeto, string, booleano] = require('./modulo')

//let objeto = moduloArray[0]

console.log(objeto.nombre)


let anios = [1990, 1999, 2005, 2001]

//let anioDeCrisis = anios[3]

//console.log(anioDeCrisis)

let colores = ["Rojo", "Azul", "Verde", "Amarillo"]

let [rojo, azul, ,amarillo] = colores;

/* let rojo = colores[0];
let azul = colores[1];
let verde = colores[2];
let amarillo = colores[3]; */

console.log(amarillo)

/* ----------------------------------------- */

let { nombre: name, hablar, edad } = require('./moduloObjeto')

let mesa = {
    material: "Madera",
    altura: 0.8,
    cantidadDePatas: 4,
    desplegar: () => {
        return "Me despliego"
    }
}
console.log(name)

/* let material = mesa.material;
let altura = mesa.altura;
let cantidadDePatas = mesa.cantidadDePatas;
console.log(material) */


let {material, altura, cantidadDePatas, desplegar} = mesa;

