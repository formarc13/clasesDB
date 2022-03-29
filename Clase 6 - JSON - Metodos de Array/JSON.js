let personas = ["Maria", "Pablo", "Mati", "Jona"]
console.log(typeof personas)

let personasJSON = JSON.stringify(personas)
console.log(typeof personasJSON)

let personasOriginal = JSON.parse(personasJSON)
console.log(personasOriginal)

personasOriginal.push("Ana")

console.log(personasOriginal)