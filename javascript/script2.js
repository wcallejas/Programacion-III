

/* 
let boton = document.getElementById('boton');
let titulo = document.getElementById('titulo');

boton.addEventListener('click', function(){
    titulo.textContent = 'Titulo Cambiado';
    titulo.style.color = 'blue';
})

document.getElementById('boton').addEventListener('click', function() {
    alert('Bienvenidos a clase');
});

let contenedor = document.getElementsByClassName('color')[0];
contenedor.addEventListener('mouseover',()=>{
    contenedor.style.backgroundColor='red';
});

contenedor.addEventListener('mouseout',()=>{
    contenedor.style.backgroundColor='white';
});

function listado(){
    let lista = prompt('Ingrese el elemento adicional');
    const elemento_lista = document.getElementsByClassName('lista')[0];
    const nuevo_elemento = document.createElement('li');
    nuevo_elemento.textContent = lista;
    elemento_lista.appendChild(nuevo_elemento);
}

*/
let lista = document.getElementById("lista");
let boton_agregar = document.getElementById("agregar");
let input = document.getElementById("texto");
let elemento;
console.log(boton_agregar);
boton_agregar.addEventListener("click", function(){
    elemento = document.createElement('li');
    elemento.textContent = input.value  ;
    lista.appendChild(elemento);
});


// Crear un botón que al hacer click muestre un alert 
// crear un div que cambia de color el fondo al pasar el mouse sobre el div
//Crear una lista y un boton que agregue un nuevo elemento a la lista cada vez que se hace click

//Crear Un Formulario con un Input y un botón de envio 
//Prevenir el envio por defecto y obtener el valor del input 
//Validar que el input no este vacio 



