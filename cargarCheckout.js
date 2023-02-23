iniciarCheckout(idiomaSelect)

function iniciarCheckout(idiomaSelect){
    const chcktEsp = ["Seleccione el Tipo de Envio", "Recogida en tienda","Gratis", " (Puede recoger su pedido a partir del jueves)","Enviar a domicilio 72h", "10€", "(Recibirá su pedido entre las 9:00am y 2:00pm del jueves)","Enviar a domicilio 24h","20€"," (Recibirá su pedido entre las 9:00am y 2:00 de mañana)","Datos del cliente", "Nombre", "Apellidos", "Teléfono", "Ciudad","Dirección", "C.P.", "Correo", "Contraseña","Métodos de pago","Pago con tarjeta", "Número de tarjeta","Mes caducidad","MM","Año caducidad","YY","CCV","CCV","Nombre en la tarjeta","Guardar detalles para pagos rápidos", "Pagos con Bizum","Introduce el teléfono","Teléfono registrado en Bizum","Pago con Paypal","Correo", "Contraseña","Cupón de Descuento","Código del cupón","Resumen del Pedido:","Precio total de los productos","Precio de envio","Descuento","Total a Pagar", "Realizar Pedido","GRACIAS POR CONFIRAR EN NOSOTROS","Tu compra ha sido realizada con exito.","Código inexistente"]
    const chcktEng = ["Select Type of Shipping", "Pick up in store", "Free" ,"(You can pick up your order from Thursday)", "72h home delivery", "€10","(You will receive your order between 9:00 am and 2: 00 pm hours)","24h home delivery","20€","(You will receive your order between 9:00 and 2:00 tomorrow)","Customer data", "Name", "Surname", "Telephone", " City","Address", "ZIP", "Email", "Password","Payment methods","Card payment","Card number","Expiration month" , "MM","Expiration year", "YY", "CCV", "CCV","Name on the card","Save data for quick payments", "Payments with Bizum","Enter telephone number","Telephone number registered in Bizum","Payment with Paypal","Email","Password","Discount Coupon","Coupon Code","Order Summary:","Total Product Price","Shopping Price","Discount", "Total to Pay", "Place order","THANK YOU FOR TRUSTING US", "Your purchase has been successful.","Non-existent code"]
    let arrayCk = []
    arrayCk=cambiarIdioma(idiomaSelect, chcktEsp, chcktEng)
    cargarCheckout(arrayCk)
    let radiosEnv= document.getElementsByClassName("radio")
    let gastosE=gastosDeEnvio(radiosEnv)
    totalGastos(gastosE)
}

function cargarCheckout(arrayCk){
    let totalProd = localStorage.getItem('total')
    let main = document.getElementsByTagName("main")[0]
    main.innerHTML = `<div class="col-md-7">
    <section id="tipo-envio">
        <h2 class=" p-3 col-md-12 border-bottom border-2">${ arrayCk[arrayCk.length-1][0] } </h2>
        <ul class="list-group p-3 mb-2   col-md-12">
            <li class="list-group-item border border-0 border-bottom">
                <input id="ck_firstRadio"  class="radio form-check-input me-1 " type="radio" name="listGroupRadio" value="" checked>
                <label class="form-check-label" for="firstRadio"> 
                    <strong> ${arrayCk[arrayCk.length-1][1]} </strong> 
                </label>
                
                <p class="p-1">${arrayCk[arrayCk.length-1][2]}  <xsmall class="text-muted">${arrayCk[arrayCk.length-1][3]}</xsmall></p>
                
                
            </li>
            <li class="list-group-item border border-0 border-bottom">
                <input id="ck_secondRadio" class="radio form-check-input me-1" type="radio" name="listGroupRadio" value="" >
                <label class="form-check-label" for="secondRadio"> 
                    <strong> ${arrayCk[arrayCk.length-1][4]} </strong> 
                </label>
                <p class="p-1">${arrayCk[arrayCk.length-1][5]} <xsmall class="text-muted">${arrayCk[arrayCk.length-1][6]} </xsmall></p>
            </li>
            <li class="list-group-item border border-0 border-bottom">
                <input id="ck_thirdRadio" class=" radio form-check-input me-1 " type="radio" name="listGroupRadio" value="" >
                <label class="form-check-label" for="thirdRadio"> 
                    <strong> ${arrayCk[arrayCk.length-1][7]}</strong>   
                </label>
                <p class="p-1"> ${arrayCk[arrayCk.length-1][8]} <xsmall class="text-muted">${arrayCk[arrayCk.length-1][9]} </xsmall></p>
            </li>
        </ul>
    </section>

    <section id="datos-cliente">
        <h2 class=" p-3 border-bottom border-2 ">${arrayCk[arrayCk.length-1][10]}</h2>
        <form action="" name="formulario" method="get" class="row g-3 p-3 mb-2  text-emphasis-dark">

            <div id="ck_formulario" class="col-md-4 ">
                <label for="inputnombre" class="form-label"></label>
                <input type="text" class="form-control" id="ck_inputnombre" value=${localStorage.getItem("nombre")} placeholder="${arrayCk[arrayCk.length-1][11]}">
            </div>
            <div class="col-md-4">
                <label for="inputapellidos" class="form-label"></label>
                <input type="text" class="form-control" id="ck_inputapellidos" value=${localStorage.getItem("apellidos")}  placeholder="${arrayCk[arrayCk.length-1][12]}">
            </div>
            <div class="col-md-4">
                <label for="inputTl" class="form-label"></label>
                <input type="text" class="form-control" id="ck_inputTl" value=${localStorage.getItem("telefono")}  placeholder="${arrayCk[arrayCk.length-1][13]}">
            </div>
            <div class="col-md-4">
                <label for="inputCity" class="form-label"></label>
                <input type="text" class="form-control" id="ck_inputCity" value=${localStorage.getItem("ciudad")}  placeholder="${arrayCk[arrayCk.length-1][14]}">
            </div>
            <div class="col-md-4">
                <label for="inputdirecion" class="form-label"></label>
                <input type="text" class="form-control" id="ck_inputdireccion" value=${localStorage.getItem("direccion")}  placeholder="${arrayCk[arrayCk.length-1][15]}">
            </div>
            <div class="col-md-4">
                <label for="inputCp" class="form-label"></label>
                <input type="text" class="form-control" id="ck_inputCp"value=${localStorage.getItem("cp")}  placeholder="${arrayCk[arrayCk.length-1][16]}">
            </div>
            <div class="col-md-6">
                <label for="inputEmail" class="form-label"></label>
                <input type="email" class="form-control" id="ck_inputEmail" value=${localStorage.getItem("gmail")}  placeholder="${arrayCk[arrayCk.length-1][17]}">
            </div>
            <div class="col-md-6">
                <label for="inputPassword" class="form-label"></label>
                <input type="password" class="form-control" id="ck_inputPassword" value=${localStorage.getItem("pass")}  placeholder="${arrayCk[arrayCk.length-1][18]}">
            </div> 
        </form>
    </section>

    <section id="metodos-pago">

        <h2 class=" p-3 border-2 border-bottom">${arrayCk[arrayCk.length-1][19]}</h2>

        <div class="accordion accordion-flush p-3 mb-2" id="accordionFlushExample">
            <div class="accordion-item p-3 mb-2 ">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    ${arrayCk[arrayCk.length-1][20]} <i class="fa-regular fa-credit-card px-3"></i>
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body ">
                        <form action="#" class="credit-card-div ">
                            <div class="panel panel-default" >
                                <div class="row ">
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" placeholder="${arrayCk[arrayCk.length-1][21]}"/>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-md-4 col-sm-4 col-xs-4">
                                        <span class="help-block text-muted small-font " > ${arrayCk[arrayCk.length-1][22]}</span>
                                        <input type="text" class="form-control" placeholder="${arrayCk[arrayCk.length-1][23]}" />
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-4">
                                        <span class="help-block text-muted small-font" >  ${arrayCk[arrayCk.length-1][24]}</span>
                                        <input type="text" class="form-control" placeholder="${arrayCk[arrayCk.length-1][25]}" />
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-xs-3">
                                        <span class="help-block text-muted small-font" >  ${arrayCk[arrayCk.length-1][26]}</span>
                                        <input type="text" class="form-control" placeholder="${arrayCk[arrayCk.length-1][27]}" />
                                    </div> 
                                            
                                </div>
                                <div class="row ">
                                    <div class="col-md-12 pad-adjust"><br>
                                        <input type="text" class="form-control" placeholder="${arrayCk[arrayCk.length-1][28]}" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 pad-adjust">
                                        <div class="checkbox">
                                            <label>
                                                <input id="ck_pagorapido" type="checkbox" checked class="text-muted"> ${arrayCk[arrayCk.length-1][29]}<a href="#"> </a>
                                            </label>
                                        </div>
                                    </div>
                                    <br>
                                    <div class=" mx-auto">
                                        <img src="img/tarjetas.png" alt="">
                                    </div> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="accordion-item p-3 mb-2">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    ${arrayCk[arrayCk.length-1][30]} <img id="ck_imgBizum" class="m-3" src="img/bizum.png"   alt="">
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="col-md-6 ">
                            <label for="inputbizum" class="form-label"></label>
                            <input type="text" class="form-control " id="inputbizum" placeholder="${arrayCk[arrayCk.length-1][31]}">
                
                        </div><br>
                        <h6 class="">${arrayCk[arrayCk.length-1][32]}</h6><br>
                    <!-- <button id="ck_btn-Bizum" type="button" class="btn btn-info  ">Continuar la Compra</button>-->
                    </div>
                </div>
            </div>
            <div class="accordion-item p-3 mb-2 ">
                <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    ${arrayCk[arrayCk.length-1][33]} <i class="fa-brands fa-cc-paypal px-3"></i>
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingTree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <form class="row g-3 p-3 mb-2  col-md-6">
                            <div class="col-12 mx-auto">
                                <label for="inputEmail" class="form-label"></label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="${arrayCk[arrayCk.length-1][34]} ">
                            </div>
                            <div class="col-12 mx-auto text-center">
                                <label for="inputPassword" class="form-label"></label>
                                <input type="password" class="form-control" id="inputPassword" placeholder="${arrayCk[arrayCk.length-1][35]} "> <br>
                                <!--<button id="ck_btn-Paypal" type="button" class="btn btn-info mx-auto ">Continuar la Compra</button>-->
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </div>
    <div class="col-md-5">
    <section id="cupon">
        <div class="accordion-body mx-4">${arrayCk[arrayCk.length-1][36]} 
            <label for="inputcupon" class="form-label m-4"></label>
            <input type="text" class="form-control " id="inputcupon"  placeholder="${arrayCk[arrayCk.length-1][37]} ">
        </div>
    </section>

    <section id="resumen-pedido">
        <h5 class="h4 pb-2 mb-4 text-dark border-bottom border-munder m-4">${arrayCk[arrayCk.length-1][38]} </h5>
        <ul>
            <li class="list-group-item">${arrayCk[arrayCk.length-1][39]}  <span id="ck_producto" value = ${totalProd} class="badge text-bg-secondary m-3 px-4"> ${totalProd} </span>€</li>
            <li class="list-group-item">${arrayCk[arrayCk.length-1][40]}  <span id="ck_ge" class="badge text-bg-secondary m-3 px-4">0</span>€</li>
            <li class="list-group-item">${arrayCk[arrayCk.length-1][41]}  <span id="ck_dto" value = 0 class="badge text-bg-secondary m-3 px-4">0</span>€</li>
            <li class="list-group-item"><strong>${arrayCk[arrayCk.length-1][42]}  <span id="ck_total" class="badge text-bg-secondary m-3  px-4">0</span>€</li>
        </ul>

    </section>
    <section id="boton-pedido d-flex justify-content-center" class="m-4">
        <a id="ck_btnpedido"  href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> ${arrayCk[arrayCk.length-1][43]} </a>

        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"> ${arrayCk[arrayCk.length-1][44]}</h5>
                        <a href="index.html"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></a>
                    </div>
                    <div class="modal-body">
                    ${arrayCk[arrayCk.length-1][45]}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>`
    eventoRadios()
    eventoCupones(arrayCk[arrayCk.length-1][46])
    eventoTramitarPedido()

}

function eventoRadios(){
    let radios= document.getElementsByClassName("radio")
    for (let i=0; i< radios.length; i++){
        radios[i].addEventListener("change", ()=>{
           let gastosE= gastosDeEnvio(radios)
            totalGastos(gastosE)
        })
    }

}

function eventoCupones(frase){
    let cupon = document.getElementById("inputcupon")
    cupon.addEventListener("keyup",(event)=>{
    
        calcularDescuentos(frase, cupon, event)
    })
}

function gastosDeEnvio(radios){
    
    let gastosE = document.getElementById("ck_ge")

    if (radios[0].checked)
    {
        gastosE.innerHTML="0"
        gastosE.value= parseFloat(0)
    }
    else if (radios[1].checked)
    {
        gastosE.innerHTML="10"
        gastosE.value= parseFloat(10)
        
    }
    else
    {
        gastosE.innerHTML="20"
        gastosE.value= parseFloat(20)

    }

    return gastosE
}

function totalGastos(gastosE){

    //sumar y restar al total
    let totatP = document.getElementById("ck_producto")
    let descuento = document.getElementById("ck_dto")
    let total = document.getElementById("ck_total")
    let totalPagar = parseFloat(gastosE.value)+parseFloat (totatP.getAttribute("value"))-parseFloat(descuento.getAttribute("value"))
    total.innerHTML = totalPagar
    total.value = totalPagar 
}

function calcularDescuentos( frase, cupon, event){

    let totatP = document.getElementById("ck_producto")
    let suma = parseFloat(totatP.getAttribute("value"))
    let descuento = document.getElementById("ck_dto")
    let total = document.getElementById("ck_total")
    let codigoIVA= "250X"
    //let codigo3Prod= "300X" esto seria para mejora

    let dtoT 
    if(cupon.value==codigoIVA && event.code === "KeyX"){
        let dto = 0.21
        dtoT = parseInt(suma * dto) 
        
    }else if(cupon.value!=codigoIVA && event.code === "KeyX") {
        alert(frase)
        dtoT=0
    }else{
        dtoT=0
    }

    descuento.innerHTML = dtoT
    descuento.setAttribute("value",dtoT)
    let dtoTotal = totatP.getAttribute("value") - dtoT
    total.setAttribute("value",dtoTotal)
    total.innerHTML= dtoTotal
}


function eventoTramitarPedido(){
    let boton=document.getElementById("ck_btnpedido")
    boton.addEventListener("click",()=>{
        limpiarBD()
        localStorage.setItem("cantCarrito",0)
        cantidadDelIconoCarritoCorazon("cantCarrito")
    })
}

function limpiarBD(){
    let productos= cargarDelLocalStorage()
    productos.forEach((p)=>{
        p.cantidad=0
    })
    cargarLocalStorage(productos)

}






