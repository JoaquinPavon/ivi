'use strict';

let btn = document.querySelector("#btn").addEventListener("click", jugar);


function jugar () {
let random = Math.floor(Math.random() * 36);
document.querySelector('#number').innerHTML = random;
let form = document.querySelector("#form");
let ingresado = document.querySelector("#ingresado").value;

if (parseInt(ingresado)===random) {

document.querySelector("#resultado").innerHTML = "Ganaste";
}

else {

document.querySelector("#resultado").innerHTML = "Perdiste";

}
form.reset();
}

