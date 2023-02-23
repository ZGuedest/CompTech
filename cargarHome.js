
//  cargarHome(idiomaSelect)

function cargarHome(idiomaSelect){
    let titulosNov=["Novedades","News","Berrikuntzak"]
    let titOf=["Ofertas","Oferts","Eskaintzak"]
    let titulosMarc=["Mejores Marcas","Top Brands","Marka Onenak"]

    let contenedor_principal=document.getElementById("contenedor_principal")
    limpiarContenedor(contenedor_principal)
    let titulo= seleccionarTitulo(idiomaSelect,titulosMarc);
    agregarCajasNovedadOfertaMarcas(contenedor_principal,titulo)

    let novedades_caja= document.getElementById("novedades_caja")
    let ofertas_caja= document.getElementById("ofertas_caja")
    let productos=cargarDelLocalStorage()
    let prodNew = filtrarProductos("novedad",productos)
    let prodOf = filtrarProductos("oferta",productos)
    titulo=cargarTitulo(idiomaSelect,titulosNov);
    cargarNovedadesOfertas(novedades_caja, prodNew,titulo)
    titulo=cargarTitulo(idiomaSelect,titOf)
    cargarNovedadesOfertas(ofertas_caja, prodOf, titulo)
    activarClickComprar(productos)
    eventoCorazon(productos)
}

function cargarNovedadesOfertas(CajaContent, prod, titulo){
    CajaContent.append(titulo);
    prod.forEach((p)=>{
      let content = document.createElement ("div");
      content.className = "col-2 card cardH";
      content.innerHTML = `
          <a href="producto.html"><div id=${p.id} class="img imgP" style="background-image:url(${p.src}); height: 200px"></div></a>
          <div class="d-flex flex-row align-items-center">
              <h5 class="card-title card-titleCM">${p.name}  ${p.precio}€</h5>
          </div>
          <p class="card-text description cardTextCM">${p.description}</p>
          <div class="d-flex flex-row align-items-center">
              <a  id =${p.id} data-producto =${p.id}  href="#" class="btn btn-primary" >  <i class="fa-solid fa-cart-shopping"></i> Añadir</a>
              <i id =${p.id}  class="fa-regular fa-heart corazon-vacio" style="cursor: pointer"></i>
          </div>
  
      `;
  
      CajaContent.append(content);
      pintarFavoritos(p)
    })

    eventoCargarUnProducto(prod)
    
}

function agregarCajasNovedadOfertaMarcas(contenedor_principal,marca){

    contenedor_principal.innerHTML=`

    <div id="novedades_caja" class="row justify-content-center">
    </div>
    <div id= "ofertas_caja"class="row justify-content-center">  
    </div>
    <div id="marcas_caja" class="row justify-content-center">
      
        <div class="caja-h2 d-flex flex-row align-items-center justify-content-center">
            <div class="linea1"></div>
            <h2 id="mejores-marcas">${marca} </h2>
            <div class="linea2"></div>
        </div>
        
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img4" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img5" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img6" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img7" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img8" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img9" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img10" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img11" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img12" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img13" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img14" class="img"></div>
        </div>
        <div class="col-lg-3 col-sm-4 col-xs-6">
            <div id= "img15" class="img"></div>
        </div>
    </div>

    
    
    `



   


}

function cargarTitulo(idiomaSelect, array){


    let titulo=seleccionarTitulo(idiomaSelect, array);
    let tit = document.createElement ("div");
      tit.className = "caja-h2 d-flex flex-row align-items-center justify-content-center";
      tit.innerHTML = `
        <div class="linea1"></div>
        <h2 id= ${titulo}>${titulo}</h2> 
        <div class="linea2"></div>`

    return tit
}
module.exports = cargarTitulo;

function seleccionarTitulo(idiomaSelect, array){
    let titulo;
    if(idiomaSelect=="Español"){
        titulo=array[0]
    }else if(idiomaSelect=="Inglés"){
        titulo=array[1]
    }else if(idiomaSelect=="Euskera"){
        titulo=array[2]
    }
    return titulo;
}

module.exports = seleccionarTitulo;

function filtrarProductos(opcion, productos){
    let prods=[]
    for(let i=0; i<productos.length;i++){
        if(opcion=="novedad" && productos[i].novedad=="true"){
            prods.push(productos[i])
        }
        else if(opcion=="oferta" && productos[i].oferta=="true"){
            prods.push(productos[i])
        }
        else if(opcion=="favorito" && productos[i].favorito=="true"){
            prods.push(productos[i])

        }
    }

    return prods
}


function cargarDelLocalStorage(){

    let aux;
    let prtos =[];
    for(let i=0; i<36;i++){
        
        aux= localStorage.getItem(i)
        aux = JSON.parse(aux)
        prtos.push(aux)
    }
  
    return prtos;
  
}


function limpiarContenedor(shopContent){
    while (shopContent.firstChild) {
        shopContent.removeChild(shopContent.firstChild);
    }
}


function crearPopap(){
    let html= document.getElementsByTagName("html")[0]
    let popap= document.getElementById("popap")

    html.addEventListener("mouseleave",()=>{
        popap.style.display="block"
        popap.style.zIndex="6000"
    })
}

function cerrarPopap(){
    let popap= document.getElementById("popap")

    popap.addEventListener("click",()=>{
        popap.style.display="none"
        popap.style.zIndex="0"
    })
}

