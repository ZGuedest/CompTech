let idiomaSelect= localStorage.getItem("idioma")
    if(idiomaSelect==null){
        idiomaSelect="Español";
    }
   
iniciarHeaderAndFooter()
setInterval(mostrarFecha, 1000);


function iniciarHeaderAndFooter(){
    cargarBD(idiomaSelect)
    let idioma= idiomaFecha()
    let date = new Date();
    let dia = date.toLocaleString( idioma , {weekday: 'long'});
    let mes =date.toLocaleString( idioma + '-'+idioma, { month: 'long' })
    let arrayM=cambiarIdioma(idiomaSelect,[],[],[])
    cargarMenu(arrayM,idiomaSelect,dia,mes,date)
    cargarFooter(arrayM)
}

function cargarMenu(arrayM,idiomaSelect,dia,mes,date){

    let header= document.getElementsByTagName("header")[0]
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light">

        <div class="container-xl">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="logo"></div>

        <div id="navbarNav" class="collapse navbar-collapse justify-content-around" >
            <ul id="menu-interior"class="navbar-nav justify-content-around">
                <li id="inicio" class="nav-item pt-3">
                    <a class="nav-link" href="Index.html">${arrayM[0]}</a>
                </li>
                <li id="catalogo" class="nav-item pt-3">
                    <a class="nav-link" href="catalogo.html">${arrayM[2]}</a>
                </li>
                <li id="m-novedades" class="nav-item pt-3">
                    <a class="nav-link" href="#Novedades">${arrayM[3]}</a>
                </li>
                <li id="m-ofertas" class="nav-item pt-3">
                    <a class="nav-link" href="#Ofertas">${arrayM[4]}</a>
                </li>
            </ul>
        </div>


            <ul id="menu-iconers"class="nav flex-row pt-3 justify-content-around">
                        
                <li > <div class="dropdown ">
                    <button class="btn btn-secondary d-flex flex-row text-center align-items-center dropdown-toggle bg-transparent border-0 text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <p id="idio-select" value="espanol" class="pt-3">${idiomaSelect}</p>
                        <i class="fa-solid fa-earth-americas text-dark ms-1"></i>
                    </button>
                    <ul class="dropdown-menu" >
                        <li value="espanol"><a value="espanol" class=" idioma px-1 py-1 dropdown-item" href="#">Español</a></li>
                        <li value="ingles"><a value="ingles" class=" idioma px-1 py-1 dropdown-item" href="#">Inglés</a></li>
                        <li value="euskera"><a value="euskera" class=" idioma px-1 py-1 dropdown-item" href="#">Euskera</a></li>
                    </ul>
                </li>
                <div class="d-flex flex-column aling-items-center">
                    <li ><a id="login" href="login.html"><i class="pt-4 fa-regular fa-circle-user"></i></a></li>

                    <div class="ventana" id="ven" style="background-color: trasparent; width: 4rem;height: 1.5rem; color: black; display: none;">
                        <span id="cerrar">${arrayM[21]}<span> 

                    </div>
                </div>                  

                <li ><a href="favoritos.html"><i class="pt-4 fa-solid fa-heart"></i></a><span id="cantFav" class="cantidad-fav" value="0">${localStorage.getItem("cantFav") !=null? localStorage.getItem("cantFav"):0 }</span></li>
                <li ><a href="carrito.html"><i class="pt-4 fa-solid fa-cart-shopping"></i></a><span id="cantCarrito" class="cantidad-carrito" value="0">${localStorage.getItem("cantCarrito") !=null? localStorage.getItem("cantCarrito"):0 } </span></li>
                
            </ul>  
            <div <li ><p id="fecha" class="pt-4"> ${dia} <span id="hora"></span>${mes} -${date.getDate()}- ${date.getFullYear()} </p></li> </div>  
        </div>
    </nav>
    <div class="d-flex flex-row justify-content-around">
        <p id="frase_imaginacion">${arrayM[5]}</p>
        <div id="popap" style="width: 300px; height: 300px; display:none ">

        </div>
    </div>
    
    
    `
    eventoCambiarIdioma()
    validarLogin()
    crearPopap()
    cerrarPopap()
    
}

function cargarFooter(arrayM){

    let footer= document.getElementsByTagName("footer")[0]
    footer.innerHTML=`
        <h2>${arrayM[6]}</h2>
        <!-- Grid container -->
        <div class="container p-4">
            <!-- Section: Social media -->
            <section class="mb-4">
            <!-- Facebook -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-facebook-f"></i
            ></a>

            <!-- Twitter -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-twitter"></i
            ></a>

            <!-- Instagram -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-instagram"></i
            ></a>

            <!-- Linkedin -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-linkedin-in"></i
            ></a>
            </section>

            <!-- Section: Form -->
            <section class="">
            <form action="">
                <!--Grid row-->
                <div class="row d-flex justify-content-center">
                <!--Grid column-->
                <div class="col-auto">
                    <p class="pt-2">
                    <strong>${arrayM[7]}</strong>
                    </p>
                </div>
                

                <!--Grid column-->
                <div class="col-md-5 col-12">
                    <!-- Email input -->
                    <div class="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" placeholder="Email address" class="form-control" />
                    </div>
                </div>
                

                <!--Grid column-->
                <div class="col-auto">
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-outline-light mb-4">
                    ${arrayM[8]}
                    </button>
                </div>
                <!--Grid column-->
                </div>
                <!--Grid row-->
            </form>
            </section>
            <!-- Section: Form -->

            <!-- Section: Text -->
            <section class="mb-4">

            </section>
            

            <!-- Section: Links -->
            <section class="">
            <!--Grid row-->
            <div class="row">
                

                <!--Grid column-->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4">
                    <div class="d-flex flex-colum flex-wrap">
                        <a class="text-white col-12 text-md-start" href="">${arrayM[3+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[4+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[5+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[6+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[7+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[8+6]}</a>
                    </div>
                </div>
                <!--Grid column-->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mt-4">${arrayM[9+6]}</h6>
                    <div class="d-flex flex-row flex-wrap justify-content-around" style="width: 100%;">
                        <div id="appel-store"></div>
                        <div id="play-store"></div>
                    </div>
                    
                </div>

                <!-- Grid column -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">${arrayM[10+6]}</h6>
                    
                    <div class="d-flex flex-colum flex-wrap m-4">
                        <p class="col-12 text-md-start"><i class="fas fa-home me-3"></i>${arrayM[11+6]}</p>
                        <p class="col-12 text-md-start"><i class="fas fa-envelope me-3"></i>${arrayM[12+6]}</p>
                        <p class="col-12 text-md-start"><i class="fas fa-phone me-3"></i>+ 01 234 567 88</p>
                    </div>
                    
                </div>
                
            </div>
            <!--Grid row-->
            </section>
            <!-- Section: Links -->
        </div>

        <div id="copyright" class="text-center p-3">
            <a class="text-white" href="">${arrayM[14+6]}</a>
        </div>
    `
}

function idiomaFecha(){
    let idioma;
    if(idiomaSelect=="Español"){
        idioma="es"
    }
    else if( idiomaSelect=="Inglés"){
        idioma="en"
    }
    else if(idiomaSelect=="Euskera") {
        idioma="eu"
    }
    return idioma
}

module.exports = idiomaFecha

function mostrarFecha(){
    let d = new Date()
    let mm = d.getMinutes();
    let min = ("0" + mm).slice(-2);
    let ss = d.getSeconds();
    let seg = ("0" + ss).slice(-2);
    let hora= document.getElementById("hora")
    hora.innerHTML= "-"+d.getHours()+":"+min+"-"+seg+"-"
}

function validarLogin(){
    let black=document.getElementById("login");
    black.addEventListener('click',(event)=>{
        
        event.preventDefault()
    
        if(localStorage.getItem('gmail') ===" " || localStorage.getItem('gmail') == null){
            window.location.href="login.html"
        }else{
            cerrar();
        }
        
        
     });
}

function cerrar(){
    document.getElementById("ven").style.display="block";
    let cerrar= document.getElementById("cerrar")
    cerrar.addEventListener("click",()=>{
    localStorage.clear()
    localStorage.setItem('gmail'," ");
    window.location.href="Index.html"
})
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

