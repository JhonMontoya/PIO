/* alert("Hola chato2!"); */
/* Variables 
contenedores que nos van a almacenar un dato.

let- declarar variables cuyo valor puede cambiar.


*/

let nombreUsuario = "samuel";
let edad = 42;

nombreUsuario = "cantera";

const pais = "usa";

/* no se debe cambiar una constante */

var activoCurso = true; /* booleano */

console.log(
  "El nombre es " +
    nombreUsuario +
    " su edad es " +
    edad +
    " se paso infiltrado " +
    pais
);
/* no se debe cambiar la constante */

/* operadores aritmetico => +. -. *. */

let num1 = 10;
let num2 = 5;

let suma = num1 + num2;
let resta = num1 - num2;
let multi = num1 * num2;
let div = num1 / num2;

console.log("El resultado de la suma es: " + suma);
console.log("El resultado de la resta es;" + resta);
console.log("El resultado de la multi es: " + multi);
console.log("El relsultado de la div es: " + div);

/* operadores de comparacion, compara valores

== igualdad
=== estrictamente igual - tienen que ser el mismo tipo de dato
!= diferente
< MENOR
> MAYOR 
<= menor igual que 
>= mayor igual que 
*/

let a = "5";
let b = 5;

console.log(a == b);
console.log(a === b);

a = 10;
b = 15;

console.log(a < b);
console.log(a > b);

/* operadores logicos 

&& - Y - and  ambas condiciones deben ser true 
|| - o - or - al menos una condicion debe ser true
!= no - not - invierte el valor del booleano (Si es true, lo cambia a false, viceversa)
*/

let esAdulto = true;
let tieneLicencia = false;

console.log(esAdulto && tieneLicencia);
console.log(esAdulto || tieneLicencia);
console.log(!esAdulto);

function saludar() {
  console.log("hola mundo!");
}

saludar(); /* llama o ejecuta la funcion */

function sumar(num1, num2) {
  return num1 + num2; /* me devuelve el resultado de la operacion */
}
/*
console.log(sumar(5, 3));

function saludoPersonalizado(nombre) {
  return "Hola" + nombre + "!!!";
}

console.log(saludoPersonalizado("jhonathan"));

let veces = parseInt(prompt("Cuantas veces va repetir"));

for(let i =0; i<= veces; i++){
  console.log(`numero: ${i}`);
}

let frutas = ["Manzana", "Banano", "Papaya", "Fresa" ];

for(let i = 0; i<frutas.length; i++){
  console.log(frutas[i]);
}

for (let fruta of frutas){
  console.log(fruta)
}

numeros = [10,15,20,25];
let sum = 0;

for (number of numeros) {
  sum += number;
}

console.log(sum);

*/

let calificaciones = [80,90,75,85];
let sum =0; // let sum = calificaciones.reduce((acc,calificacion)=>acc+calificacion);

for (cal of calificaciones) {
  sum += cal;
}


console.log(`el promedio es: ${sum/calificaciones.length}`)