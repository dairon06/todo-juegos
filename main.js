import "./style.css";
const doc = document;
const lista = doc.querySelector("#lista");
const elemento = doc.querySelector("#elemento");
const input = doc.querySelector("#input");
const botonEnter = doc.querySelector("#boton-enter");
const check = "fa-check-circle";
const uncheck = "fa-circle";
const lineThrough = "line-through";
let id = 0;
const LIST = [];
let LIS;

// funcion de agregar juego

function agregarjuego(juego, id, realizado, eliminado) {
  if (eliminado) {
    return;
  }

  const REALIZADO = realizado ? check : uncheck;
  const LINE = realizado ? lineThrough : "";

  const elemento = `<li id="elemento">
                    <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                    <p class="text ${LINE}">${juego}</p>
                    <lord-icon class="i" src="https://cdn.lordicon.com/jmkrnisz.json" trigger="hover" state="hover-empty" style="width: 30px; height: 30px" data="eliminado" id="${id}"></lord-icon> </li>`;

  lista.insertAdjacentHTML("beforeend", elemento);
}

//funcion juego realizado
function juegoRealizado(element) {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector(".text").classList.toggle(lineThrough);
  LIST[element.id].realizado = LIST[element.id].realizado ? false : true;
}

//Funcion eliminar tarea
function juegoEliminado(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].eliminado = true
}



botonEnter.addEventListener("click", () => {
  const juego = input.value;
  if (juego) {
    agregarjuego(juego, id, false, false);
    LIST.push({
      nombre: juego,
      id: id,
      realizado: false,
      eliminado: false,
    });
  }
  input.value = "";
  id++;
});

doc.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    const juego = input.value;
    if (juego) {
      agregarjuego(juego, id, false, false);
      LIST.push({
        nombre: juego,
        id: id,
        realizado: false,
        eliminado: false,
      });
    }
    input.value = "";
    id++;
  }
});

lista.addEventListener("click", (event) => {
  const element = event.target;
  const elementData = element.attributes.data.value;
  if (elementData === "realizado") {
    juegoRealizado(element);
  } else if (elementData === "eliminado") {
    juegoEliminado(element);
  }
});
