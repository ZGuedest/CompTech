const cambiarIdioma = require('../cambiarIdioma')
describe('initial', () => {
    test('should return Inicio', () => {
        let idioma = "Español"
        let result = cambiarIdioma(idioma)

        expect(result[0]).toBe("Inicio");
    });
    test('should return Home', () => {
        let idioma = "Inglés"
        let result = cambiarIdioma(idioma)

        expect(result[0]).toBe("Home");
    });
    
})