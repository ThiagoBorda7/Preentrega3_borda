let imagenes = ["01.png", "01a.png", "01b.jpg", "02.png", "02a.png", "03.png", "03a.jpg"];
cont = 0

function carrousel(contenedor) {
    contenedor.addEventListener("click", (e) =>{
        let atras = document.querySelector(".atras");
        let adelante = document.querySelector(".adelante");
        let img = document.querySelector(".img_slice");
        let boton = e.target;

        if (boton == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            }else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        }else if (boton == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            }else {
                img.src = imagenes[0];
                cont = 0;
            }
        }

    })
}

let contenedor = document.querySelector(".contenedor_slice");

carrousel(contenedor);