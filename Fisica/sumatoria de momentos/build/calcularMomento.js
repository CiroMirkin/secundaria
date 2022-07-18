"use strict";
const calcularMomento = ({ fuerza, distancia, angulo }) => {
    if (angulo === undefined)
        return fuerza * distancia + 'NM';
    return Math.trunc((fuerza * distancia) * Math.sin(angulo)) + 'NM';
};
module.exports = calcularMomento;
