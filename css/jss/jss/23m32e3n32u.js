'use strict';



let boton = document.querySelector("#btn").addEventListener("click", cambiar);





function cambiar(){
let titulos = document.querySelectorAll("h1");

for (let i=0; i<titulos.length; i++) { 
  
    
    titulos[i].classList.toggle("titulo");
}
   
} 






