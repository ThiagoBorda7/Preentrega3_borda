let arrayProductos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data =>{
        arrayProductos = data;
        agregar_productos(arrayProductos);
    })

//-------------------CAPTURO TODOS LOS NODOS----------------------//


let contenedor_productos = document.querySelector("#contenedor_productos");
let botones = document.querySelectorAll(".boton_categoria");
let titulo_principal = document.querySelector("#titulo_principal");
let agregar = document.querySelectorAll(".producto_agregar")





function agregar_productos(producto_elegido) {

    contenedor_productos.innerHTML = "";

    producto_elegido.forEach(producto => {

        //--------------CREO EL CONTENEDOR DE LOS PRODUCTOS----------------//

        let div = document.createElement("div");

        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto_imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto_detalles">
                <h3 class="producto_titulo">${producto.titulo}</h3>
                <p class="producto_precio">$${producto.precio}</p>
                <button class="producto_agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedor_productos.append(div);

    })

    actualizar();

}




//----------------------------------BOTONES NAV BAR----------------------------------------//

botones.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botones.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if( e.currentTarget.id != "all" ) {

            let titulo_categoria = arrayProductos.find(producto => producto.categoria.id === e.currentTarget.id);
            titulo_principal.innerText = titulo_categoria.categoria.nombre;

            let botones_categorias = arrayProductos.filter(producto => producto.categoria.id === e.currentTarget.id);
            agregar_productos(botones_categorias);
        }else {
            titulo_principal.innerText = "Todos los productos";
            agregar_productos(arrayProductos);
        }
    })
})

// console.log(agregar);


//------------------ACTUALIZO LOS BOTONES----------------------//

function actualizar () {
    agregar = document.querySelectorAll(".producto_agregar");

    agregar.forEach(boton => {
        boton.addEventListener("click", agregar_a_carrito);
    })
}

//----------PARA QUE NO SE PIERDAN LOS PRODUCTOS SELECCIONADOS--------------//

let productos_en_carrito;

let productos_en_carrito_ls = localStorage.getItem("productos_agregados");

if (productos_en_carrito_ls) {
    productos_en_carrito = JSON.parse(productos_en_carrito_ls);
}else {
    productos_en_carrito = [];
}

//---------------ARREGLO DONDE SE VAN A GUARDAR LOS PRODUCTOS SELECCIONADOS-----------------------//


function agregar_a_carrito(e) {

    Toastify({
        text: "Producto Agregado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
        background: "linear-gradient(to right, #000, #333)",
        borderRadius: "2rem",
        textTransform: "Uppercase",
        fontSize: ".75rem",
        },
        onClick: function(){} 
    }).showToast();

    let id_boton = e.currentTarget.id;

    // console.log(id_boton);

    let agregado = arrayProductos.find(producto => producto.id === id_boton)

    // console.log(agregado);

    if (productos_en_carrito.some(producto => producto.id === id_boton)) {
        //PARA AUMENTAR LA CANTIDAD CUANDO SE ELIJE EL MISMO PRODUCTO
        let index = productos_en_carrito.findIndex(producto => producto.id === id_boton);
        productos_en_carrito[index].cantidad++;
    }else {
        agregado.cantidad = 1;
        productos_en_carrito.push(agregado);
        //PUSHEO LOS PRODUCTOS AL ARRAY
    }
    // console.log(carrito);

    //GUARDO EL ARREGLO
    localStorage.setItem("productos_agregados", JSON.stringify(productos_en_carrito));
}





