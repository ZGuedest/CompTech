const seleccionarTitulo = require('../cargarHome');

describe('initial', () => {
    test('should return Novedades', () => {
        let titulosNov=["Novedades","News","Berrikuntzak"]
        let idiomaSelect = "Español"
        let result = seleccionarTitulo(idiomaSelect, titulosNov)

        expect(result).toBe("Novedades");
    });
    test('should return News', () => {
        let titulosNov=["Novedades","News","Berrikuntzak"]
        let idiomaSelect = "Inglés"
        let result = seleccionarTitulo(idiomaSelect, titulosNov)

        expect(result).toBe("News");
    });
    test('should return Novedades', () => {
        let titulosNov=["Novedades","News","Berrikuntzak"]
        let idiomaSelect = "Euskera"
        let result = seleccionarTitulo(idiomaSelect, titulosNov)

        expect(result).toBe("Berrikuntzak");
    });

})
