const cambiarIdioma = require('../cambiarIdioma')
describe('initial', () => {
    test('should return Novedades', () => {
        let idioma = "Español"
        let result = cambiarIdioma(idioma)

        expect(result[0]).toBe("Inicio");
    });
    
})