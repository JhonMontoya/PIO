console.log("Iniicio del programa");

function asincronia(){
    setTimeout(() => {
        console.log("proceso asincronico terminado");
    }, 5000);
}

asincronia();

console.log("Fin del programa")