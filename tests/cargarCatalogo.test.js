const cargarCheckoutPorCategoria = require("../cargarCatalogo");

describe('initial', () => {
    test('should return arrayAux', () => {
        let categoria = "cuerda"
        let result = cargarCheckoutPorCategoria(categoria)

        expect(result).toHaveLength(3);
    });
})