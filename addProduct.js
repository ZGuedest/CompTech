
inicializarAddProducto(idiomaSelect) 

function inicializarAddProducto(idiomaSelect){
    debugger
    let arrE=["Producto","Nombre del producto", "Precio", "Precio del producto", "Correo", "Correo de contacto con el cliente", "Descripción", "Imagen", "Agregar"]

    let arrI=["Product","Product Name", "Price", "Product Price", "Mail", "Customer Contact Email", "Description", "Image", "Add"]
    
    arrayPr=cambiarIdioma(idiomaSelect, arrE, arrI)
    addProducto(arrayPr)


}


function addProducto(arrayPr){
    debugger
    let main = document.getElementsByTagName("main")[0]
    main.innerHTML = `
        <div id= "addPro" class="container mt-5 mb-5 col-4">
            <div class="abs-center">
                <form action="#" class="mw-40 border p-3 form">
                    <div class="form-group">
                        <label for="">${arrayPr[arrayPr.length-1][0]}</label>
                        <input type="name" class="form-control" id="" placeholder=${arrayPr[arrayPr.length-1][1]}>
                    </div>
                    <div class="form-group">
                        <label >${arrayPr[arrayPr.length-1][2]}</label>
                        <input type="number" class="form-control" id="" placeholder=${arrayPr[arrayPr.length-1][3]}>
                    </div>

                    <div class="form-group">
                        <label for="">${arrayPr[arrayPr.length-1][4]}</label>
                        <input type="name" class="form-control" id="" placeholder=${arrayPr[arrayPr.length-1][5]}>
                    </div>
                
                    <div class="form-group">
                        <label for="">${arrayPr[arrayPr.length-1][6]}</label>
                        <textarea class="form-control" id="" rows="3"></textarea>
                    </div>
                    <div>
                        <label class="form-label" for="customFile">${arrayPr[arrayPr.length-1][7]}</label>
                        <input type="file" class="form-control" id="customFile" />
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn mt-3 btn-dark">${arrayPr[arrayPr.length-1][8]}</button>
                    </div>
                </form>
            </div>
        </div>`
    
    
}