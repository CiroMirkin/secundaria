const obtenerMomento = require('./calcularMomento')
const sumarMomentos = require('./sumatoriaDeMomentos')

const M1: string = obtenerMomento({
    fuerza: 20,
    distancia: 5
})

const M2: string = obtenerMomento({
    fuerza: 20,
    distancia: 10,
    angulo: 37
})

const M3: string = obtenerMomento({
    fuerza: -40,
    distancia: 15
})

const MR: string = sumarMomentos(M1, M2, M3)

console.log('MR = M1 + M2 + M3')
console.log(`${MR} = ${M1} + ${M2} + ${M3}`)