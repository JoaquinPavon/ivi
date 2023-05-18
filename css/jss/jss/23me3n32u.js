'use strict';

let contador = 0;
let contador1 =0;
let contador2 =0;
let contador3 =0;



document.querySelector("#btn1").addEventListener("click", function(e){


let contador1 = contar(contador);
document.querySelector("#clicks").innerHTML = + parseInt(contador1);



})

document.querySelector("#btn2").addEventListener("click", function(e){

    let contador2 = contar(contador);
    document.querySelector("#clicks2").innerHTML = + parseInt(contador2);

    
})

document.querySelector("#btn3").addEventListener("click", function(e){

    let contador3 = contar(contador);
    document.querySelector("#clicks3").innerHTML = + parseInt(contador3);

    
})



function contar() {

contador++;

return contador;
}

