/*
NodeJs  es un entorno de ejecución js del lado del servidor

1. dessarrollo de aplicaciones
2. ApiResrFull

una promesa es un objeto que representa la finalización de operaciones asincronas y su resultado.

Estado:

pading(pensiente): las operaciones asincronas no han finalizado
fullfield(cumplida): las operaciones han sido completadas con exito
rejected(rechazda): la operacion fallo y se devuelve un error

Metodos Principales:

* them(): se ejecuta cuando la promesa se cumpla.
* catch(): cuando la promesa es rechazada.
* finally(): cuando la promesa ha sido resuelta (cumplida o rechazada).

 */

/*
function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if(exito){
                resolve({nombre: "Juan", edad: 25});
            }
            else{
                reject("Error al obtener el usuario");
            }

        }, 3000); //Simula 3 segundos de espera
    });
}

getUser()
.then((gato) => {
    console.log("usuario obtenido:", gato);
})
.catch((error)=>{
    console.error(error);
})
.finally(()=>{
    console.log("operacion completa");
})

//asincronismo: multiples tareas al mismo tiempo sin bloquear ningun flujo del programa 

function getProducto(productoId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log("obtener detalle del producto");
           const producto = {id: productoId, nombre: "portatil", precio: 5000};
           if(producto){
            resolve(producto);
           }
           else{
            reject("Producto no encontrado")
           }
        }, 3000);
    })
}

function verificarStock(producto){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log("Verificar producto:", producto.nombre); 
           const enStock = Math.random() >0.5;
           if(enStock){
            resolve("producto en Stok");
           }
           else{
            reject("producto fuera de Stock");
           }
        }, 3000);
    })

}

function confirmarCompre(producto){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("confirmar compra del producto ", producto.nombre);
            resolve("Compra con exito");
        }, 2000);
    })

}

function realizarCompra(productoId){
    getProducto(productoId).then((producto)=>{
        return verificarStock(producto).then(()=>producto)
    })
    .then((producto)=>{
        return confirmarCompre(producto);
    })
    .catch((mensaje)=>{
        console.log(mensaje);
    })
    .catch((error)=>{
        console.error("error duranta la compra", error);
    })
    .finally(()=>{
        console.log("proceso completado");
    });
}

realizarCompra(1)
*/

function prepararComida(pedido){
    return new Promise((resolve, reject) => {
        console.log("Preparando el pedido");
        setTimeout(() => {
            if(pedido === "pizza"){
                resolve(`${pedido} es lista`);
            }
            else{
                reject("It's not ready");
            }
        }, 5000);
    })
}

prepararComida("Pizza")
    .then((mensajeExitoso)=>{
        console.log(mensajeExitoso);
    })
    .catch((error)=>{
        console.error(error);
    })
    .finally(()=>{
        console.log("Preparación completa");
    })

console.log("Tarea finalizada");