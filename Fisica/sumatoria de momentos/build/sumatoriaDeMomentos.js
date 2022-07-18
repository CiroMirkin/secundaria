"use strict";
const sumatoriaDeMomentos = (...momentos) => {
    let momentoResultante = 0;
    momentos.forEach(momentoConUnidad => {
        const momento = Number(momentoConUnidad.replace('NM', ''));
        momentoResultante += momento;
    });
    return momentoResultante + 'NM';
};
module.exports = sumatoriaDeMomentos;
