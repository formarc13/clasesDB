let mesa = {
    cantidadDePatas: 4,
    forma: "Cuadrada",
    material: "Madera",
    altura: 0.75,
    desplegar: function () {
        return "Soy una mesa deplegable"
    },
}

console.log(mesa.cantidadDePatas);
mesa.cantidadDePatas = 3;
console.log(mesa.cantidadDePatas);
mesa.superficie = 25;
console.log(mesa);
console.log(mesa.desplegar())

let personaje = {
    tipo: "Soldado",
    vida: 100,
    atacar: function () {
        return "Veni que te mato"
    },
    mover: function (direccion) {
        return "Me movi hacia " + direccion
    },
}

console.log(personaje.mover("Adelante"))

// FUNCION CONSTRUCTORA

function Mesa(patas, forma, material, altura){
    this.cantidadDePatas = patas;
    this.forma = forma;
    this.material = material;
    this.altura = altura;
    this.desplegar = function () {
        return "Soy una mesa deplegable"
    }
}

//Instanciar un objeto (MESA)
let mesaDeDosPatas = new Mesa(2, "Rectangular", "Metal y vidrio", 80);

console.log(mesaDeDosPatas)

let mesaDeMadera = new Mesa(4, "Redonda", "Madera", 75);
mesaDeMadera.otroDato = function(){return "Otro dato"}

console.log(mesaDeMadera)

function Soldado (name, attack) {
    this.name = name;
    this.attack = attack;
    this.atacar = function () {
        return "El valor del ataque es " + this.attack     
    }
}

let arquero = new Soldado("Légolas", 20)

console.log(arquero.atacar())