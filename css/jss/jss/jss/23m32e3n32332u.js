'use strict';


let boton = document.querySelectorAll("#btn");


for (let i = 0; i < boton.length; i++) {

    boton[i].addEventListener("click", function(e){
     let mostrar = this.nextElementSibling;
     mostrar.classList.toggle("ver");


    });
    
    }
    

