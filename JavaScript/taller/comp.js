/*Ejercicio 5
    Solicitamos al usuario dos numeros y los comparamos entre si.
*/

let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));

if(num1>num2){
    console.log(`${num1} es mayor que ${num2}`);
}
else if (num1===num2){
    console.log(`${num1} es igual a ${num2}`);
}
else{
    console.log(`${num1} es menor que ${num2}`);
}