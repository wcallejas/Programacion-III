//Selección mediante ID
//let titulo = document.getElementById('titulo');
//console.log(titulo);

//Selección mediante la clase 
//let parrafos = document.getElementsByClassName("parrafo");
//console.log(parrafos);

//Selección mediante etiquetas
//let divs = document.getElementsByTagName('div');
//console.log(divs);

//QuerySelector 
let primerParrafo = document.querySelector('.parrafo')
console.log(primerParrafo);

let todosParrafos = document.querySelectorAll('.parrafo')
console.log(todosParrafos);

//Selección de el elemento con 'id' Titulo cambiar su texto por 'Nuevo Titulo'
document.getElementById('titulo').textContent = 'Nuevo Titulo';

//Selección de todos los parrafos y posteriormente cambiar su color a rojo 
let parrafos = document.getElementsByClassName('parrafo');
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = 'red';
}
//Seleccionar el div y cambiar su contenido <span>Nuevo Contenido </span>
let div1 = document.querySelector('div');
div1.innerHTML = '<span>Nuevo Contenido</span>';

//Agregar los eventos del botón 
let boton = document.getElementById('boton');
let titulo = document.getElementById('titulo');

boton.addEventListener('click',function(){
    titulo.textContent = 'Titulo Cambiado';
    titulo.style.color = 'blue';
});

//Crear un boton que muestre un Alert al hacer click
document.getElementById('boton').addEventListener('click',function(){
    alert('Mensaje de Alerta');
});
//Crear un div que cambie de color de fondo al pasar el mouse sobre el. 
let div = document.getElementById('miDiv');
div.addEventListener('mouseover', function(){
    this.style.background = 'blue';
});
div.addEventListener('mouseout', function(){
    this.style.background = 'red';
});

//Crear una lista y un botón que agrega un nuevo elemento a la lista cada vez que se haga un click


