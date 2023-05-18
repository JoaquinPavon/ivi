'use strict';

document.querySelector("#btn1").addEventListener("click",contar1);
document.querySelector("#btn2").addEventListener("click",contar2);
document.querySelector("#btn3").addEventListener("click",contar3);


function contar1() {
let parrafos = document.querySelectorAll('p');
let cantidad = parrafos.length;

document.querySelector("#cantidad1").innerHTML = cantidad;



}


function contar2() {
let clases = document.getElementsByClassName("noticia");
let cantidaddeclases = clases.length;

document.querySelector("#cantidad2").innerHTML = cantidaddeclases;



    }


function contar3 () {
let ides = document.querySelectorAll("#lista-menu");
let nashe = ides.length;

document.querySelector("#cantidad3").innerHTML = nashe;


}