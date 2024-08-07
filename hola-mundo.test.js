
const saludar = require('./hola-mundo');

test('retorna "Hola Mundo"', () => {
    expect(saludar()).toBe('Hola Mundo');
});
