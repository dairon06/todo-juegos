const doc = document;
const lista = doc.querySelector("#lista");
const elemento = doc.querySelector("#elemento");
const input = doc.querySelector("#input");
const botonEnter = doc.querySelector("#boton-enter");
const check = "fa-check-circle";
const uncheck = "fa-circle";
const lineThrough = "line-through";
let id = 0;
let LIST = [];

let juegos = "";
fetch("https://list-games-dev-zftc.2.us-1.fl0.io/juegos", {
  method: "GET",
  headers: {
    "content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach((juego) => {
      juegos += `<li id="elemento">
  <i class="far " data="realizado" id=""></i>
  <p class="text ">${juego.nombre}</p>
  <lord-icon class="i" src="https://cdn.lordicon.com/jmkrnisz.json" trigger="hover" state="hover-empty" style="width: 30px; height: 30px" data="eliminado" id=""></lord-icon> </li>`;
    });
    lista.innerHTML = juegos;
  });