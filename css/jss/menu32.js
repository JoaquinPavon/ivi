'use strict';
let btn = document.querySelector("#btn").addEventListener("click", resultado);


function resultado() {

document.querySelector("#resultado").innerHTML = calculo();

}

function calculo () {
let p1 = document.querySelector("#p1").value;
let p2 = document.querySelector("#p2").value;
let selector = document.querySelector("#selector");

return eval(p1+ operacion(selector.selectedIndex) + p2);
}



function operacion(valor){
    let operaciones = ["+","-","*","/","^",">","<"];
    return operaciones[valor];
}


