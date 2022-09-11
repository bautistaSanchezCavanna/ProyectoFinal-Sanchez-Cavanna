let sumarJugador = document.getElementById("btnAgregarJugador");
let limpiar = document.getElementById("datosJugador");
let btnBuscarNombre = document.getElementById("btnBuscarNombre");
let btnBuscarPosicion = document.getElementById("btnBuscarPosicion");
let btnBuscarPais = document.getElementById("btnBuscarPais");
let nombreLista = document.getElementById("guardarLista");
let guardar = document.getElementById("btnGuardarLista");
let filtroA = document.getElementById("filtracionPosicion");
let filtroB = document.getElementById("filtracionPais");
let filtroPais = document.getElementById("buscarPais");
let select = document.getElementById("pedirPais");
let selector = document.getElementById("esquema");
let botonEsquema = document.getElementById("esquemaOK");
let contenedor = document.getElementById("formacion");
let listas = document.getElementById("contenedorListas");
let boton = document.getElementById("btnLista");

const arrayJugadores = [];

function Jugador(nombre, posicion, numCamiseta, pais) {
  this.nombre = nombre;
  this.posicion = posicion;
  this.numCamiseta = parseInt(numCamiseta);
  this.pais = pais;
}

function agregarJugador() {
  const nuevoJugador = new Jugador(
    pedirNombre.value,
    pedirPosicion.value,
    pedirNumero.value,
    pedirPais.value
  );
  arrayJugadores.push(nuevoJugador);

  for (const jugador of arrayJugadores) {
    if (jugador.nombre == pedirNombre.value) {
      let lista = document.getElementById("mundial");
      let fila = `<li class="py-1">${jugador.nombre} (${jugador.numCamiseta}) | ${jugador.posicion} | <img class="px-1" width="60px" height= "33px" src="https://countryflagsapi.com/png/${jugador.pais}"></img></li>`;
      lista.innerHTML += fila;
    }
  }

  Swal.fire({
    position: "center",
    icon: "success",
    title: `${pedirNombre.value} se agregó a la lista`,
    showConfirmButton: false,
    timer: 1100,
  });
  limpiar.reset();
}

function buscarJugador() {
  const jugadorABuscar = arrayJugadores.some(
    (jugador) => jugador.nombre === buscarNombre.value
  );
  if (jugadorABuscar == true) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${buscarNombre.value} está en la lista de convocados.`,
      showConfirmButton: true,
    });
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: `${buscarNombre.value} no está en la lista.`,
      showConfirmButton: true,
    });
  }
}

function buscarXPosicion() {
  filtroA.innerHTML = "";
  for (const jugador of arrayJugadores) {
    if (jugador.posicion == buscarPosicion.value) {
      const buscarLaPosicion = arrayJugadores.filter(
        (jugador) => jugador.posicion === buscarPosicion
      );
      let lista = `<li>${jugador.nombre} (${jugador.numCamiseta}) | ${jugador.posicion}</li>`;
      filtroA.innerHTML += lista;
    }
  }
}

function buscarXPais() {
  filtroB.innerHTML = "";
  for (const jugador of arrayJugadores) {
    if (jugador.pais == buscarPais.value) {
      const buscarLaPosicion = arrayJugadores.filter(
        (jugador) => jugador.pais === buscarPais
      );
      let lista = `<li class="py-1">${jugador.nombre} (${jugador.numCamiseta}) | <img class="px-1" width="60px" height= "33px" src="https://countryflagsapi.com/png/${jugador.pais}"></img>`;
      filtroB.innerHTML += lista;
    }
  }
}

function guardarLista() {
  localStorage.setItem(nombreLista.value, JSON.stringify(arrayJugadores));
  Swal.fire({
    position: "center",
    icon: "success",
    title: `La lista "${nombreLista.value}" se guardó correctamente`,
    showConfirmButton: true,
  });
}

function mostrarListas(){
    listas.innerHTML = "";
    for(let i=0; i<localStorage.length; i++){
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        let parseado = JSON.parse(valor);
        let crear = `<h4 class="border-top my-2 pt-1">Nombre de la lista: "${clave}"</h4>`;
        listas.innerHTML += crear;
        parseado.forEach(player => {
            let jugador = `<li class="py-1">${player.nombre} (${player.numCamiseta}) | ${player.posicion} | <img class="px-1" width="60px" height= "33px" src="https://countryflagsapi.com/png/${player.pais}"></img></li>`;
            contenedorListas.innerHTML += jugador;
        });
        
    }
  
}

function crearFormacion() {
  contenedor.innerHTML = "";
  if (selector.value == 433) {
    let formacion = `<div class="d-flex justify-content-center my-5"><input type="text" name="" id="aAR"></div>
    <div class="d-flex justify-content-between gap-4 my-5">
        <input type="text" name="" id="aLD">
        <input type="text" name="" id="aCD">
        <input type="text" name="" id="aCI">
        <input type="text" name="" id="aLI">
    </div>
    <div class="d-flex justify-content-center my-5">
        <input type="text" name="" id="aMCD">
    </div>
    <div class="d-flex justify-content-evenly gap-2 my-5">
        <input type="text" name="" id="aMvI">
        <input type="text" name="" id="aMVD"> 
    </div>
    <div class="d-flex justify-content-between gap-5 my-5">
        <input type="text" name="" id="aED">
        <input type="text" name="" id="aEI">
    </div>
    <div class="d-flex justify-content-center my-5">
        <input type="text" name="" id="aDC">
    </div>`;
    contenedor.innerHTML += formacion;
  } else if (selector.value == 442) {
    let formacion = `<div class="d-flex justify-content-center my-5"><input type="text" name="" id="bAR"></div>
        <div class="d-flex justify-content-between gap-4 my-5">
            <input type="text" name="" id="bLD">
            <input type="text" name="" id="bCD">
            <input type="text" name="" id="bCI">
            <input type="text" name="" id="bLI">
        </div>
        <div class="d-flex justify-content-between gap-4 my-5">
            <input type="text" name="" id="bMCD">
            <input type="text" name="" id="bMvI">
            <input type="text" name="" id="bMVD"> 
            <input type="text" name="" id="bED">
        </div>
        <div class="d-flex justify-content-evenly gap-2 my-5">
            <input type="text" name="" id="bDC">
            <input type="text" name="" id="bEI">
        </div>`;
    contenedor.innerHTML += formacion;
  } else {
    let formacion = `<div class="d-flex justify-content-center my-5"><input type="text" name="" id="cAR"></div>
        <div class="d-flex justify-content-evenly gap-2 my-5">
            <input type="text" name="" id="cLD">
            <input type="text" name="" id="cCD">
            <input type="text" name="" id="cCI">
        </div>
        <div class="d-flex justify-content-between gap-4 my-5">
            <input type="text" name="" id="cMCD">
            <input type="text" name="" id="cMvI">
            <input type="text" name="" id="cMVD"> 
            <input type="text" name="" id="cED">
        </div>
        <div class="d-flex justify-content-evenly gap-3 my-5">
            <input type="text" name="" id="aED">
            <input type="text" name="" id="aEI">
        </div>
        <div class="d-flex justify-content-center my-5">
            <input type="text" name="" id="aDC">
        </div>
        `;
    contenedor.innerHTML += formacion;
  }
}

const crearSelectPaises = async (contenedor) => {
  const respuesta = await fetch(
    "https://battuta.medunes.net/api/country/all/?key=af8ef6f617bb6ca28b7763b42d5d7b9e"
  );
  const codigos = await respuesta.json();
  for (const pais of codigos) {
    let option = `<option value="${pais.code}">${pais.name}</option>`;
    contenedor.innerHTML += option;
  }
};

crearSelectPaises(select);
crearSelectPaises(filtroPais);

sumarJugador.addEventListener("click", agregarJugador);

btnBuscarNombre.addEventListener("click", buscarJugador);

btnBuscarPosicion.addEventListener("click", buscarXPosicion);

btnBuscarPais.addEventListener("click", buscarXPais);

guardar.addEventListener("click", guardarLista);

botonEsquema.addEventListener("click", crearFormacion);

boton.addEventListener("click", mostrarListas);




