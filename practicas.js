
// for( let i = 0; i < 5; i++){
//     console.log(arreglo_uno[i]);
// }

//LENGHT = ES PARA SABER CUANTOS ELEMENTOS TIENE EL ARREGLO
//PUSH = AGREGA ELEMENTOS AL FINAL DEL ARREGLO
//UNSHIFT = AGREGA ELEMENTOS AL INICIO DE ARREGLO
//SHIFT = QUITA EL PRIMER ELEMENTO DEL ARREGLO
//POP = QUITA EL ULTIMO ELEMENTO DEL ARREGLO
//SPLICE = ELIMINA UNO O VARIOS ELEMENTOS DEL ARREGLO
//JOIN = GENERA UN STRING ENTRE TODOS LOS ELEMENTOS DEL ARREGLO
//CONCAT = COMBINA ARREGLOS
//SLICE = HACE UNA COPIA DE UNA PARTE DEL ARREGLO EN OTRO ARREGLO NUEVO
//INDEXOF = NOS DICE LA POSICION O EL INDICE DE LOS ELEMENTOS DEL ARREGLO
//INCLUDES = PERMITE SABER SI EXISTE UN ELEMENTO INGRESADO POR PARAMETRO EN EL ARREGLO, RETORNA VALOR BOOLEANO, TRUE O FALSE
//REVERSE = INVIERTE EL ORDEN DE LOS ELEMENTOS DEL ARREGLO


//FOR... OF

// let productos = [{ id : 1, producto: "Arroz"}, { id : 2, producto : "Fideo"}, { id : 3, producto : "Leche"}];

// for( let producto of productos){
//     console.log(producto.id);
//     console.log(producto.producto);
// }

//EJEMPLO OBJETOS, PRODUCTO Y ARRAY

/*class Producto {
    constructor (nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }

    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}


let productos = [];

productos.push(new Producto("Arroz", "125"));
productos.push(new Producto("Fideos", "250"));
productos.push(new Producto("Leche", "300"));


for( let producto of productos){
    producto.sumaIva();
}

console.log(productos);*/


//------------------------------------------------------------------------------------------------------------//


//FUNCIONES DE ORDEN SUPERIOR


//RETORNA UNA FUNCION O RECIBE UNA FUNCION POR PARAMETRO


//FUNCION QUE CREA FUNCIONES

/*

function creando_multiplicador( multiplicador ){

    return function ( num ){

        return num * multiplicador;

    }

}

let doble_num = creando_multiplicador(2);
console.log(doble_num(20));

*/


//---------------------------------------forEach--------------------------------------------//

/*

function doble ( num ){

    console.log("El numero es: ", num);
    console.log("El doble es: ", num * 2);

}

let numeros = [10, 20, 34, 18, 13];

numeros.forEach( doble );

*/


//------------------------Find----------------------------------//

/*
let usuarios = [
    {nombre: "Luis", apellido: "Gomez", edad: 40},
    {nombre: "Pedro", apellido: "Gonzalez", edad : 32},
    {nombre: "Marta", apellido: "Sanchez", edad: 17},
    {nombre: "Laura", apellido: "Gimenez", edad: 38},
    {nombre: "Federico", apellido: "Chavez", edad: 23},
]

function buscar_usuario ( obj_usuario ){

    return obj_usuario.nombre == "Marta"

}

let  resultado = usuarios.find( buscar_usuario );

console.log( resultado );
*/


//-----------------------FILTER-------------------------------//


/*
let usuarios = [
    {nombre: "Luis", apellido: "Gomez", edad: 40},
    {nombre: "Pedro", apellido: "Gonzalez", edad : 32},
    {nombre: "Marta", apellido: "Sanchez", edad: 17},
    {nombre: "Laura", apellido: "Gimenez", edad: 38},
    {nombre: "Federico", apellido: "Chavez", edad: 15},
]

function mayor_de_edad ( obj_usuario ){

    return obj_usuario.edad >= 18;

}

let resultado_busqueda = usuarios.filter( mayor_de_edad );

console.log( resultado_busqueda );
*/


//-------------------------------------MAP---------------------------------------------//

/*
let productos = [
    {nombre: "Cocina", precio: 20000},
    {nombre: "Mouse", precio: 3000},
    {nombre: "Mate", precio: 12000},
    {nombre: "Teclado", precio: 5000},
    {nombre: "Bicicleta", precio: 70000},
    {nombre: "Auriculares", precio: 10000},
]

function agregar_iva ( producto ){

    let iva = producto.precio * 0.21;

    return {
        nombre: producto.nombre,
        precio: producto.precio + iva,
    }

}

let resultado_iva = productos.map( agregar_iva );

console.log( resultado_iva );
*/


//----------------------------REDUCE-----------------------------------//

/*
let productos = [
    {nombre: "Cocina", precio: 20000},
    {nombre: "Mouse", precio: 3000},
    {nombre: "Mate", precio: 12000},
    {nombre: "Teclado", precio: 5000},
    {nombre: "Bicicleta", precio: 70000},
    {nombre: "Auriculares", precio: 10000},
]

function suma_precio ( acu, producto ){
    acu = acu + producto.precio;
    return acu
}

let resultado = productos.reduce( suma_precio, 0);

console.log(resultado);


let fecha_hoy = new Date();
let dia = fecha_hoy.getDate();
let mes = fecha_hoy.getMonth()+1;
let anio = fecha_hoy.getFullYear();

console.log(dia);
console.log(mes);
console.log(anio);
console.log(fecha_hoy);

*/




//-----------getElementById---------------------//


/*
let titulo = document.getElementById("titulo_principal");

console.log(titulo);
console.log(titulo.innerText);
*/

//-----------getElementsByClass---------------------//

/*
let parrafo = document.getElementsByClassName("parrafos");

console.log(parrafo);
console.log(parrafo[0]);
console.log(parrafo[1]);
console.log(parrafo[1].innerText);
*/

//-----------getElementsByTagName---------------------//

/*
let li = document.getElementsByTagName("li");

console.log(li);

for(let elemento of li){
    console.log(elemento);
    console.log(elemento.innerText);
}



let contendor = document.getElementById("contenedor");

contendor.innerHTML = "<p>Parrafo generado desde JS</p>";
contendor.innerHTML = "<p>Otro parrafo generado desde JS</p>";
*/

//---------createElements-----------------//


/*
let parrafo_js = document.createElement("p");

parrafo_js.innerText = "Parrafo creado 100% en JS";
parrafo_js.style.textAlign = "center";

console.log(parrafo_js);

contenedor.append(parrafo_js);
*/


/*
let nombre_usuario = document.getElementById("nombre_usuario");

nombre_usuario.value = "Pepe desde JS";

console.log("Bienvenido/a al sistema: ", nombre_usuario.value);
*/


/*
function saludar(){

    let nombre_usuario = document.getElementById("nombre_usuario");

    console.log("Bienvenido/a al sistema: ", nombre_usuario.value);
}

function validar(){

    let nombre_usuario = document.getElementById("nombre_usuario");
    let msj = document.getElementById("mensaje");

    if(nombre_usuario.value == "Pepe"){

        let parrafo = document.createElement("p");
        parrafo.innerText = "Bienvenido/a al sistema: " + nombre_usuario.value;
        msj.append(parrafo);
    }

    else{
        document.body.innerHTML = `<h2>ERROR DE USUARIO</h2>
        <p>El usuario ${nombre_usuario.value} no se encontro</p>
        <a href="practica.html">Volver</a>`;
    }
}
*/

//-------------------------------------------------------------------------//

/*
function saludar(){
    console.log("Hola");
}

let btn_saludar = document.getElementById("btn_saludar");

btn_saludar.addEventListener( "click", saludar );

btn_saludar.addEventListener("click", function(){
    console.log("OTRO EVENTO EN EL MISMO BOTON!");
});
*/

//-------------------------------------------------------------------//


/*
let btn_dos = document.getElementById("btn_dos");

btn_dos.addEventListener("mousedown", function(e){
    console.log("Se escucho MOUSEDOWN");
    console.log(e.button);

    if( e.button == 0){
        console.log("CLICK IZQUIERDO");
    }
    else if( e.button == 1){
        console.log("RUEDITA");
    }
    else if( e.button == 2){
        console.log("CLICK DERECHO");
    }
    else{
        console.log("OTRO BOTON");
    }
});

btn_dos = document.addEventListener("mouseup", function(e){
    console.log("SE ESCUCHO MOUSEUP");
    console.log("SE SOLTO BOTON: ", e.button);
});

*/

/*
let img = document.getElementById("img");

img.addEventListener("mouseover", function(){
    img.src = "foto3.jpg";
});

img.addEventListener("mouseout", function(){
    img.src = "foto1.jpg";
});
*/


//-----------TECLADO----------------//

/*
window.addEventListener("keydown", function(e){
    console.log(e.key);

    if( e.key == "ArrowUp"){
        document.body.style.background = "black";
    }
    else if( e.key == "ArrowDown"){
        document.body.style.background = "white";
    }
});
*/


//--------STORAGE--------//

//-------LOCAL STORAGE-------//

//----setItem----//

localStorage.setItem("nombre_usuario", "Pepe");
localStorage.setItem("edad_usuario", 20);
localStorage.setItem("Colores", ["azul", "verde", "rojo"]);


//----getItem----//

let nombre_usuario = localStorage.getItem("nombre_usuario");
let edad_usuario = localStorage.getItem("edad_usuario");
let colores = localStorage.getItem("Colores");

console.log(nombre_usuario);
console.log(edad_usuario);
console.log(colores);


//--------------SESSIONSTORAGE--------------//

// sessionStorage.setItem("nombre_usuario_dos", "Laura");

/*
for( let i = 0 ; i < localStorage.length ; i = i + 1){
    let llave = localStorage.key(i);
    console.log("La llaver es: ", llave);
    console.log("El valor es: ", localStorage.getItem(llave));
}
*/

//----------REMOVEITEM------------//

/*
localStorage.removeItem(colores);
*/

//--------------CLEAR--------------//

/*
localStorage.clear();
*/



let clientes = [{nombre: "Marta", apellido: "Lopez"}, {nombre: "Luisa", apellido: "Rojas"}];

localStorage.setItem("arr_clientes", clientes);

console.log( localStorage.getItem("arr_clientes"));