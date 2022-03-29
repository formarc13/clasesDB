/* let parrafos = document.getElementsByTagName('p')
console.log(parrafos)
let titulo = document.getElementById('title')
titulo.innerText = "Otro titulo"
let parrafosRojos = document.getElementsByClassName('text-danger')
console.log(parrafosRojos)
let todosLosParrafos = document.querySelectorAll('p')
console.log(todosLosParrafos)
let primerParrafo = document.querySelector('p')
console.log(primerParrafo) */


let button = document.querySelector('#btn-menu');
let menu = document.querySelector('#menu');
let btnDarkMode = document.querySelector('#btn-darkMode');
let parrafos = document.querySelectorAll('p');
let title = document.querySelector('#title');
let body = document.querySelector('body'); 

button.addEventListener('click', function () {
    //console.log("Hiciste click")
    //menu.style.display = "block";
    //document.querySelector('header').style.backgroundColor = "red";

    /* if(menu.classList.contains('active')){
        menu.classList.remove('active')
    }else{
        menu.classList.add('active')
    } */

    menu.classList.toggle('active')
})

btnDarkMode.addEventListener('click', function() {
    body.classList.toggle('bg-dark')
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('text-dark')
    })
    title.classList.toggle('text-dark');
})