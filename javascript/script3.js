console.log('Mensaje de Bienvenida');
//Tipos de Variables de entrada 
let nombre = 'Wilmer';
const edad = 28;
var esEstudiante = false;
//Operaciones 
let Nacimiento = 2025 - edad;
let MayorEdad = edad >= 18; 
//Mostrar en consola 
console.log(nombre);
console.log(Nacimiento);
console.log(MayorEdad);
//Calcular el área de un circulo de radio 5
let radio = 5;
let area = Math.PI * radio * radio;
console.log(area);
//Estructuras de Control 
//while, for, switch, if, elif, else

let Edad = 15;
if (Edad >= 18) {
    console.log('Eres Mayor de Edad');

} else {
    console.log('Eres Menor de Edad');
}

for (let i = 1; i<=10; i++) {
    console.log(i);
}

//Verificar si un número es cero, negativo o positivo
let num = -1;
if (num > 0){
    console.log('Es positivo');
} else if (num <0) {
    console.log('Es Negativo');
} else {
     console.log('Es Cero');
}
//numeros pares del 1 al 20 
let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2; //operadores aritmeticos
}

const food = 'salad';

switch (food) {
    case 'hamburger':
        console.log('fast food');
        break;
    case 'pizza':
        console.log('a perfect circle');
        break;
}
// Declaración de Funciones en JS
// Bloques de código reutilizables 
function saludo() {
    console.log('Hola Mundo');
}
saludo(); // return

//Calculo de una función que asocie el cuadrado de un número 
function cuadrado(x){
    return x * x; 

}
console.log(cuadrado(12));

//una función que determine si un número es par 

function par(number){
    return number % 2 == 0;
}
console.log(par(17));

