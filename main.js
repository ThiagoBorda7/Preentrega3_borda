let arrayProductos = [
    {
        id: "botas_01",
        titulo: "Botines 01",
        imagen: "01.png",
        categoria: {
            nombre: "Botines",
            id: "botines"
        },
        precio: 1000
    },
    {
        id: "botas_02",
        titulo: "Botines 02",
        imagen: "02.png",
        categoria: {
            nombre: "Botines",
            id: "botines"
        },
        precio: 1000
    },
    {
        id: "botas_03",
        titulo: "Botines 03",
        imagen: "03.png",
        categoria: {
            nombre: "Botines",
            id: "botines"
        },
        precio: 1000
    },
    {
        id: "botas_04",
        titulo: "Botines 04",
        imagen: "https://cdn.shopify.com/s/files/1/0597/1961/4620/products/IMG-20220720-WA0010.jpg?v=1659237350",
        categoria: {
            nombre: "Botines",
            id: "botines"
        },
        precio: 1000
    },
    {
        id: "mocasines_05",
        titulo: "Mocasines 05",
        imagen: "05.jpg",
        categoria: {
            nombre: "Mocasines",
            id: "mocasines"
        },
        precio: 1000
    },
    {
        id: "mocasines_06",
        titulo: "Mocasines 06",
        imagen: "06.png",
        categoria: {
            nombre: "Mocasines",
            id: "mocasines"
        },
        precio: 1000
    },
    // {
    //     id: "mocasines_07",
    //     titulo: "Mocasines 07",
    //     imagen: "https://cdn.shopify.com/s/files/1/0597/1961/4620/products/IMG-20220709-WA0006.jpg?v=1659240020&width=360",
    //     categoria: {
    //         nombre: "Mocasines",
    //         id: "mocasines"
    //     },
    //     precio: 1000
    // },
    // {
    //     id: "mocasines_08",
    //     titulo: "Mocasines 08",
    //     imagen: "https://cdn.shopify.com/s/files/1/0597/1961/4620/products/IMG-20220423-WA0012_1.jpg?v=1659239971&width=360",
    //     categoria: {
    //         nombre: "Mocasines",
    //         id: "mocasines"
    //     },
    //     precio: 1000
    // },
    {
        id: "animal_print_09",
        titulo: "Animal Print 09",
        imagen: "09.png",
        categoria: {
            nombre: "Animal Print",
            id: "animal_print"
        },
        precio: 1000
    },
    {
        id: "animal_print_10",
        titulo: "Animal Print 10",
        imagen: "10.png",
        categoria: {
            nombre: "Animal Print",
            id: "animal_print"
        },
        precio: 1000
    },
    {
        id: "charol_11",
        titulo: "Charol 11",
        imagen: "11.png",
        categoria: {
            nombre: "Charol",
            id: "charol"
        },
        precio: 1000
    },
    {
        id: "charol_12",
        titulo: "Charol 12",
        imagen: "12.png",
        categoria: {
            nombre: "Charol",
            id: "charol"
        },
        precio: 1000
    },
    {
        id: "charol_13",
        titulo: "Charol 13",
        imagen: "13.png",
        categoria: {
            nombre: "Charol",
            id: "charol"
        },
        precio: 1000
    },
];

//-------------------CAPTURO TODOS LOS NODOS----------------------//


let contenedor_productos = document.querySelector("#contenedor_productos");
let botones = document.querySelectorAll(".boton_categoria");
let titulo_principal = document.querySelector("#titulo_principal");
let agregar = document.querySelectorAll(".producto_agregar");


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

agregar_productos(arrayProductos);

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
