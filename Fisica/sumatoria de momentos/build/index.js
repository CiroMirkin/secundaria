"use strict";
const obtenerMomento = require('./calcularMomento');
const sumarMomentos = require('./sumatoriaDeMomentos');
const M1 = obtenerMomento({
    fuerza: 20,
    distancia: 5
});
const M2 = obtenerMomento({
    fuerza: 20,
    distancia: 10,
    angulo: 37
});
const M3 = obtenerMomento({
    fuerza: -40,
    distancia: 15
});
const MR = sumarMomentos(M1, M2, M3);
console.log('MR = M1 + M2 + M3');
console.log(`${MR} = ${M1} + ${M2} + ${M3}`);
