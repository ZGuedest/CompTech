
iniciarProducto()

function iniciarProducto(){
    const prdtEsp = ["AÑADIR", "Envio gratuito","Devoluciones o cambios permitidos"]
    const prdtEng = ["ADD", "Free shipping","Returns or changes allowed"]
    let arrayPr = []
    arrayPr=cambiarIdioma(idiomaSelect, prdtEsp, prdtEng)
    let p= productoIdioma()
    cargarProducto(arrayPr,p)
}

function cargarProducto(arrayPr, p){
    let main = document.getElementsByTagName("main")[0]
    main.innerHTML = `
    <div class="container-sm pt-5 pb-5 d-flex justify-content-center">
        <div class="card row g-0 d-flex flex-row col-8 mt-5 mb-5">
            <div id=${p.id} class="img imgP" style="background-image:url(${p.src})"></div>

            <div id="cr_caja_contenedora_text_producto" class="col p-3">
                <h5 class="card-title card-titleCM ">${p.name}</h5>
                <p class="card-text">${p.description}</p>
                <p class="fs-3 fw-bold">${p.precio} €</p>

                <div class="d-flex flex-row align-items-center">
                    <a id=${p.id} href="#" class="btn btn-primary" >  <i class="fa-solid fa-cart-shopping"></i> ${arrayPr[arrayPr.length-1][0]}</a>
                    <i id=${p.id} class="fa-regular fa-heart corazon-vacio"></i>
                </div>

                <div class="cajaenvio-devol mt-5">
                    <div><p><i class="fa-sharp fa-solid fa-truck"></i></i></i>${arrayPr[arrayPr.length-1][1]}</p></div>
                    <div><i class="fa-regular fa-square-check"></i>${arrayPr[arrayPr.length-1][2]}</div>
                    <div><i class="fa-solid fa-envelope pt-2"></i>${p.email}</div>
                </div>
            </div>
        </div>
    </div>`
    let productos=cargarDelLocalStorage()
    activarClickComprar(productos)
    eventoCorazon(productos)
}

function productoIdioma() {
    let p= JSON.parse(localStorage.getItem("prodctSelect"))
    let productos= cargarDelLocalStorage()
    productos.forEach((pro)=>{
        if(pro.id==p.id){
            p.name=pro.name
            p.description=pro.description
        }
    })
    return p
}