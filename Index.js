let btnLectura = document.getElementById("lectura");
let btnNormal = document.getElementById ("normal");
let body = document.getElementById("cuerpo");

btnLectura.onclick = ()=> {
    body.classList="lectura";
    document.querySelector("image").classList= "lecturaImg"
}

btnNormal.onclick = ()=> {
    body.classList.remove ("lectura");
    document.querySelector("image").classList.remove = "lecturaImg"
}

//lista botones//

let btn1 = document.getElementById("alert1");
let btn2 = document.getElementById("alert2");
let btn3 = document.getElementById("alert3");

btn1.onclick = () => {
   alert ("¡Hoy es tu dia de suerte! Te has ganado un guiño ;)") 
}
btn2.onclick = () => {
    alert ("Hoy no es tu dia de suerte. ¡Inténtalo de nuevo mañana!")
};
btn3.onclick = () => {
    alert ("¡Caaasi! ¡Inténtalo de nuevo mañana! :)")
};

//Ejercicio 3//

const lista = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'];

//Ejercicio 4//
let btn_guess1 =document.innerHTML("adivina1");
let btn_guess2 =document.innerHTML("adivina2");
let btn_guess3 =document.innerHTML("adivina3");
let btn_guess4 =document.innerHTML("adivina4"); 
let btn_guess5 =document.innerHTML("adivina5");  
let btn_guess6 =document.innerHTML("adivina6"); 

function buttonsAdivina (lista){
    for (let i=0; i<array.length; i++){
Math.random
}}