const fs = require('fs');
const autosDB = JSON.parse(fs.readFileSync('./data/autos.json', 'utf-8'));
const escribirJson = (data) => fs.writeFileSync('./data/autos.json', JSON.stringify(data), 'utf-8');

const concesionarias = {
    autos: autosDB,
    buscarAuto: function (patente) {
        return this.autos.find(auto => auto.patente == patente) ?? null;
    },
    venderAuto: function (patente) {
        let autoEncontrado = this.buscarAuto(patente);
        if(autoEncontrado) {
            autoEncontrado.vendido = true;
        }
        escribirJson(this.autos)
        return "Hemos vendido el auto patente " + autoEncontrado.patente 
    },
    autosParaLaVenta: function () {
        return this.autos.filter((auto) => !auto.vendido)
    },
    autosNuevos: function () {
       return this.autosParaLaVenta().filter((auto) => auto.km < 100)
    },
    listaDeVentas: function () {
        let autosVendidos = this.autos.filter((auto) => auto.vendido);
        return autosVendidos.map(auto => auto.precio)
    },
    totalDeVentas: function () {
        return this.listaDeVentas().length > 0 ?
        this.listaDeVentas().reduce((acum, num) => acum + num) 
        : 0
    },
    puedeComprar: function(auto,persona){
       return auto.precio <= persona.capacidadDePagoTotal && auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas 
    },
    autosQuePuedeComprar: function (persona) {
        let autosDisponibles = this.autosParaLaVenta(); // Obtengo los autos disponibles
        let autosQuePuedeComprar = []; // creo una lista vacia
        autosDisponibles.forEach((auto) => { // itero o recorro el coleccion de autos disponibles
            if(this.puedeComprar(auto, persona)){ // en cada iteración evalúo si la persona puede comprar el auto
                autosQuePuedeComprar.push(auto) // si la persona puede comprar, guardo el auto en la lista
            }// si no puede comprar, no hace nada
        })
        return autosQuePuedeComprar; // retorno la lista de los autos que puede comprar (si los hay), caso contrario devuelve un array vacío
    }
};


module.exports = concesionarias