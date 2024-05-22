let capchaValor = crearCapcha();

//let btnGenerarCapcha = document.getElementById("buttonGenerarCapcha");
//btnGenerarCapcha.addEventListener('click', crearCapcha);

let btnGenerarCapcha = document.getElementById("buttonGenerarCapcha");
btnGenerarCapcha.addEventListener("click", () => {
  capchaValor = crearCapcha();
});

//console.log(typeof capchaValor);

function crearCapcha() {
  const CHARS =  "asvcsfbed23355b2144543de12sqa2242dfcda2ed23dd23245gkr123211cniswijfwrofey1383ede";
  const NUMERO = 6;
  let capcha = "";

  for (let i = 0; i < NUMERO; i++) {
    capcha += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }

  let mostrarCapcha = document.getElementById("mostrarCapcha");
  let span = document.createElement("span");
  span.innerHTML = capcha;
  mostrarCapcha.innerHTML = "";
  mostrarCapcha.appendChild(span);

  return capcha;
}

let formPrincipal = document.getElementById("formPrincipal");
formPrincipal.addEventListener("submit", verificar);

function verificar(e) {
  e.preventDefault();
  let Data = new FormData(formPrincipal);
  //  let nombre = Data.get('nombre');
  // let apellido = Data.get('apellido');
  //   let email = Data.get('email');
  //  let contraseña = Data.get('contraseña');
  let capchaIngresado = String(Data.get("capchaIngresado"));

  //  console.log(nombre, apellido, email, contraseña, capchaIngresado);

  // console.log(typeof capchaIngresado);

  let capchaIsValid = document.getElementById("capchaIsValid");
  console.log(capchaValor + "VALOR DEL CAPCHA");
  console.log(capchaIngresado + "CAPCHA INGRESADO");

  if (capchaIngresado === capchaValor) {
    capchaIsValid.innerHTML = "CAPCHA ES VALIDO";
    console.log("EL CAPCHA ES VALIDO");
    
  } else {
    capchaIsValid.innerHTML = "CAPCHA ES INVALIDO";
    console.log("EL CAPCHA ES INVALIDO");
    formPrincipal.reset();
  }
}
