//--------------------------------TRAIGO LOS PRODUCTOS DEL LOCALSTORAGE---------------------------------------//

let productos_en_carrito = localStorage.getItem("productos_agregados");
productos_en_carrito = JSON.parse(productos_en_carrito);

// console.log(productos_en_carrito);

let carrito_vacio = document.querySelector("#carrito_vacio");
let carrito_productos = document.querySelector("#carrito_productos");
let carrito_acciones = document.querySelector("#carrito_acciones");
let boton_eliminar = document.querySelectorAll(".carrito_producto_eliminar");

function cargar_productos() {

    if (productos_en_carrito && productos_en_carrito.length > 0) {
        //SI HAY PRODUCTOS
        carrito_vacio.classList.add("disabled");
        carrito_productos.classList.remove("disabled");
        carrito_acciones.classList.remove("disabled");
    
        carrito_productos.innerHTML = "";
    
        //CREO EL CONTENEDOR DE LOS PRODUCTOS
        productos_en_carrito.forEach(producto => {
    
            let div = document.createElement("div");
            div.classList.add("carrito_producto");
            div.innerHTML = `
                <img class="carrito_producto_imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito_producto_titulo">
                    <small>Titulo</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito_producto_cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito_producto_precio">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                </div>
                <div class="carrito_producto_subtotal">
                    <small>Subtotal</small>
                    <p>${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito_producto_eliminar" id="${producto.id}">Borrar</button>
                `;
                carrito_productos.append(div);
        });
    } else {
        carrito_vacio.classList.remove("disabled");
        carrito_productos.classList.add("disabled");
        carrito_acciones.classList.add("disabled");
    }
    actualizar_botones_eliminar();
}

cargar_productos();

function actualizar_botones_eliminar() {
    boton_eliminar = document.querySelectorAll(".carrito_producto_eliminar");

    boton_eliminar.forEach(boton => {
        boton.addEventListener("click", eliminar_del_carrito);
    })
}



function eliminar_del_carrito(e) {
    let idBoton = e.currentTarget.id;
    let index = productos_en_carrito.findIndex(producto => producto.id === idBoton);
    
    productos_en_carrito.splice(index, 1);
    cargar_productos();

    localStorage.setItem("productos_en_carrito", JSON.stringify(productos_en_carrito));
}