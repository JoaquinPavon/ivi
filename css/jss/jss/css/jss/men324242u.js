'use strict';
document.querySelector("#btn").addEventListener("click", agregar);

let tabla = [ 

    { 

        nombre: "Barcelona FC", 

        puntos: 98, 

        pj: 35, 

        pg: 32, 

        pe: 2, 

        pp: 1 

    }, 

    { 

        nombre: "Atlético de Madrid",  

        puntos: 74, 

        pj: 35, 

        pg: 22, 

        pe: 8, 

        pp: 5,  

    }, 

    {  nombre: "Real Madrid",

       puntos: 105,

       pj: 35,

       pg: 35,

       pe: 0,

       pp:0
    
    
    }, 

    {nombre: "Osasuna",

       puntos: 0,

       pj: 35,

       pg: 0,

       pe: 0,
       
       pp:35}, 

    {nombre: "Celta de vigo",

    puntos: 35,

    pj: 35,

    pg: 0,

    pe: 35,
    
    pp:0} 

]; 



function agregar(e) {
e.preventDefault();
let data = new FormData(form);
let nombre = data.get('nombre');
let puntos = data.get('puntos');
let pj = data.get('pj');
let pg = data.get('pg');
let pe = data.get('pe');
let pp = data.get('pp');


let tablita = {

    nombre:nombre,
    puntos:puntos,
    pj:pj,
    pg:pg,
    pe:pe,
    pp:pp
}

tabla.push(tablita);

imprimir();

}


function imprimir () {
let listauser=''
    for (let tablita of tabla) {
listauser+= `
    <li>${tablita.nombre}</li>
    <li>${tablita.puntos}</li>
    <li>${tablita.pj}</li>
    <li>${tablita.pg}</li>
    <li>${tablita.pe}</li>
    <li>${tablita.pp}</li>


`;

};

lista.innerHTML = listauser;





}







