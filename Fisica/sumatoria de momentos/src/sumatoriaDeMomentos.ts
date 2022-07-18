
const sumatoriaDeMomentos = (...momentos: string[]): string => {
    let momentoResultante: number = 0

    momentos.forEach(momentoConUnidad => {
        const momento = Number(momentoConUnidad.replace('NM', ''))
        
        momentoResultante += momento
    })

    return momentoResultante + 'NM'
}

module.exports = sumatoriaDeMomentos