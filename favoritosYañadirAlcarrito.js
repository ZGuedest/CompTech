
/////// FAVORITOS /////

function eventoCorazon(){
    let productos= cargarDelLocalStorage()

    let corazones= document.getElementsByClassName("corazon-vacio")
    for( let i=0; i< corazones.length; i++){

        corazones[i].addEventListener("click", (event)=>{
            event.preventDefault()
            let idCora= event.target.id
            añadirFav(corazones[i],idCora, productos)

        })
    }
}

function añadirFav(corazon,idCora, productos) {
    let valor =  corazon.getAttribute("class");
    if (valor == "fa-regular fa-heart corazon-vacio") {
        corazon.setAttribute("class", "fa-solid fa-heart-circle-check corazon-vacio")
        productos[idCora-1].favorito ="true"
        cantidadDelIconoCarritoCorazon("cantFav")

    } else {
        corazon.setAttribute("class", "fa-regular fa-heart corazon-vacio")
        eliminarFavorito(idCora,productos)
    }

    cargarLocalStorage(productos);

}

function eliminarFavorito(idCora,productos){

    productos[idCora-1].favorito ="false"
    let cant=localStorage.getItem("cantFav")-2
    localStorage.setItem("cantFav",cant)
    cantidadDelIconoCarritoCorazon("cantFav")
}

////// CARRITO ///////

function activarClickComprar(){
    let productos= cargarDelLocalStorage()
    let botonesComprar = document.getElementsByClassName("btn-primary");
    for(let i=0; i<botonesComprar.length;i++){
      botonesComprar[i].addEventListener("click",(event)=>{
          event.preventDefault()
          let idBtn= event.target.id;
          añadirAlCarrito(idBtn,productos)
          cantidadDelIconoCarritoCorazon("cantCarrito")

      })
    }
}

function cantidadDelIconoCarritoCorazon(idIco){
    let num
    let span= document.getElementById(idIco);
    if(idIco=="cantCarrito"){
        num= localStorage.getItem("cantCarrito")
    }
    else if(idIco=="cantFav"){
        num= localStorage.getItem("cantFav")

    }
    num =! null ? num= parseInt(JSON.parse(num)+1) : num= parseInt(1)

    
    span.setAttribute("value",String(num))
    span.innerHTML=num;
    localStorage.setItem(idIco,JSON.stringify(num))
    
}

function añadirAlCarrito(idBtn, productos){

    let c=productos[idBtn-1].cantidad
    c=c+1
    productos[idBtn-1].cantidad=c
    //productos[idBtn-1].cantidad++
    cargarLocalStorage(productos);

}

////////// PRODUCTO //////////////
function eventoCargarUnProducto(productos){
    let cajasProd= document.getElementsByClassName("imgP")
    for (let i=0; i<cajasProd.length;i++){
  
      cajasProd[i].addEventListener("click",(event)=>{
        debugger
        cargarUnProducto(productos,event)
    
      })
  
    }
    
  
  
  }
  
function cargarUnProducto(productos,event){

let data_p = event.target.id
productos.forEach((prod)=>{
    if(prod.id==data_p){
    localStorage.setItem("prodctSelect", JSON.stringify(prod))

    }
})
}
///////////////////////////////////////////////
function limpiarContenedor(shopContent){
    while (shopContent.firstChild) {
        shopContent.removeChild(shopContent.firstChild);
    }
}


function pintarFavoritos(p){
    let corazones= document.getElementsByClassName("corazon-vacio")
    for( let i=0; i< corazones.length; i++){

        if(p.favorito=="true" && corazones[i].getAttribute("id")==p.id){
            corazones[i].setAttribute("class", "fa-solid fa-heart-circle-check corazon-vacio")
        }

    }
}