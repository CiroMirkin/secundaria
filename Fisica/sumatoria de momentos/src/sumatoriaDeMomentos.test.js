const sumatoriaDeMomentos = require('../build/sumatoriaDeMomentos');

test('Al sumar los momentos: 100NM + 180NM - 600NM es igual a -320NM', () => {
  expect(sumatoriaDeMomentos('100NM', '180NM', '-600NM')).toBe('-320NM');
});