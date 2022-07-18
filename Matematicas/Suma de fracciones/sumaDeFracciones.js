"use strict"

const sumarDosFracciones = (fraccion1, fraccion2) => {
    fraccion1 = [...fraccion1.split('/')].map(n => Number(n))
    fraccion2 = [...fraccion2.split('/')].map(n => Number(n))

    if(fraccion1[1] == fraccion2[1]) {
        const minimoComunMultiplo = fraccion1[1]
        const numerador = fraccion1[0] + fraccion2[0]

        return `${numerador}/${minimoComunMultiplo}`
    }


    for (let number1 = 0; true; number1++) {
        const multiploDeLaFraccion1 = number1 * fraccion1[1]

        for (let number2 = 0; true; number2++) {
            const multiploDeLaFraccion2 = number2 * fraccion2[1]

            if (multiploDeLaFraccion1 == multiploDeLaFraccion2 && !!number2) {
                const minimoComunMultiplo = multiploDeLaFraccion1
                const numerador = (fraccion1[0] * number1) + fraccion2[0] * number2
                
                return `${numerador}/${minimoComunMultiplo}`
            }

            if(multiploDeLaFraccion2 >= multiploDeLaFraccion1) {
                break
            }
        }
    }
}

/* const sumaDeFracciones = (...fracciones) => {
    fracciones = fracciones.map(fraccion => {
        return [...fraccion.split('/')].map(n => Number(n))
    })
} */

module.exports = sumarDosFracciones//, sumaDeFracciones