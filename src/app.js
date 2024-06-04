import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "Mi perro",
  "Mi mamá",
  "El vecino",
  "La maestra",
  "Mi tia",
  "La cajera",
  "El verdulero"
];
let action = [
  "comió",
  "pisó",
  "quebró",
  "rompió",
  "perdió",
  "desapareció",
  "se llevó"
];
let what = [
  "mi tarea",
  "mi celular",
  "nuestro auto",
  "mi tarjeta",
  "mis documentos",
  "mi comida"
];
let when = [
  "en la clase",
  "mientras yo dormia",
  "cuando yo estaba en el gimnasio",
  "mientras yo almorzaba",
  "cuando yo estaba estudiando",
  "mientras yo estaba en una reunión"
];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
