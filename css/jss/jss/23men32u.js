'use strict';   
document.querySelector("#btn1").addEventListener("click", function(e){

mostrar("Este boton");


});
document.querySelector("#btn2").addEventListener("click", function(e){
    mostrar("Este boton B");
});

document.querySelector("#btn3").addEventListener("click",function(e) {
    mostrar("Este boton C");
});

let texto = "";
function mostrar(texto) {

document.querySelector("#texto").innerHTML = texto;



}


