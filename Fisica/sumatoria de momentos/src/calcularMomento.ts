interface DatosRequeridos {
    fuerza: number
    distancia: number
    angulo?: number
}

const calcularMomento = ({ fuerza, distancia, angulo }: DatosRequeridos): string => {
    if(angulo === undefined) return fuerza * distancia + 'NM'
    return Math.trunc((fuerza * distancia) * Math.sin(angulo)) + 'NM'
}

module.exports = calcularMomento