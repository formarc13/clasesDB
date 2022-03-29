let boolean = true;

if(boolean) {
    console.log("Primera expresión")
}else{
    console.log("Segunda expresión")
}

boolean ? console.log("Primera expresión") : console.log("Segunda expresión")

let flecha = (dato) => dato ? "Verdadero" : "Falso"

function anonima (dato) {
    if(dato){
        return "Verdadero"
    }else{
        return "Falso"
    }
}

console.log(flecha(boolean))