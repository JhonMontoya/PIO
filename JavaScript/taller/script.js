/*Ejercicio 1 
    Solicitamos al usuario el nombre
    y mostramos un menaje personalizado en consola 
*/

let nombre = prompt("Hola! escribe tu nombre");
console.log(`Hola! ${nombre}, Bienvenido al taller JavaScript`);

/*Ejercicio 2 
    solicitamos la edad del usuario
    y mostramos en consola un mensaje con la edad
*/

let edad = parseInt(prompt("¿Que edad tienes?"));
const mensaje = `${nombre}, tu edad es de ${edad} años`;

console.log(mensaje);

/*Ejercicio 3
    usamos el if para determinar la generación a la que pertenece el usuario
*/

if(edad<0){
    console.log("Esta edad no es válida");
    alert("Edad erronea");
}
else if (edad <= 9){
    console.log(`${nombre}, perteneces a la generación Alpha`);
}
else if (edad <= 24){
    console.log(`${nombre}, perteneces a la generación Z`);
}

else if (edad <= 39){
    console.log(`${nombre}, perteneces a la generación de los Millennials`);
}
else if (edad <= 54){
    console.log(`${nombre}, perteneces a la generación X`);
}
else if (edad <= 74){
    console.log(`${nombre}, perteneces a la generación de los Baby Boommers`);
}
else{
    console.log(`${nombre}, perteneces a la generación silenciosa`);
}