'use strict';
// Funciones Math Random de los arreglo cargado.
let btn = document.querySelector("#btn").addEventListener("click", pizzas);
let btn2 = document.querySelector("#btn2").addEventListener("click", agregar);


//Imprimir arreglos con foreach.
let btn3 = document.querySelector("#btn3").addEventListener("click", imprimir1);
let btn4 = document.querySelector("#btn4").addEventListener("click", imprimir2);


//Agrega/pushea un item agregado por el usuario desde un input.
let botonazo = document.querySelector("#botonazo").addEventListener("click", agregar2);
// Recorre el arreglo y lo imprime
let boton = document.querySelector("#nombre").addEventListener("click", vernombre);







let pizza = [ 
    "Anana",
    "Anchoas",
    "Muzarella",
    "Rucula",
    "Napolitana",
    "Palmitos" 
];

let condimentos = [
    "Oregano",
    "Cheddar",
    "Laurel",
    "Apio",
    "Falopa",
    "Merca",
    "Porro"
];

function pizzas () {

let random = Math.floor(Math.random() * 5);
let opcion = pizza[random];
document.querySelector("#pizza").innerHTML = "Comete una pizza de " + opcion; 

}
function agregar () {
let random2 = Math.floor(Math.random() * 7);
let condimento = condimentos[random2];

document.querySelector("#condimento").innerHTML = "Agregale " + condimento;

}


function imprimir1 () {
    let imprimirpizza=''
    for (let item of pizza) {
    imprimirpizza+= ` 
    <li>${item}</li>
    `;
    };
    Imprimirjoaco.innerHTML = imprimirpizza;
    }


    function imprimir2 () {
let imprimircondimentos= ''
for (let items of condimentos) {
imprimircondimentos+= `
<li>${items}</li>
`;


};
imprimirelo.innerHTML = imprimircondimentos;

    }


    function agregar2 () {
let agregarpizza = document.querySelector("#agregar").value;

pizza.push(agregarpizza);
console.log(pizza);



    }


    function vernombre () {
document.querySelector("#titulo").classList.toggle("titulos")

    }


