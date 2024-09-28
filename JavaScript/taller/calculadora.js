/*Ejercicio 4
    Solicitamos al usuario dos numeros y la operacion que desea realizar 
*/

let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
let operacion = prompt("¿Qué operación desea realizar? (+-*/)")

if(operacion === "+"){
    console.log(`${num1} ${operacion} ${num2} = ${num1+num2}`);
}
else if (operacion === "-"){
    console.log(`${num1} ${operacion} ${num2} = ${num1 - num2}`);
}

else if (operacion === "*"){
    console.log(`${num1} ${operacion} ${num2} = ${num1 * num2}`);
}

else if (operacion === "/"){
    if(num2 == 0.0){
        console.log("La división por cero no esta definida");
        alert("Error: division por cero");
    }
    else{
        console.log(`${num1} ${operacion} ${num2} = ${num1 / num2}`);
    }
    
}

else{
    console.log("operacion invalida");
    alert("operacion invalida");
}