const seleccionarTitulo = require('../cargarHome');

describe('initial', () => {
    test('should return Novedades', () => {
        let titulosNov=["Novedades","News"]
        let idiomaSelect = "Español"
        let result = seleccionarTitulo(idiomaSelect, titulosNov)

        expect(result).toBe("Novedades");
    });
    test('should return News', () => {
        let titulosNov=["Novedades","News"]
        let idiomaSelect = "Inglés"
        let result = seleccionarTitulo(idiomaSelect, titulosNov)

        expect(result).toBe("News");
    });
})
