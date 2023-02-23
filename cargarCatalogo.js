
iniciarCatalogo(idiomaSelect)

function iniciarCatalogo(idiomaSelect){
  
  const ctlgEsp = ["Cuerda","Guitarra","Violín","Bajo","Viento","Trompeta","Flauta","Trompa","Percusión","Batería","Bongó","Miscelanea","Electrónico","Mezcladora","Amplificador", "Microfono"]
  const ctlgEng = ["Strings","Guitar","Violin","Bass","Wind","Trumpet","Flute","Horn","Percussion","Drums","Bongo","Miscellaneous"," Electronic","Mixer","Amplifier", "Microphone"]
  const ctlgEus = ["Hariak","Gitarra","Biolina","Baxua","Haizea","Tronpeta","Flauta","Tronpa","Perkusioa","Bateria","Bongo","Denetariko"," Elektronika","Nahastailea","Anplifikadorea","Mikrofonoa"]
  let arrayM=cambiarIdioma(idiomaSelect, ctlgEsp, ctlgEng, ctlgEus)
  let radios=cargarMenuCatalogo(arrayM)  
  yesnoCheck(radios)

}
module.exports = iniciarCatalogo

function cargarMenuCatalogo(arrayCata){

  let cajaCatalogo = document.getElementById("cont-radio-check");

  cajaCatalogo.innerHTML = `

  <div id="radiocatalogo" class="d-flex flex-row flex-wrap justify-content-around" >

      <div id="cuerda" class="form-check form-check-inline">

          <div id="caja-radio-cuerda" class="d-flex flex-row align-items-center justify-content-around">
              <input id="radio-cuerda" class="form-check-input radio p-1 m-2" type="radio" name="inlineRadioOptions" value="cuerda" >
              <label class="form-check-label" for="radio-cuerda">${arrayCata[arrayCata.length-1][0]}</label>
              <div id="ico-cuerda"></div>
          </div>


          <div id="checks-cuerda" class="caja_check">
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck " data-bs-c="cuerda" type="checkbox" id="check-guitarra" value="guitarra">
                  <label class="form-check-label" for="check-guitarra">${arrayCata[arrayCata.length-1][1]}</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck " data-bs-c="cuerda" type="checkbox" id="check-violin" value="violin">
                  <label   label class="form-check-label" for="check-violin">${arrayCata[arrayCata.length-1][2]}</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="cuerda" type="checkbox" id="check-bajo" value="bajo">
                  <label class="form-check-label" for="check-bajo">${arrayCata[arrayCata.length-1][3]}</label>
              </div>

          </div>

      </div>

      <div id="viento"class="form-check form-check-inline ">
          <div id="caja-radio-viento" class="d-flex  flex-row align-items-center justify-content-around">
              <input id="radio-viento" class=" radio form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="viento">
              <label class="form-check-label" for="radio-viento">${arrayCata[arrayCata.length-1][4]}</label>
              <div id="ico-viento"></div>
          </div>


          <div id="checks-viento" class="caja_check">
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="viento" type="checkbox" id="check-trompeta" value="trompeta">
                  <label class="form-check-label" for="check-trompeta">${arrayCata[arrayCata.length-1][5]}</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="viento"  type="checkbox" id="check-flauta" value="flauta">
                  <label   label class="form-check-label" for="check-flauta">${arrayCata[arrayCata.length-1][6]}</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="viento" type="checkbox" id="check-trompa" value="trompa">
                  <label class="form-check-label" for="check-trompa">${arrayCata[arrayCata.length-1][7]}</label>
              </div>

          </div>
      </div>

      <div id="percusion"class="form-check form-check-inline ">
          <div id="caja-radio-percusion" class="d-flex flex-row align-items-center justify-content-between">
              <input id="radio-percusion" class=" radio form-check-input p-1 m-2" type="radio" name="inlineRadioOptions"  value="percusion">
              <label class="form-check-label" for="radio-percusion">${arrayCata[arrayCata.length-1][8]}</label>
              <div id="ico-percusion"></div>
          </div>


          <div id="checks-percusion" class="caja_check">
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="percusion" type="checkbox" id="check-bateria" value="bateria">
                  <label class="form-check-label" for="check-bateria">${arrayCata[arrayCata.length-1][9]}</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="percusion"  type="checkbox" id="check-bongo" value="bongo">
                  <label   label class="form-check-label" for="check-bongo">${arrayCata[arrayCata.length-1][10]}</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="percusion"  type="checkbox" id="check-miscelanea" value="miscelanea">
                  <label class="form-check-label" for="check-miscelanea">${arrayCata[arrayCata.length-1][11]}</label>
              </div>

          </div>
      </div>

      <div id="electronico"class="form-check form-check-inline ">
          <div id="caja-radio-electronico" class="d-flex flex-row align-items-center justify-content-between">
              <input  id="radio-electronico" class="radio form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="electronico">
              <label class="form-check-label" for="radio-electronico">${arrayCata[arrayCata.length-1][12]}</label>
              <div id="ico-electronico"></div>
          </div>


          <div id="checks-electronico" class="caja_check">
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="electronico" type="checkbox" id="check-mezcladora" value="mezcladora">
                  <label class="form-check-label" for="check-mezcladora">${arrayCata[arrayCata.length-1][13]}</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="electronico" type="checkbox" id="check-Amplificador" value="amplificador">
                  <label   label class="form-check-label" for="check-Amplificador">${arrayCata[arrayCata.length-1][14]}</label>
              </div>
              <div class="form-check form-check-inline">
                  <input class="form-check-input ck" data-bs-c="electronico" type="checkbox" id="check-microfono" value="microfono">
                  <label class="form-check-label" for="check-microfono">${arrayCata[arrayCata.length-1][15]}</label>
              </div>

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
  eventoRadios(radios)
  return radios
}

function pintarCatalogo(shopContent,prod){
  while (shopContent.firstChild) {
    shopContent.removeChild(shopContent.firstChild);
  }
  debugger
  prod.forEach((p)=>{
  let content = document.createElement ("div");
  content.className = "col-2 card cardH";
  content.innerHTML = `
      <a href="producto.html"><div id=${p.id} class="img imgP" style="background-image:url(${p.src})"></div></a>

      <div class="d-flex flex-row align-items-center">
          <h5 class="card-title card-titleCM">${p.name}  ${p.precio}€</h5>
      </div>
      <p class="card-text description cardTextCM">${p.description}</p>
      <div class="d-flex flex-row align-items-center">
          <a  id =${p.id}   href="#" class="btn btn-primary" >  <i class="fa-solid fa-cart-shopping"></i> Añadir</a>
          <i   id =${p.id} class="fa-regular fa-heart corazon-vacio" style="cursor: pointer"></i>
      </div>

  `;
  shopContent.append(content);
  pintarFavoritos(p)

  })
  activarClickComprar(prod)
  eventoCorazon(prod)
  eventoCargarUnProducto(prod)
}

function eventoRadios(radios){
  for(let i=0; i<radios.length ;i++){
    radios[i].addEventListener("change",()=>{
  
      yesnoCheck(radios)
    } )

  }

}

function yesnoCheck(radios) {
  const cajas_checkouts= document.getElementsByClassName("caja_check")
  const arraycheckout = document.getElementsByClassName("ck");
  const shopContent= document.getElementById("shopContent")
  let productosCat = cargarDelLocalStorage();

  let prodCat=[]
  if (radios[0].checked == true) {
    
    cambiarDisplayRadioButton(cajas_checkouts[0],cajas_checkouts[1],cajas_checkouts[2],cajas_checkouts[3])
    prodCat= productosPorCategoria("cuerda",productosCat)
    pintarCatalogo(shopContent,prodCat)
    descheckearProductos("cuerda",arraycheckout)
    localStorage.setItem("radio",0)


  } else if (radios[1].checked == true) {

    cambiarDisplayRadioButton(cajas_checkouts[1],cajas_checkouts[0],cajas_checkouts[2],cajas_checkouts[3])
    prodCat= productosPorCategoria("viento",productosCat)
    pintarCatalogo(shopContent,prodCat)
    descheckearProductos("viento",arraycheckout)
    localStorage.setItem("radio",1)


  } else if (radios[2].checked == true) {
    cambiarDisplayRadioButton(cajas_checkouts[2],cajas_checkouts[0],cajas_checkouts[1],cajas_checkouts[3])
    prodCat= productosPorCategoria("percusion",productosCat)
    pintarCatalogo(shopContent,prodCat)
    descheckearProductos("percusion",arraycheckout)
    localStorage.setItem("radio",2)



  } else if (radios[3].checked == true) {
    cambiarDisplayRadioButton(cajas_checkouts[3],cajas_checkouts[1],cajas_checkouts[2],cajas_checkouts[0])
    prodCat= productosPorCategoria("electronico",productosCat)
    pintarCatalogo(shopContent,prodCat)
    descheckearProductos("electronico",arraycheckout)
    localStorage.setItem("radio",3)
  }

  eventoCargarProductoPorCheckout(arraycheckout,productosCat)
}

function cambiarDisplayRadioButton(ck1,ck2,ck3,ck4){
    ck1.style.display = "block";
    ck2.style.display = "none";
    ck3.style.display = "none";
    ck4.style.display = "none";

}

function descheckearProductos(categoria,arraycheckout){

    let arrayAux = cargarCheckoutPorCategoria(categoria)
    for (let i = 0; i< arraycheckout.length; i++) {
        if( (i !=arrayAux[0] && i!= arrayAux[1] && i != arrayAux[2])){
            arraycheckout[i].checked=false;
        }
    }
}

function cargarCheckoutPorCategoria(categoria){

    let arrayAux = []
    if(categoria=="cuerda"){
        arrayAux = [0, 1, 2]
    }
    else if( categoria=="viento"){
        arrayAux = [3, 4, 5]
    }
    else if( categoria=="percusion"){
        arrayAux = [6, 7, 8]
    }
    else{
        arrayAux = [9, 10, 11]
    }

    return arrayAux;
}
module.exports = cargarCheckoutPorCategoria

function productosPorCategoria(categoria, productosCat){
  let prodCat=[];

  productosCat.forEach((product)=> {

     if(categoria=="cuerda"){

       if((product.id>-1) && (product.id<10)){
         prodCat.push(product);
       }
     }
     else if(categoria=="viento"){
       if(product.id>9 && product.id<19){
         prodCat.push(product)
       }
     }
     else if(categoria=="percusion"){
       if(product.id>18 && product.id<28){
         prodCat.push(product)
       }

     }
     else{
       if(product.id>27){
         prodCat.push(product)
       }
     }

   });
   return prodCat
 }

function eventoCargarProductoPorCheckout(arraycheckout,productosCat){
  for(let i = 0; i<arraycheckout.length; i++){
      arraycheckout[i].addEventListener ("change", ()=>{
        
        let categoria= arraycheckout[i].getAttribute("data-bs-c")
        let prodchecked = cargarProductoPorCheckout(categoria,productosCat,arraycheckout)
        let shopContent= document.getElementById("shopContent")
        pintarCatalogo(shopContent,prodchecked)
      })
  }
}

function cargarProductoPorCheckout (categoria,productosCat,arraycheckout){
    let prodchecked = [];
    let arrayckCat = cargarCheckoutPorCategoria(categoria);
    for(let ck=0; ck<arraycheckout.length; ck++){
        if(ck == arrayckCat[0] || ck == arrayckCat[1] || ck == arrayckCat[2]) {
            if(arraycheckout[ck].checked == true){

                let aux=elegirProdPorCheck(arraycheckout[ck],productosCat);
                for(let j=0; j<aux.length;j++){
                  prodchecked.push(aux[j]);
                }
            }

        }
    }

    if((arraycheckout[arrayckCat[0]].checked == false)&&(arraycheckout[arrayckCat[1]].checked == false)&&(arraycheckout[arrayckCat[2]].checked == false)){
      prodchecked= productosPorCategoria(categoria,productosCat)
    }

    return prodchecked
}

function elegirProdPorCheck(check,productosCat){
    let valueCk= check.value
    let prodsCk=[]
    for( let i=0; i<productosCat.length;i++){
        if( productosCat[i].varname.slice(0, -1)==valueCk) {
            prodsCk.push(productosCat[i])
        }
    }

    return prodsCk;
 }







