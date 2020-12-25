import headerEfect from "./modules/Header-Efect.js";
import menuAparition from "./modules/Menu-aparition.js";


const $img = document.querySelector(".header__img"),
$text =  document.querySelector(".header_text"),
$menu =  document.querySelector(".menu-content"),
$button =  document.querySelector(".icon-menu");

document.addEventListener("DOMContentLoaded",()=>{
    menuAparition($button, $menu)
})

window.addEventListener("scroll", ()=>{
    headerEfect($text, $img)
})