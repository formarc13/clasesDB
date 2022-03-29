let materias = [
    {
        nombre: "Sociales",
        estado: "Aprobado"
    },
    {
        nombre: "Naturales",
        estado: "Aprobado"
    },{
        nombre: "Matemáticas",
        estado: "Desaprobado"
    },{
        nombre: "Inglés",
        estado: "Aprobado"
    },{
        nombre: "Lengua",
        estado: "Desaprobado"
    },
]

/* for(let i = 0; i < materias.length ; i++){
    console.log(materias[i].nombre)
} */

//FOREACH
let materiasDesaprobadas = []

materias.forEach((materia, index) => {
    if(materia.estado == "Desaprobado"){
        console.log(index)
        materiasDesaprobadas.push(materia)
    }
})

//console.log(materiasDesaprobadas)

//FILTER 
let materiasAprobadas = materias.filter((materia) => materia.estado == "Aprobado")

//console.log(materiasAprobadas)

//MAP 
let numbers = [2, 3, 4, 5]

let doubles = numbers.map((number) => {
    return number * 2
})

//console.log(doubles)

/* let materias2 = materias.map((materia) => {
    return {
        nombre: materia.nombre,
        estado: "Aprobado"
    }
})

console.log(materias2) */
/* let materias2 = materias.map((materia) => {
    return materia.estado = "Aprobado"
})

console.log(materias2) */
/* let materias2 = materias.map((materia) => {
    if(materia.estado == "Desaprobado"){
    return materia.estado = "Aprobado";
    }
});
console.log(materias2); */

/* let todosaprobados = materias.map((materias)=>{
    return materias.estado="AProbado",
    console.log(materias)
})

console.log(todosaprobados) */

/* console.log("******* DESAFIO ******")
let materias2 = materias.map(materia => {
    if(materia.estado == "Desaprobado"){
        materia.estado = "Aprobado";
            return materia;
        } else {
            return materia;
        }
}) 
 console.log(materias2); */

 let materias2 = materias.map((materia) => {
    return {
        nombre: materia.nombre,
        estado: "Aprobado"
    }
})

console.log(materias2)

//REDUCE 
let ventasDeLaSemana = [100, 150, 125, 180, 200, 250, 189]

let total = ventasDeLaSemana.reduce((acum, num)=>{
    return acum + num
})

// 0 + 100 = 100
// 100 + 150 = 250
// 250 + 125 = 375
console.log(total)

//FIND
let encontradorDeMaterias = materias.find((materia) => materia.nombre == "Lengua")
console.log(encontradorDeMaterias)

//FLATMAP
let arrayDeNumeros = [2, 3, 4, [5, 6, 7]]
let flatMap = arrayDeNumeros.flatMap((number) => number)

console.log(arrayDeNumeros)
console.log(flatMap)







