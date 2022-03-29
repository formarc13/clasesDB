let frutas = ["Banana", "Frutilla", "Pera"];
console.log("Array original: " + frutas)

//PUSH 
frutas.push("Manzana")
//console.log(frutas)
//console.log(frutas.length)
const newArray = frutas.push("Pera")
//console.log(newArray)
//console.log(frutas)
frutas.push("Uva", "Naranja")
console.log(frutas)

//POP 
const frutaEliminada = frutas.pop()
console.log(frutaEliminada)
console.log(frutas)

//SHIFT 
frutas.shift()
console.log(frutas)

//UNSHIFT 
frutas.unshift("Kiwi", "Mandarina")
console.log(frutas)

//JOIN
console.log(frutas.join(" - "))

//INDEXOF
console.log(frutas.indexOf('Manzana'))
console.log(frutas.indexOf('Tomate'))
let frutaABuscar = "Pera"

if(frutas.indexOf(frutaABuscar) === -1){
    console.log("No encontramos la fruta " + frutaABuscar)
}else{
    console.log("La fruta que buscabas se encuentra en la posición" + " " +  frutas.indexOf(frutaABuscar))
}

//LASTINDEXOF
if(frutas.lastIndexOf(frutaABuscar) === -1){
    console.log("No encontramos la fruta " + frutaABuscar)
}else{
    console.log("La fruta que buscabas se encuentra en la posición" + " " +  frutas.lastIndexOf(frutaABuscar))
}

//INCLUDES
console.log(frutas.includes("Tomate")) // false
console.log(frutas.includes("Pera")) // true

let users = [ "mail@mail.com", "mail2@mail.com", "mail3@mail.com" ]
let userMail = "mail@mail.com"

if(users.includes(userMail)){
    console.log("Email ya registrado")
}else{
    users.push(userMail)
}

console.log(users)
