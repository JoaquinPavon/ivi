'use strict';

document.querySelector("#btn").addEventListener("click", borrar);


function borrar() {

let parrafos = document.querySelectorAll("p");


parrafos[parrafos.length-1].remove();

}

