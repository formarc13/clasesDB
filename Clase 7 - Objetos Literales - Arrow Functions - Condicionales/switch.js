let process = require('process')

let colorSemaforo = "naranja"

if(colorSemaforo.toLowerCase() === "verde"){
    console.log("Avance")
}else if (colorSemaforo.toLowerCase() === "amarillo"){
    console.log("Avance con precaución")
}else if(colorSemaforo.toLowerCase() === "rojo"){
    console.log("Stop")
}else {
    console.log(colorSemaforo + " no es un color del semáforo")
}

switch (colorSemaforo.toLowerCase()) {
    case "verde": 
        console.log("Avance");
        break;
    case "amarillo":
        console.log("Avance con precaución")
        break;
    case "rojo":
        console.log("Stop")
        break;
    default:
        console.log(colorSemaforo + " no es un color del semáforo")
}

let diaDeLaSemana = process.argv[2];

switch (diaDeLaSemana) {
    case "lunes":
    case "miercoles": 
    case "viernes": 
        console.log("Tengo clases");
         break;
    case "martes": 
        console.log("No hago nada hoy")    
        break;
    default: 
     console.log("Que aburrido no hay clases")     
}
