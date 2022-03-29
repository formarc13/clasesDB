function sumar (numero1, numero2){
    if(typeof numero1 !== "number" || typeof numero2 !== "number" ) {
        return "Che, me tenés que pasar un número"
    }
    return numero1 + numero2
}


module.exports = sumar