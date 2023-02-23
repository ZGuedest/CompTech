
iniciarCarrito(idiomaSelect)
function iniciarCarrito(idiomaSelect){
    let espc = ["Resumen del Pedido", "Comprar","Vaciar", "Aceptamos", "precio del producto", "precio por cantidad","Debe iniciar sesión para tramitar su pedido","Carrito vacío, añada productos al carrito para poder comprar" ];
    let ingc = ["Order Summary", "Buy","Clean","Accept","product price","price by quantity","You must log in to process your order","Empty cart, add products to cart to be able to buy"];
    let arrayc=cambiarIdioma(idiomaSelect, espc, ingc)
    let productos = cargarDelLocalStorage();
    cargarcarrito(arrayc,productos,idiomaSelect);
}

function cargarcarrito(arrayc,productos,idiomaSelect){
    let main = document.getElementsByTagName("main")[0];
    main.innerHTML = `

    <div  id="cr_contenedor_principal" class="container-sm row justify-content-around">
                
        <div id="cr_caja_producto" class="card m-3 row g-0 d-flex flex-row col mt-0" >
        </div>
        <div id= "cr_comprar_pedido" class="card p-3 col-4">
            <div class="Pedido">
                <h5 class="card-title">${arrayc[arrayc.length-1][0]}</h5>
                <div class="d-flex  flex-column align-items-center gap-0 row-gap-3">
                    <div class="d-flex gap-0 column-gap-3 align-items-center">
                        <i id="cr_carrito"class="fa-solid fa-cart-shopping"></i>
                        <p id="cr_precio_total" class="card-text precios">  0 €</p>
                    </div>
                    <div class="d-flex flex-row flex-wrap ">
                        <a id="ck" href="" class="btn  m-1" >${arrayc[arrayc.length-1][1]}</a>
                        <a id= "vaciar" href="" class="btn  m-1 " >  ${arrayc[arrayc.length-1][2]} <i class="fa-solid fa-cart-shopping"></i> </a>
                    </div>
                </div>
                
                <h5 class="card-title pt-4">${arrayc[arrayc.length-1][3]}</h5>
                <div class="d-flex gap-0 column-gap-3">
                    <i id="cr_visa"class="fa-brands fa-cc-visa"></i>
                    <i id="cr_paypal"class="fa-brands fa-cc-paypal"></i>
                    <i id="cr_mastercard"class="fa-brands fa-cc-mastercard"></i>
                    
                </div>
            
            </div>
        </div>
    </div
    `
    pintarCarrito(arrayc,productos)
    eventoVaciarCarrito(arrayc,productos)
    cacularTotal()
    validarCheckout(arrayc)
}

function eventoVaciarCarrito(arrayc,productos){

    let vaciar= document.getElementById("vaciar")

    vaciar.addEventListener("click", ()=>{
        
        vaciarCarrito(productos)
        pintarCarrito(arrayc, productos)
        localStorage.setItem("cantCarrito", 0)
    })
}

function vaciarCarrito(productos){
    productos.forEach((prod)=>{
        prod.cantidad=0
    })
    cargarLocalStorage(productos)
}

function actualizarPrecioPorCantidad(productos, event, input){
    productos.forEach ((prod) => {
        if (prod.id == event.target.id) {

            let nume=parseInt(JSON.parse(localStorage.getItem("cantCarrito")))-prod.cantidad+parseFloat(input.value)
            nume=nume-1
            localStorage.setItem("cantCarrito", JSON.stringify(nume))


            prod.cantidad = parseInt(input.value)
            //se captura la cajita donde se muestra el precio por cantidad y lo muestra
            document.getElementById("S+"+prod.id).innerHTML = String(`${ prod.cantidad * prod.precio }`)
            cargarLocalStorage(productos)
            
        }
    });
}

function activarEventoInputNumber(productos){
    let inputs= document.getElementsByClassName("aumentar")
    for(let inp=0; inp<inputs.length;inp++){
        inputs[inp].addEventListener("change",(event)=>{
    
            actualizarPrecioPorCantidad(productos, event, inputs[inp])
            cacularTotal()

            cantidadDelIconoCarritoCorazon("cantCarrito")
    
        })
    }
}

function pintarCarrito(arrayc,productos){
    let shopContent = document.getElementById("cr_caja_producto");
    productos.forEach((product)=> {


        let content = document.createElement ("div");
        content.className = "card row g-0 d-flex flex-row col-12 mt-0";

        if(product.cantidad>0){
            content.innerHTML = `
            <div id=${product.id} class="imgCF" style="background-image:url(${product.src})"></div>


            <div id="cr_caja_contenedora_text_producto" class="col p-3">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>

                <div class="d-flex flex-row justify-content-around">
                    <p  class="card-text cr_precio_producto"> ${arrayc[arrayc.length-1][4]} : <small id="" class="text-muted">${product.precio}</small> €</p>

                    <input  type="number" class="aumentar" id=${product.id} value=${product.cantidad} name="aumentar" min="1" max="10">
                    <p class="card-text px-2 cr_precio_cantidad"> ${arrayc[arrayc.length-1][5]}  : <small id="S+${product.id}" class=" pc text-muted">${product.cantidad * product.precio}</small> €</p>
                </div>
                <div class="d-flex gap-0 column-gap-3">
                    <i id="B+${product.id}" class="cr_basura fa-solid fa-trash"></i>
                    <i id="C+${product.id}" class="cr_corazon fa-regular fa-heart"></i>
                </div>
            </div>

        `;


        shopContent.append(content);
        }


    });

    activarEventoBasura(arrayc, productos,shopContent)
    activarEventoInputNumber(productos)
    cambiarAFavoritos(arrayc, productos, shopContent)
}

function activarEventoBasura(arrayc, productos, shopContent){
    let bas= document.getElementsByClassName("cr_basura")

    for(let b=0; b<bas.length;b++){
        bas[b].addEventListener("click",(event)=>{
            let fP= productos.find((element) => element.id==(event.target.id).slice(1));
            productos.map ((prod) => {
                if (prod.id === fP.id) {
                    let nume=parseInt(JSON.parse(localStorage.getItem("cantCarrito")))-fP.cantidad
                    nume==0?nume=-1: nume=nume-1
                    localStorage.setItem("cantCarrito", JSON.stringify(nume))
                    cantidadDelIconoCarritoCorazon("cantCarrito")
                    prod.cantidad = 0
                    cargarLocalStorage(productos)
                    limpiarContenedor(shopContent)
                    pintarCarrito(arrayc,productos)                    
                    cacularTotal()
                }
            });


        })
    }
}

function cacularTotal(){
    let pc = document.getElementsByClassName("pc"); //precio  por cantidad
    let total = document.getElementById("cr_precio_total");
    let suma = 0;
    for(let i = 0; i<pc.length; i++) {
        suma += parseFloat(pc[i].textContent)
    }
    total.innerHTML = suma + " €";
    localStorage.setItem('total', suma)

}

function cambiarAFavoritos(arrayc, productos, shopContent){

    let fav= document.getElementsByClassName("cr_corazon")

    for(let b=0; b<fav.length;b++){
        fav[b].addEventListener("click",(event)=>{
            debugger
            let fP= productos.find((element) => element.id==(event.target.id).slice(1));
            productos.map ((prod) => {
                if (prod.id === fP.id) {
                    let nume=parseInt(JSON.parse(localStorage.getItem("cantCarrito")))-fP.cantidad
                    nume==0?nume=-1: nume=nume-1
                    localStorage.setItem("cantCarrito", JSON.stringify(nume))
                    cantidadDelIconoCarritoCorazon("cantCarrito")
                    let numeF=parseInt(JSON.parse(localStorage.getItem("cantFav")))
                    localStorage.setItem("cantFav", JSON.stringify(numeF))
                    cantidadDelIconoCarritoCorazon("cantFav")

                    prod.cantidad = 0
                    prod.favorito="true"
                    cargarLocalStorage(productos)
                    limpiarContenedor(shopContent)
                    pintarCarrito(arrayc,productos)                   
                    cacularTotal()
                }
            });


        })
    }

}

function validarCheckout(arrayc){
    
    let black=document.getElementById("ck");
    black.addEventListener('click',(event)=>{
    
    let cantC= document.getElementById("cantCarrito")
        event.preventDefault()
        if(localStorage.getItem('gmail') ===" " || localStorage.getItem('gmail') == null){
            alert(arrayc[arrayc.length-1][6])
            window.location.href="login.html"
        }
        
        else{

            if(cantC.textContent=="0 "){
                alert(arrayc[arrayc.length-1][7])

            }else{
                window.location.href="checkout.html"
            }
        }
        
        
     });
}





