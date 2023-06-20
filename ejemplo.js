let carrito = [];


function agregar_a_carrito(e){
    //console.log("BOTON COMPRA");

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode

    //console.log(hijo);
    //console.log(padre);
    //console.log(abuelo);

    let nombre_producto = padre.querySelector("h5").textContent;
    //console.log(nombre_producto);

    let precio_producto = padre.querySelector("span").textContent;
    //console.log(precio_producto);

    let img_producto = abuelo.querySelector("img").src;
    //console.log(img_producto);

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad:1
    };

    //console.log(producto);
    carrito.push(producto);

    console.log(carrito);

    mostrar_carrito();

}



function mostrar_carrito(){

    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";

    for( let producto of carrito ){

        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${producto.img}"></td>
                          <td><p>${producto.nombre}</p></td>
                          <td>${producto.cantidad}</td>
                          <td>${producto.precio}</td>
                          <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>`;
        tabla.append(fila);

    }



    let btn_borrar = document.querySelectorAll(".borrar_elemento");
    
    for( let btn of btn_borrar ){

        btn.addEventListener("click" , borrar_producto);
    }

}


function borrar_producto(e){

    console.log("BORRAR ESTE PRODUCTO: " , e.target);
    let abuelo = e.target.parentNode.parentNode;

    abuelo.remove();
}




let btn_compra =  document.querySelectorAll(".botonCompra");

console.log(btn_compra);


for( let boton of btn_compra){

    boton.addEventListener("click" , agregar_a_carrito);
}



let btn_carrito = document.getElementById("mostrar_carrito");


btn_carrito.addEventListener("click" , function(){

    let carrito = document.getElementById("carrito");

    if( carrito.style.display != "none"){

        carrito.style.display = "none";
    }
    else{
        carrito.style.display = "block";
    }


})