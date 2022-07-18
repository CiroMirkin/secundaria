const calcularMomento = require('../build/calcularMomento');

test('Un momento es igual a distancia(4M) por fuerza(25N) lo cual es 100NM', () => {
  expect(calcularMomento({
      fuerza: 25,
      distancia: 4
  })).toBe('100NM');
});

test('Un momento es igual a distancia(15M) por fuerza(-40N) lo cual es -600NM', () => {
    expect(calcularMomento({
        fuerza: -40,
        distancia: 15
    })).toBe('-600NM');
  });

test('Un momento es igual a distancia(10M) por fuerza(20N) por su angulo(Sen37°) lo cual es -128NM', () => {
    expect(calcularMomento({
        fuerza: 20,
        distancia: 10,
        angulo: 37
    })).toBe('-128NM');
  });