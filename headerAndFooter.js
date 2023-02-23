
let idiomaSelect= localStorage.getItem("idioma")
    if(idiomaSelect==null){
        idiomaSelect="Español";
    }
   
iniciarHeaderAndFooter()


function iniciarHeaderAndFooter(){
    cargarBD(idiomaSelect)
    let arrayM=cambiarIdioma(idiomaSelect,[],[],[])
    cargarMenu(arrayM,idiomaSelect)
    cargarFooter(arrayM)
}

function cargarMenu(arrayM,idiomaSelect){

    let header= document.getElementsByTagName("header")[0]
    header.innerHTML = `
    <nav class="navbar text-white navbar-expand-lg navbar navbar-dark bg-dark">

        <div class="container-xl">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div id="logo"></div>
        <a  href="addproduct.html" id="vender_prod" class="btn mt-4"> ${arrayM[22]}</a>
        <div id="navbarNav" class="collapse navbar-collapse justify-content-around" >
            <ul id="menu-interior"class="navbar-nav justify-content-around"">
                <li id="inicio" class="nav-item pt-3">
                    <a class="nav-link actived" href="index.html">${arrayM[0]}</a>
                </li>
                <li id="catalogo" class="nav-item pt-3 ">
                    <a class="nav-link actived" href="catalogo.html ">${arrayM[2]}</a>
                </li>
                
                <li id="m-ofertas" class="nav-item pt-3">
                    <a class="nav-link actived" href="#Ofertas">${arrayM[4]}</a>
                </li>

            </ul>
        </div>


            <ul id="menu-iconers"class="nav flex-row pt-4 justify-content-around">
            
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle d-flex flex-row" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <p id="idio-select" value="espanol" class="">${idiomaSelect}</p>
                            <i class="fa-solid fa-earth-americas ms-1 "></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li value="espanol"><a value="espanol" class=" idioma px-1 py-1 dropdown-item" href="#">Español</a></li>
                        <li value="ingles"><a value="ingles" class=" idioma px-1 py-1 dropdown-item" href="#">Inglés</a></li>
                    </ul>
                </li>
                <div class="d-flex flex-column aling-items-center p-2">
                    <li ><a id="login" href="login.html"><i class="fa-regular fa-circle-user"></i></a></li>

                    <div class="ventana" id="ven" style="background-color: trasparent; width: 4rem;height: 1.5rem; color: black; display: none;">
                        <span id="cerrar">${arrayM[21]}<span> 

                    </div>
                </div>                  

                <li ><a href="favoritos.html"><i class="fa-solid fa-heart p-2"></i></a><span id="cantFav" class="cantidad-fav" value="0">${localStorage.getItem("cantFav") !=null? localStorage.getItem("cantFav"):0 }</span></li>
                <li ><a href="carrito.html"><i class=" fa-solid fa-cart-shopping p-2"></i></a><span id="cantCarrito" class="cantidad-carrito" value="0">${localStorage.getItem("cantCarrito") !=null? localStorage.getItem("cantCarrito"):0 } </span></li>
                
            </ul>  
        </div>
    </nav>
    <div class="d-flex flex-row justify-content-around">
        <p id="frase_imaginacion">${arrayM[5]}</p>
        
    </div>
    
    
    `
    eventoCambiarIdioma()
    validarLogin()
    
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
                <div class="col-md-4 col-12">
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
            
            <div class="row">
                
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4">
                    <div class="d-flex flex-colum flex-wrap">
                        <a class="text-white col-12 text-md-start p-1" href="">${arrayM[3+6]}</a>
                        <a class="text-white col-12 text-md-start p-1" href="">${arrayM[4+6]}</a>
                        <a class="text-white col-12 text-md-start p-1" href="">${arrayM[5+6]}</a>
                        <a class="text-white col-12 text-md-start p-1" href="">${arrayM[6+6]}</a>
                        
                    </div>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mt-4">${arrayM[9+6]}</h6>
                    <div class="d-flex flex-row flex-wrap justify-content-center" style="width: 100%;">
                        <div id="appel-store"></div>
                        <div id="play-store"></div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div id="copyright" class="text-center p-3">
            <a class="text-white" href="">CompTech.com</a>
        </div>
    `
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
    window.location.href="index.html"
})
}


