
cargarHome(idiomaSelect)

function cargarHome(idiomaSelect){
    let titulosNov=["Novedades","News"]
    let titOf=["Ofertas","Oferts"]

    let add=["Añadir", "Add"]
    
    let contenedor_principal=document.getElementById("contenedor_principal")
    limpiarContenedor(contenedor_principal)
    agregarCajasNovedadOfertaMarcas(contenedor_principal)
    
    let novedades_caja= document.getElementById("novedades_caja")
    let ofertas_caja= document.getElementById("ofertas_caja")
    let productos=cargarDelLocalStorage()
    let prodNew = filtrarProductos("novedad",productos)
    let prodOf = filtrarProductos("oferta",productos)
    let titulo=cargarTitulo(idiomaSelect,titulosNov);
    let titbtn = idiomaSelect == "Español" ? add[0]:add[1] ;

    cargarNovedadesOfertas(novedades_caja, prodNew,titulo,titbtn)
    titulo=cargarTitulo(idiomaSelect,titOf)
    cargarNovedadesOfertas(ofertas_caja, prodOf, titulo,titbtn)
    activarClickComprar(productos)
    eventoCorazon(productos)
}

function cargarNovedadesOfertas(CajaContent, prod, titulo, titbtn){
    CajaContent.append(titulo);
    prod.forEach((p)=>{
      let content = document.createElement ("div");
      content.className = "col-2 card cardH";
      content.innerHTML = `
          <a href="producto.html"><div id=${p.id} class="img imgP" style="background-image:url(${p.src}); height: 200px"></div></a>
          <div class="d-flex flex-row align-items-center">
              <h5 class="card-title card-titleCM">${p.name}  ${p.precio}€</h5>
          </div>
          <div class="d-flex flex-row align-items-center">
              <a  id =${p.id} data-producto =${p.id}  href="#" class="btn btn-primary" >  <i class="fa-solid fa-cart-shopping"></i> ${titbtn} </a>
              <i id =${p.id}  class="fa-regular fa-heart corazon-vacio" style="cursor: pointer"></i>
          </div>
  
      `;
  
      CajaContent.append(content);
      pintarFavoritos(p)
    })

    eventoCargarUnProducto(prod)
    
}

function agregarCajasNovedadOfertaMarcas(contenedor_principal){

    contenedor_principal.innerHTML=`

    <div id="novedades_caja" class="row justify-content-center">
    </div>
    <div id= "ofertas_caja"class="row justify-content-center">  
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



function limpiarContenedor(shopContent){
    while (shopContent.firstChild) {
        shopContent.removeChild(shopContent.firstChild);
    }
}

