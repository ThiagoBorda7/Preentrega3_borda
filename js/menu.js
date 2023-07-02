let open_menu = document.querySelector("#open_menu");
let close_menu = document.querySelector("#close_menu");
let aside = document.querySelector("aside");

open_menu.addEventListener("click", () => {
    aside.classList.add("aside_visible");
})

close_menu.addEventListener("click", () => {
    aside.classList.remove("aside_visible");
})

botones.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside_visible");
}))