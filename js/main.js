let pantalla = document.querySelector(".pantalla");
let botones = document.querySelectorAll(".btn");

botones.forEach( boton => {
    boton.addEventListener("click", function(){
        console.log(boton.textContent);

        let botonApretado = boton.textContent;

        if ( boton.id == "c") {
            pantalla.textContent = "0";
            //----PARA QUE RETORNE CORTE Y NO SE EJECUTE EL IF DE ABAJO----//
            return;
        }

        
        if ( boton.id == "borrar") {
            if (pantalla.textContent.length == 1) {
                pantalla.textContent = "0";
            }else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if ( boton.id == "igual") {
            pantalla.textContent = eval(pantalla.textContent);
            return;
        }

        if ( pantalla.textContent == "0") {
            pantalla.textContent = botonApretado
        }
        else {
            pantalla.textContent += botonApretado
        }
    });
});
