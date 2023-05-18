'use strict';

let boton = document.querySelector("#btn");
boton.addEventListener("click", hagregar);





let valores = [];

function hagregar() {

let tareas = document.querySelector("#tarea").value;
if (valores.length < 10) {
valores.push(tareas);
console.log(valores);

}

let lista = document.querySelector("#lista");
lista.innerHTML += "<li>" + tareas + "</li>"

}




