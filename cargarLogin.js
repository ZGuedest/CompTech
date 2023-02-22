 

iniciarLogin(idiomaSelect)
function iniciarLogin(idiomaSelect){
  const lgnEsp = ["regresar","Deja tu imaginación volar... sientre la música","Por favor entre los datos de su cuenta","correo","contraseña","Entrar","¿Has olvidado tu contraseña?","Si no tienes cuenta","Regístrate","Somos más que una empresa","Somos un grupo de entusiastas de la música que tiene la suerte de compartir su pasión con personas afines, guiando, aconsejando y también aprendiendo de nuestros clientes. Bienvenidos a nuestra familia: !Viva la música!", "Nombre", "Apellidos","Teléfono", "Correo", "Contraseña","Ciudad", "Dirección","Acepto los terminos y condiciones","Registrarse", "C.P", "datos incorrectos","Datos registrados con éxito, puede iniciar sesión" ]
  const lgnEng = ["back","Let your imagination fly... feel the music","Please enter your account information","email","password","Log_in","Have you forgotten your password?"," If you don't have an account","Register","We are more than a company","We are a group of music enthusiasts lucky enough to share their passion with like-minded people, guiding, advising and also learning from our customers. Welcome to our family: Long live the music!", "First Name", "Last Name", "Phone", "Mail", "Password","City", "Address","I accept the terms and conditions","Register", "ZIP","Incorrect data", "Data recorded successfully, you can log in"]
  const lgnEus = ["itzuli","Utzi zure irudimena hegan egiten... sentitu musika","Mesedez sartu zure kontuaren informazioa","posta elektronikoa","pasahitza","Sartu","Pasahitza ahaztu al duzu?","Ez baduzu 'ez daukazu konturik","Erregistratu","Enpresa bat baino gehiago gara","Musika zaleen talde bat gara bere pasioa gogokoekin partekatzeko zortea, gure bezeroak gidatuz, aholkatuz eta baita ikasten ere. Ongi etorri gure familiara: Bizi musika!", "Izena","Abizenak","Telefonoa","Posta elektronikoa","Pasahitza", "Hiria", "Helbidea","Baldintzak eta terminoak onartzen ditut","Erregistratzea", "ZIP","Datu okerrak" ,"Arrakastaz erregistratutako datuak, saioa has dezake"]

  let arrayLog=cambiarIdioma(idiomaSelect, lgnEsp, lgnEng, lgnEus)

  let usuariosRegistrados=[{
    "gmail":"prueba@gmail.com",
    "contraseña":"1234",
    "admin":"true"
  },
  {
    "gmail":"paquita@gmail.com",
    "contraseña":"5678",
    "admin":"false"
  }]


  let idioma=  idiomaFecha()
  let date = new Date();
  let dia = date.toLocaleString(idioma, {weekday: 'long'});
  let mes =date.toLocaleString(idioma+ '-'+idioma, { month: 'long' })
  cargarLogin(idiomaSelect,arrayLog,date, dia, mes)
  eventoRegistrarse()
}


function cargarLogin(idiomaSelect,arrayLog, date, dia, mes){

  
  let caja = document.getElementById("lg_fondo");
  caja.innerHTML = `
        
          <nav class="navbar navbar-expand-lg navbar-light">

            <ul class="container-xl nav justify-content-around">          
                  <li><a href="Index.html"><i class="fa-solid fa-arrow-left">  ${arrayLog[arrayLog.length-1][0]} </i></a> </li>
                  <li ><p id="fecha" class="pt-4"> ${dia} <span id="hora"></span>${mes} - ${date.getFullYear()} </p></li>
                  <li > 
                    <div class="dropdown ">
                      <button class="btn btn-secondary d-flex flex-row text-center align-items-center dropdown-toggle bg-transparent border-0 text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <p id="idio-select" value="espanol" class="pt-3">${idiomaSelect} </p>
                          <i class="fa-solid fa-earth-americas text-dark ms-1"></i>
                      </button>
                      <ul class="dropdown-menu">
                          <li value="espanol"><a value="espanol" class=" idioma px-1 py-1 dropdown-item" href="#">Español</a></li>
                          <li value="ingles"><a value="ingles" class=" idioma px-1 py-1 dropdown-item" href="#">Inglés</a></li>
                          <li value="euskera"><a value="euskera" class=" idioma px-1 py-1 dropdown-item" href="#">Euskera</a></li>
                      </ul>
                    <div>
                  </li>                

              </ul>  
          </nav>

        <div class="text-center">
          <img src="img/logo.png"
            style="width: 185px;" alt="logo">
          <h2 id="frase-imaginacion" class="mt-1 mb-5 pb-1">"${arrayLog[arrayLog.length-1][1]}"</h2>
        </div>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div id="caja" class="row g-0">
                <div class="col-lg-6">
                  <div id="" class="card-body p-md-5 mx-md-4">
                    <form id="form_login">
                      <p>${arrayLog[arrayLog.length-1][2]}</p>
    
                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example11" class="form-control"
                          placeholder=${arrayLog[arrayLog.length-1][3]} pattern=".+@gmail.com" required/>
                        <label class="form-label" for="form2Example11"></label>
                      </div>
    
                      <div class="form-outline mb-4">
                        <input type="password" id="form2Example22" class="form-control"  placeholder=${arrayLog[arrayLog.length-1][4]} />
                        <label class="form-label" for="form2Example22"></label>
                      </div>
    
                      <div class="text-center pt-1 mb-5 pb-1">
                        <input class="btn" type="submit" id="button" value=${arrayLog[arrayLog.length-1][5]}> 
                        <a class="text-muted" href="#!">${arrayLog[arrayLog.length-1][6]}</a>
                      </div>
    
                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">${arrayLog[arrayLog.length-1][7]}</p>
                       <a id="btn_form_registro" href=""> <button type="button" class="btn">${arrayLog[arrayLog.length-1][8]}</button></a>
                      </div>
    
                    </form>

                    <form id="form_registro">
                        <input id="nombre" type="text" class="form-control mb-4 " id="rg_inputnombre" placeholder=${arrayLog[arrayLog.length-1][11]} required> 
                        <input id="apellidos" type="text" class="form-control mb-4" id="rg_inputapellidos" placeholder=${arrayLog[arrayLog.length-1][12]} required>
                        <input id="telefono" type="text" class="form-control mb-4" id="rg_inputTl" placeholder=${arrayLog[arrayLog.length-1][13]} required>
                        <input id="gmail" type="email" class="form-control mb-4" id="rg_inputEmail" placeholder=${arrayLog[arrayLog.length-1][14]} required>
                        <input id="pass" type="password" class="form-control mb-4" id="rg_inputPassword" placeholder=${arrayLog[arrayLog.length-1][15]} required>
                        <div class="d-flex flex-row">
                          <input id="ciudad" type="text" class="form-control mb-4 mx-1 " id="rg_inputCity" placeholder=${arrayLog[arrayLog.length-1][16]} required>
                          <input id="cp" type="text" class="form-control mb-4" my-1 id="rg_inputcp" placeholder=${arrayLog[arrayLog.length-1][20]} required>
                        </div>
                        <input id="direccion" type="text" class="form-control mb-4" id="rg_inputdireccion" placeholder=${arrayLog[arrayLog.length-1][17]} required>
                        <div class="form-check d-flex justify-content-center mb-4">
                          <input class="form-check-input me-2" type="checkbox" value=${arrayLog[arrayLog.length-1][18]} id="form2Example33" checked/ required>
                          <label class="form-check-label" for="form2Example33">
                            Acepto los terminos y condiciones
                          </label>
                        </div>
                        <input class="btn" type="submit" id="button2" value=${arrayLog[arrayLog.length-1][19]}> 

    
                    </form>
    
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="px-3 py-4 mx-md-4">
                    <h4 class="mb-4">${arrayLog[arrayLog.length-1][9]}</h4>
                    <p class="small mb-0">${arrayLog[arrayLog.length-1][10]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `
        eventoCambiarIdioma()
        eventoLogin(arrayLog)
        GuardarDatosRegistro(arrayLog)

}

function eventoLogin(arrayLog){

  let btn= document.getElementById("button")
  btn.addEventListener("click", (event)=>{

    event.preventDefault()
    validarPassword (arrayLog)
})

}




function validarPassword (arrayLog){

    let email, password

    email = document.getElementById("form2Example11").value;
    password = document.getElementById("form2Example22").value;

    let emailLocalS= localStorage.getItem("gmail")
    let passLocal= localStorage.getItem("pass")

    if ((email == "prueba@gmail.com" && password == "1234")|| (email == emailLocalS && password == passLocal)){
        localStorage.setItem('gmail',email);
        localStorage.setItem('pass',password);
        window.location.assign ("Index.html");
    }else{
        alert (arrayLog[arrayLog.length-1][21])

    }

}


function eventoRegistrarse(){
  let br= document.getElementById("btn_form_registro")
  br.addEventListener("click", (event)=>{
    event.preventDefault()
    debugger
    let form_registro= document.getElementById("form_registro")
    let form_login= document.getElementById("form_login")

      form_registro.style.display = "block";
      form_login.style.display = "none";


  })
}


function GuardarDatosRegistro(arrayLog){
  let b= document.getElementById("button2")
  b.addEventListener("click",()=>{
    debugger
      let aux= document.getElementById("nombre").value
      localStorage.setItem("nombre",aux)
      
      aux= document.getElementById("apellidos").value
      localStorage.setItem("apellidos",aux)

      aux= document.getElementById("telefono").value
      localStorage.setItem("telefono",aux)

      aux= document.getElementById("gmail").value
      localStorage.setItem("gmail",aux)

      aux= document.getElementById("pass").value
      localStorage.setItem("pass",aux)

      aux= document.getElementById("ciudad").value
      localStorage.setItem("ciudad",aux)

      aux= document.getElementById("cp").value
      localStorage.setItem("cp",aux)

      aux= document.getElementById("direccion").value
      localStorage.setItem("direccion",aux)
      alert(arrayLog[arrayLog.length-1][22])

  })
}

