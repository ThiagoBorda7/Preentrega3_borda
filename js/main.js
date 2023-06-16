
// class Prestamo{

//     constructor( nombre_de_usuario, monto, cuotas){

//         this.nombre = nombre_de_usuario;
//         this.monto = monto;
//         this.cuotas = cuotas;
//         this.monto_final = 0;

//     }

//     calculo_cuotas( monto, cuotas){

//         let interes

//         if( cuotas == 1 ){
//             this.monto_final = this.monto;
//         }

//         else if( cuotas == 3 ){
//             interes = monto * 0.20;
//             this.monto_final = this.monto + interes
//         }

//         else if( cuotas == 6 ){
//             interes = monto * 0.40;
//             this.monto_final = this.monto + interes
//         }

//         else if( cuotas == 12 ){
//             interes = monto * 0.60;
//             this.monto_final = this.monto + interes
//         }

//         else if( cuotas == 18 ){
//             interes = monto * 0.80;
//             this.monto_final = this.monto + interes
//         }

//         else if( cuotas == 24 ){
//             interes = monto * 0.95;
//             this.monto_final = this.monto + interes
//         }

//     }

//     get_prestamos(){

//         console.log("***ULTIMOS PRESTAMOS***");
//         console.log("");
//         console.log("Titular: ", this.nombre);
//         console.log("Monto: ", this.monto);
//         console.log("Cuotas: ", this.cuotas);
//         console.log("Monto a pagar: ", this.monto_final);
//         console.log("Pagas por cuota: ", this.monto_final / this.cuotas);
//         console.log("")
        
//     }

// }

// function buscar_nombres( prestamo ){
//     return prestamo.nombre == nombre;
// }


// let nombre_de_usuario = "";
// let lista_de_prestamos = [];

// console.log("**BIENVENIDOS A LA CALCULADORA DE PRESTAMOS ONLINE**");
// console.log("")


// //MENU PRINCIPAL

// while( nombre_de_usuario != "SALIR" ){

//     nombre_de_usuario = prompt("Ingrese su nombre de usuario o SALIR si no desea pedir un prestamo");

//     if(nombre_de_usuario != "SALIR"){

//         let monto = prompt("Ingrese el monto que desea solicitar: ");
//         monto = parseFloat(monto);

//         console.log("**ACCEDISTE AL MENU DE CUOTAS**")
//         console.log("");
//         console.log("<-----ELIJA LA CANTIDAD DE CUOTAS QUE DESEA PARA SU PRESTAMO----->");
//         console.log("");
//         console.log("1 Cuota: Sin interes");
//         console.log("3 Cuotas: Con un 20% de interes");
//         console.log("6 Cuotas: Con un 40% de interes");
//         console.log("12 Cuotas: Con un 60% de interes");
//         console.log("18 Cuotas: Con un 80% de interes");
//         console.log("24 Cuotas: Con un 95% de interes");

//         let cuotas = prompt("Ingrese la cantidad de cuotas");

//         console.log("");

//         let prestamo = new Prestamo ( nombre_de_usuario, monto, cuotas );

//         prestamo.calculo_cuotas( monto, cuotas );

//         lista_de_prestamos.push( prestamo );

//         console.log("***GRACIAS POR ELEGIRNOS***");
//         console.log("")

//     }


// }

// console.log("<-----HISTORIAL DE PRESTAMOS----->");
// console.log("");

// console.log("1-Ver todos los prestamos");
// console.log("2-Buscar prestamo");
// console.log("");

// let opcion = prompt("Ingrese la opcion que desea");
// let nombre;


// if( opcion == 1 ){

//     for( let prestamo of lista_de_prestamos){
//         prestamo.get_prestamos();
//     }

// }

// else if( opcion == 2){

//     nombre = prompt("Ingrese el nombre de usuario");
//     let busqueda = lista_de_prestamos.filter( buscar_nombres );

//     for( let prestamo of busqueda){
//         prestamo.get_prestamos();
//     }

// }

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
