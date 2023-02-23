debugger

addProducto()

function addProducto(){
    let main = document.getElementsByTagName("main")[0]
    main.innerHTML = `
        <div class="container mt-5 mb-5 col-4">
            <div class="abs-center">
                <form action="#" class="mw-40 border p-3 form">
                    <div class="form-group">
                        <label for="">Producto</label>
                        <input type="name" class="form-control" id="" placeholder="Nombre del producto">
                    </div>
                    <div class="form-group">
                        <label >Precio</label>
                        <input type="number" class="form-control" id="" placeholder="Precio del producto ">
                    </div>

                    <div class="form-group">
                        <label for="">Correo</label>
                        <input type="name" class="form-control" id="" placeholder="Correo de contacto con el cliente">
                    </div>
                
                    <div class="form-group">
                        <label for="">Descripción</label>
                        <textarea class="form-control" id="" rows="3"></textarea>
                    </div>
                    <div>
                        <label class="form-label" for="customFile">Imagen</label>
                        <input type="file" class="form-control" id="customFile" />
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn mt-3 btn-dark">Agregar</button>
                    </div>
                </form>
            </div>
        </div>`
    
    
}