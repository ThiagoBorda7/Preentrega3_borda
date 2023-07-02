let imagenes = ["./img/01.png", "./img/01a.png", "./img/01b.jpg", "./img/02.png", "./img/02a.png", "./img/03.png", "./img/03a.jpg"];
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