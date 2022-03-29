let clubesUno = ["Sacachispas", "Atlas", "Atlanta"];
let clubesDos = ["All Boys", "Villa Dalmine", "Nueva Chicago"];
let todosLosClubes = [...clubesUno, "Brown", ...clubesDos]

let otrosClubes = ["Barcelona", "Madrid", "Juventus", ...todosLosClubes];
//console.log(otrosClubes)

let mesaDeMadera = {
    material: "Madera",
    altura: 0.8,
}

let mesaDeMaderaDos = {
    ...mesaDeMadera,
    altura: 0.9,
    cantidadDePatas: 4
}

console.log(mesaDeMaderaDos)

let notas = [9.3, 2.5, 7.8, 5.5, 10]
console.log(...notas)
console.log(Math.max(...notas))

function miFuncion (p1, p2, ...otros){
    return otros
}

console.log(miFuncion("Hola", " Como estas?", "Otro", 2, true))

function sumar(...numeros){
    return numeros.reduce((acum, num) => acum + num)
}

console.log(sumar(2, 10, 50, 50, 12896, 156186416))

