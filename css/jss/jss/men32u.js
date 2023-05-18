'use strict';

let btn = document.querySelector("#btn").addEventListener("click", generar);

function generar (e) {
    e.preventDefault();
let data = new FormData(form);
let name = data.get('name');
let documento = data.get('documento'); 
let direccion = data.get('direccion');
let email = data.get('email');
let profesion = data.get('profesion');
let telefono = data.get('telefono');

tabla.innerHTML +=  `<tbody>
<tr>
    <td>${name}</td> </tr>

    <tr>
    <td>${documento}</td> </tr>
    <tr>
    <td>${direccion}</td></tr>
    <tr>
    <td>${email}</td></tr>
    <tr>
    <td>${profesion}</td></tr>
    <tr>
    <td>${telefono}</td></tr>
</tr>
`;

form.reset();
}