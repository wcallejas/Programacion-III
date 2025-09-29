
// Variables 
let nombre = 'Juan';
const edad = 30;
var Esestudiante = true; 

//Operaciones 
let Nacimiento = 2025 - edad;
let esMayorEdad = edad >= 18;

//Mostrar en Consola 
console.log(nombre);
console.log(Nacimiento);
console.log(esMayorEdad);

//Color favorito y año de nacimiento 
let colorFavorito = 'azul';
let Nacimiento = 1990;
console.log(colorFavorito, Nacimiento);


var varVariable = 'var';
let letVariable = 'let';

console.log(varVariable);
console.log(letVariable);

//Condicional If
let edad = 18;
if (edad>= 18) {
    console.log('La persona es Mayor de Edad');
} else {
    console.log('La persona NO es Mayor de Edad');
}


//Ciclo For
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//Programa que verifique si un número es Positivo, Negativo o Cero
let numero = -22;
if (numero > 0) {
    console.log('El número es Positivo');
} else if (numero < 0){
    console.log('El número es Negativo');
} else {
    console.log('Cero');
}


// Programa para imprimir números Pares del 2 al 20 
for (let i = 2; i <= 20; i+=2) {
    console.log(i);
}


//Funciones

function saludar() {
    console.log('Hola Mundo');
}
saludar();

//Funciones con parámetros y retornos 
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(3, 6);
console.log(resultado);


//Crear una función que me indique si un número es par

function esPar(num) {
    return num % 2 === 0;
}
console.log(esPar(23));

function cuadrado(num) {
  return num ** 2;
}
console.log(cuadrado(25));


//Selección por ID 
let titulo = document.getElementById('titulo');
console.log(titulo);

//Selección por clase
let parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos);

//Selección por Etiqueta 
let divs = document.getElementsByTagName('div');
console.log(divs);

// QuerySelector 
let primerParrafo = document.querySelector('.parrafo');
console.log(primerParrafo);

let todosParrafos = document.querySelectorAll('.parrafo');
console.log(todosParrafos);

//Seleccionar el elemento id 'Titulo' y cambiar su nombre a 'Nuevo Titulo'
document.getElementById('titulo').textContent = 'Nuevo Titulo';

//Selección de todos los parráfos y cambiar su color a Rojo
document.querySelectorAll('p').forEach(e => {
    e.style.color = 'red';
});

