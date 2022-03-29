const concesionarias = require('./concesionarias');
const fs = require('fs');
const compradores = JSON.parse(fs.readFileSync('./data/compradores.json', 'utf-8'))

//console.log(concesionarias.autos)
//console.log(concesionarias.buscarAuto("APL123"));
//console.log(concesionarias.venderAuto("APL123"));
//console.log(concesionarias.autosParaLaVenta());
//console.log(concesionarias.autosNuevos())
//console.log(concesionarias.listaDeVentas())
//console.log(concesionarias.totalDeVentas())
let autos = concesionarias.autos
let persona = compradores[0]
//console.log(concesionarias.puedeComprar(autos[1], persona))
console.log(concesionarias.autosQuePuedeComprar(persona))