
iniciarCatalogo(idiomaSelect)

function iniciarCatalogo(idiomaSelect){
  
  const ctlgEsp = ["Ordenadores", "Periféricos", "Componentes ", "Accesorios", "Añadir"]
  const ctlgEng = ["Computers", "Peripherals", "Components ", "Accessories", "Add"]
  let arrayM=cambiarIdioma(idiomaSelect, ctlgEsp, ctlgEng)
  let radios=cargarMenuCatalogo(arrayM)  
  yesnoCheck(radios,arrayM)

}

function cargarMenuCatalogo(arrayCata){

  let cajaCatalogo = document.getElementById("cont-radio-check");

  cajaCatalogo.innerHTML = `

  <div id="radiocatalogo" class="d-flex flex-row flex-wrap justify-content-around" >

      <div id="ordenador" class="form-check form-check-inline">

          <div id="caja-radio-ordenador" class="d-flex flex-row align-items-center justify-content-between">
              <input id="radio-ordenador" class=" radio form-check-input  p-1 m-2" type="radio" name="inlineRadioOptions" value="ordenador" >
              <label class="form-check-label" for="radio-ordenador">${arrayCata[arrayCata.length-1][0]}</label>
              <div id="ordenador-ico"></div>
          </div>

      </div>

      <div id="periferico"class="form-check form-check-inline ">
          <div id="caja-radio-periferico" class="d-flex  flex-row align-items-center justify-content-between">
              <input id="radio-periferico" class=" radio form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="periferico">
              <label class="form-check-label" for="radio-periferico">${arrayCata[arrayCata.length-1][1]}</label>
              <div id="periferico-ico"></div>
          </div>

      </div>

      <div id="componente" class="form-check form-check-inline">
          <div id="caja-radio-componente" class="d-flex flex-row align-items-center justify-content-between">
              <input id="radio-componente" class=" radio form-check-input p-1 m-2" type="radio" name="inlineRadioOptions"  value="componente">
              <label class="form-check-label" for="radio-componente">${arrayCata[arrayCata.length-1][2]}</label>
              <div id="componente-ico"></div>
          </div>
      </div>

      <div id="accesorio"class="form-check form-check-inline ">
          <div id="caja-radio-accesorio" class="d-flex flex-row align-items-center justify-content-between">
              <input  id="radio-accesorio" class="radio form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="accesorio">
              <label class="form-check-label" for="radio-accesorio">${arrayCata[arrayCata.length-1][3]}</label>
              <div id="accesorio-ico"></div>
          </div>
      </div>
  </div>
  `
  const radios= document.getElementsByClassName("radio")
  let rCk=localStorage.getItem("radio")
  if(rCk!=null){
    radios[rCk].checked=true
  }else{
    radios[0].checked=true
    localStorage.setItem("radio",0)
  }
  eventoRadios(radios,arrayCata)
  return radios
}

function pintarCatalogo(shopContent,prod, arrayCata){
  while (shopContent.firstChild) {
    shopContent.removeChild(shopContent.firstChild);
  }
  
  prod.forEach((p)=>{
  let content = document.createElement ("div");
  content.className = "col-2 card cardH";
  content.innerHTML = `
      <a href="producto.html"><div id=${p.id} class="img imgP" style="background-image:url(${p.src})"></div></a>

      <div class="d-flex flex-row align-items-center">
          <h5 class="card-title card-titleCM">${p.name}  ${p.precio}€</h5>
      </div>
      <div class="d-flex flex-row align-items-center mt-5">
          <a  id =${p.id}   href="#" class="btn btn-primary" >  <i class="fa-solid fa-cart-shopping"></i> ${arrayCata[arrayCata.length-1][4]}</a>
          <i   id =${p.id} class="fa-regular fa-heart corazon-vacio" style="cursor: pointer"></i>
      </div>

  `;
  shopContent.append(content);
  pintarFavoritos(p)

  })
  //eventoCorazon(prod)
  eventoCargarUnProducto(prod)
}

function eventoRadios(radios,arrayCata){
  for(let i=0; i<radios.length ;i++){
    radios[i].addEventListener("change",()=>{
      yesnoCheck(radios,arrayCata)
    } )

  }

}

function yesnoCheck(radios,arrayCata) {
  const shopContent= document.getElementById("shopContent")
  let productosCat = cargarDelLocalStorage();

  let prodCat=[]
  if (radios[0].checked == true) {
    prodCat= productosPorCategoria("Ordenadores",productosCat)
    pintarCatalogo(shopContent,prodCat,arrayCata)
    localStorage.setItem("radio",0)


  } else if (radios[1].checked == true) {

    prodCat= productosPorCategoria("Periféricos",productosCat)
    pintarCatalogo(shopContent,prodCat,arrayCata)
    localStorage.setItem("radio",1)


  } else if (radios[2].checked == true) {
    prodCat= productosPorCategoria("Componentes",productosCat)
    pintarCatalogo(shopContent,prodCat,arrayCata)
    localStorage.setItem("radio",2)



  } else if (radios[3].checked == true) {
    prodCat= productosPorCategoria("Accesorios",productosCat)
    pintarCatalogo(shopContent,prodCat,arrayCata)
    localStorage.setItem("radio",3)
  }

  activarClickComprar()
  eventoCorazon()


}


 function productosPorCategoria(categoria, productos){
  let prodCat=[];

  productos.forEach((product)=> {

     if( product.categoria==categoria){
         prodCat.push(product);
    }
     
   });
   return prodCat
 }
