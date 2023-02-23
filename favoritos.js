
iniciarFavoritos(idiomaSelect)

function iniciarFavoritos(idiomaSelect){
    let precioProd;
    let productos=cargarDelLocalStorage()

    if(idiomaSelect=="Español"){
        precioProd= "precio del producto"

    }
    else if(idiomaSelect=="Inglés"){
        precioProd= "product price"
    }
    
    let prodsFav= []
    prodsFav= productosFavoritos(productos)
    pintarFavoritos(idiomaSelect,prodsFav,productos,precioProd)

}

function productosFavoritos(productos){
    let prodsFav=[];
    productos.forEach((p)=>{
        if(p.favorito=="true"){
            prodsFav.push(p)
        }
    })

    return prodsFav
}

function pintarFavoritos(idiomaSelect,prodsFav,productos,precioProd){
    let shopContent = document.getElementById("cr_caja_producto")
    limpiarContenedor(shopContent)
    prodsFav.forEach((product)=> {

        let content = document.createElement ("div")
        content.className = "card row g-0 d-flex flex-row col-12 mt-0"

        content.innerHTML = `
        <div id=${product.id} class="imgCF" style="background-image:url(${product.src})"></div>


        <div id="cr_caja_contenedora_text_producto" class="col p-3">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>

            <p  class="card-text cr_precio_producto">${precioProd} <small id="" class="text-muted">${product.precio}</small> €</p>

            <div class="d-flex gap-0 column-gap-3 pt-4">
                <i id="C${product.id}" class=" cr_carrito fa-solid fa-cart-shopping"></i>
                <i id="B${product.id}" class="cr_basura fa-solid fa-trash"></i>
            </div>
        </div>`
        shopContent.append(content)
        
    });
    eventBasuraFavorito(idiomaSelect, shopContent, productos)
    eventoCarritoFavorito( idiomaSelect, shopContent)
}

function eventBasuraFavorito(idiomaSelect, shopContent, productos){
    let bas= document.getElementsByClassName("cr_basura")

    for(let b=0; b<bas.length;b++){
        bas[b].addEventListener("click",(event)=>{
            debugger
            eliminarFavoritoEnFavorito(productos, idiomaSelect, shopContent, event)
            
        })
    }

}

function eliminarFavoritoEnFavorito(productos, idiomaSelect, shopContent, event){

    let fP= productos.find((element) => element.id==(event.target.id).slice(1));
    productos.map ((prod) => {
        if (prod.id === fP.id) {
            eliminarFavorito((event.target.id).slice(1),productos)
            cargarLocalStorage(productos)
            limpiarContenedor(shopContent)
            iniciarFavoritos(idiomaSelect)
        }
    });
}


function eventoCarritoFavorito( idiomaSelect, shopContent){
    let car= document.getElementsByClassName("cr_carrito")

    for(let b=0; b<car.length;b++){
        car[b].addEventListener("click",(event)=>{
            let productos=cargarDelLocalStorage()
            eliminarFavoritoEnFavorito(productos, idiomaSelect, shopContent, event)
            let idBtn= (event.target.id).slice(1);
            añadirAlCarrito(idBtn,productos)
            cantidadDelIconoCarritoCorazon("cantCarrito")
        })
    }

}