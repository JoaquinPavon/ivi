'use strict';
document.querySelector("#btn").addEventListener("click",agregar);
document.querySelector("#btnpromediar").addEventListener("click",sumar);



let notas = [];
function agregar (e) {
e.preventDefault();
let data = new FormData(form);
let nota = data.get('nota');

notas.push(nota);
console.log(notas);
document.querySelector("#mostrar").innerHTML += "<li>" +nota+ "</li>";

}

let promedio = 0;
let suma = 0;






function sumar(e) {
e.preventDefault();
let data = new FormData(form);
let nota = data.get('nota');
for (let i = 0; i < notas.length; i++) {
suma+=parseInt(nota);
console.log(suma);
}

let promedio = suma/parseInt(notas.length);

console.log(promedio);

}

