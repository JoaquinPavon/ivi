'use strict';

document.querySelector("#btn").addEventListener("click" , generar);
document.querySelector("#btn2").addEventListener("click", generar2);





const gastos = [

{
    gas:'',
    electricidad:'',
    cable:'',
    personales:'',
    mes:'',

}

];

function generar (e) {
e.preventDefault();
let data = new FormData(form);
let gas = data.get('gas');
let electricidad = data.get('electricidad');
let cable = data.get('cable');
let personales = data.get('personales');
let mes = data.get('mes');


let gasto = {

gas: gas,
electricidad:electricidad,
cable:cable,
personales:personales,
mes:mes

}

gastos.push(gasto);
console.log(gastos);

}

function generar2(e){
e.preventDefault();
let tablauser=''
for (let gasto of gastos) {
tablauser += `
<tbody>
<tr>
    <td>${gasto.gas}</td></tr>
    <tr><td>${gasto.electricidad}</td></tr>
    <tr><td>${gasto.cable}</td></tr>
    <tr><td>${gasto.personales}</td></tr>
    <tr> <td>${gasto.mes}</td></tr>

</tr>
`;

}


tabla.innerHTML = tablauser;



}













