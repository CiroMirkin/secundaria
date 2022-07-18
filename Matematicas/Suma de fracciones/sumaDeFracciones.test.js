const sumarDosFracciones = require('./sumaDeFracciones') // { sumarDosFracciones, sumaDeFracciones }

// Suma de dos fracciones

test('Sumar dos fracciones con el mismo denominador, en este caso es 5', () => {
    expect(sumarDosFracciones('12/5', '6/5')).toBe('18/5')
});

test('Sumar dos fracciones con el mismo denominador, en este caso es 8', () => {
    expect(sumarDosFracciones('8/8', '1/8')).toBe('9/8')
});

test('Sumar dos fracciones con distinto denominador, en este caso 3 y 4', () => {
    // 4/12 + 6/12
    expect(sumarDosFracciones('1/3', '2/4')).toBe('10/12')
});

test('Sumar dos fracciones con distinto denominador, en este caso 3 y 5', () => {
    // 10/15 + 12/15
    expect(sumarDosFracciones('2/3', '4/5')).toBe('22/15')
});

// Suma de fracciones

/* test('Sumar dos fracciones con el mismo denominador, en este caso es 5', () => {
    expect(sumaDeFracciones('12/5', '6/5')).toBe('18/5')
}); 

test('Sumar dos fracciones con distinto denominador, en este caso 3 y 4', () => {
    // 10/15 + 12/15
    expect(sumaDeFracciones('2/3', '4/5')).toBe('22/15')
});

test('Sumar tres fracciones con el mismo denominador, en este caso 15', () => {
    expect(sumaDeFracciones('6/15', '4/15', '5/15')).toBe('15/15')
});

test('Sumar tres fracciones con distinto denominador, en este caso 2, 3 y 5', () => {
    expect(sumaDeFracciones('1/2', '2/3', '3/5')).toBe('53/30')
}); */