
/*seleccionar elementos que vamos a escuchar de html*/
const cuerpo = document.querySelector('#cuerpo')
const form = document.querySelector(`#formulario`)
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#primerDato');
const input2 = document.querySelector('#segundoDato');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/* escuchar los elementos */

btn.addEventListener('click', btnOnClick) //el addEventListener los parametros q recibe son: la accion que deseamos escuchar(en este caso click) y el otro parametro es la funcion que va a llamar (en este caso btnOnClick)

form.addEventListener('mousedown',bajarRaton)

form.addEventListener('click', mensaje)

/* funcion que ejecuta el boton */

function btnOnClick(event){
    event.preventDefault();
    var res;
    console.log('escuchando el evento del click');
    res = input1.value + input2.value;
    console.log(res);
    console.log(input1.value+input2.value);
    pResult.innerHTML = "Resultado: " + res;
}

function bajarRaton(){
    console.log('ya se que hace el evento MouseDown, ejecuta una accion con el click sobre un elemento')

}

function mensaje(){
    console.log('estoy haciendo click')
}