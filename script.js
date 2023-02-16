console.log("hello world desde javascript");

/*la forma profesional de trabajar es crear variables que representen a los selectores que se van a manipular en html*/
/*ejemplo:*/

const h1= document.querySelector('h1') /*con querySelector apuntamos a los selectores que queremos manipular en html*/
const p= document.querySelector('p')
const pAll=document.querySelectorAll('p') /*con querySelectorAll selecciona todos los selectores que coincidan con el selector que se le indique y los muestra todos en forma de lista*/
const parrafito= document.querySelector('.parrafito')
const pid= document.getElementById('pid') 
const input= document.querySelector('input')

/*cuando señalamos los selectores declarados con variables dentro de un objeto, se muestra en la consola las propiedades que tienen esas variables-objeto*/
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

/* cuando se llama directamente la variable que representa algun selector del html esta muestra el contenido de lo que tiene dicho selector */
console.log(h1)

/*con input.value podemos obtener el valor que contiene un input en html*/
console.log(input.value)

/*manipulando elementos en html desde javascript (manipulacion del dom)*/

h1.innerHTML = 'Otro texto hecho desde <br> javascript' /* con innerHTML se puede modificar el codigo html desde javascript colocando saltos de lineas, negritas, etc */
h1.innerText = 'con innerText este contenido lo asume como texto <br> no funciona ingresar propiedades html'  /* con innerText este contenido lo asume como texto */

h1.classList.add('rojo') /* con el parametro clasList.add le agrega un atributo a la clase del h1 */
h1.classList.remove('verde') /* con el parametro clasList.remove le elimina un atributo a la clase del h1 */

input.value = "Escriba aqui"
/* con:

document.createElement('img')

logramos crear elementos en el html desde javascript el modo de usarlo es: */
// primero se crea la constante const pid = document.getElementById('pid') habilitamos el manejo del selector <p> que esta en html accediendo al id a travez de get elemet by id

const img = document.createElement('img') //creamos una imagen desde javascript con una constante y le asignamos la creacion de esa imagen con document,createElement(img)

img.setAttribute('src', 'https://avatars.githubusercontent.com/u/53653078?v=4') //greamos los atributos que tendra la nueva imagen en este caso SRC y le agregamos una direccion donde se encuentra dicha imagen
console.log(img) //con esto se imprime los atributos en la consola para observar que estan bien capturados
pid.appendChild(img) //le ejecutamos la creacion de todo lo que se efectuo con la imagen llamando la variable con el atributo appendChild(img) u le asignamos el parametro img que es el que tiene todo lo que se necesita para crear la imagen en html
