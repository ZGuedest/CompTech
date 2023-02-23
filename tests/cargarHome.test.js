const seleccionarTitulo = require('../cargarHome');
const cargarTitulo = require('../cargarHome')

describe('initial', () => {
    test('should return Novedades', () => {
        let titulosNov=["Novedades","News","Berrikuntzak"]
        let idiomaSelect = "Español"
        let result = seleccionarTitulo(idiomaSelect, titulosNov)

        expect(result).toBe("Novedades");
    });
    test('should return titulo', () => {
        let titulosNov=["Novedades","News","Berrikuntzak"]
        let idiomaSelect = "Español"

        let result = cargarTitulo(idiomaSelect, titulosNov)
        expect(result).toBe("Novedades")
    });
  })
