function searchBook(titulo){
    return new Promise((resolve, reject) => {
        console.log(`Buscando el libro...${titulo}`);
        setTimeout(() => {
            const libroDisponible = ["javascript", "nodejs","mongoDB", "react"];
            if(libroDisponible.includes(titulo)){
                resolve(titulo);
            }
            else{
                reject(`el ${tituolo} no se encuentra en la biblioteca`);
            }
        }, 3000);
    })
}

function verificarDisponibilidad(libro){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const disponible = Math.random() > 0.5;
            if(disponible){
                resolve(libro);
            }
            else{
                reject(`El libro ${libro} no esta disponible para prestamo`);
            }
        }, 2000);
    })

}

function realizarPrestamo(titulo){
    return new Promise((resolve, reject) => {
        console.log(`Realizando prestamo del libro ${titulo}`);
        setTimeout(() => {
            resolve(`prestamo completado exitosamente para el libro ${libro}`);
        }, 1000);
        
    })
}

function gestionPrestamo(titulo){
    searchBook(titulo)
        .then((libro)=>{
            return verificarDisponibilidad(libro);
        })

        .then((libroDisponible)=>{
            return realizarPrestamo(libroDisponible);
        })
        .then((mensajeExitoso)=>{
            console.log(mensajeExitoso);            
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log("Proceso Finalizado");            
        })
}

gestionPrestamo("react")