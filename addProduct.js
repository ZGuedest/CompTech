

addProducto()

function addProducto(){
    let main = document.getElementsByTagName("main")[0]
    main.innerHTML = `
            <div class="container mt-5 mb-5">	        
            <div class="abs-center">
                    <form	        
                    action="http://localhost:5000/api/v1/products"
                    method="post"	       
                    enctype="multipart/form-data"	       
            class="mw-40 border p-3 form">	        
            <div class="form-group">	    
              <label for="name">Producto</label>	
              <input	
                type="name"	
                name="name"	
                class="form-control"	
                id="name"	
                placeholder="name"	
              />	
            </div>	
            <div class="form-group">	
              <label for="price">Precio</label>	
              <input	
                type="number"	
                name="price"	
                class="form-control"	
                id="price"	
                placeholder="Precio"	
              />	
            </div>	
            <div class="form-group">	
              <label for="description">Descripción</label>	
              <textarea	
                class="form-control"	
                name = "description"	
                id="description"	
                rows="3"	
              ></textarea>	
            </div>	
            <div class="form-group">
            <label >Correo</label>
            <input for="email" name="email" type="email" class="form-control" id="" placeholder="Correo de contacto con el cliente">
            </div>
            <div>	
              <label class="form-label" for="photo">Imagen</label>	
              <input type="file" class="form-control" id="photo" name="photo" />	
            </div>	
            <button type="submit" class="btn mt-3 btn-dark">Enviar</button>	
          </form>
          </div>
          </div>`
    let productos=cargarDelLocalStorage()
    activarClickComprar(productos)
    eventoCorazon(productos)
}