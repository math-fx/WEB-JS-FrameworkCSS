//Index

$(document).ready(function(){
    $('.sidenav').sidenav();
});

//Projet 1

$(document).ready(function(){
    $('.carousel').carousel();
});

$(document).ready(function(){
    $('.parallax').parallax();
});

//effet de frappe

"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
animate_text();
});
// -------------------
function animate_text()
{
let delay = 20,
    delay_start = 0,
    contents,
    letters;

document.querySelectorAll(".animate-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
    setTimeout(function () {
        // ---------
        // effet machine à écrire (SIMPLE)
        elem.textContent += letter;
        // ---------
    }, delay_start + delay * index_1);
    });
    delay_start += delay * letters.length;
});
}

//Formulaire
$(document).ready(function(){
    $('.modal').modal();
});