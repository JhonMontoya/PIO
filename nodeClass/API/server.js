const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = 2500;

app.use(express.json()); //Permite recivir y procesar datos JSON

let usuarios = [];

//Ruta GET

app.get('/usuarios', (req,res) =>{
    res.json(usuarios); //Responde  con el listado completo
});

//Ruta POST
app.post('/usuarios', (req,res)=>{
    const newUser = req.body; //datos enviados por usuario

    if(!newUser.id || !newUser.nombre || !newUser.rol){
        return res.status(400).json({mensaje: "Los campos son obligatorios."});
    }
    usuarios.push(newUser);
    res.json({mensaje: "Usuario agregado correctamente", usuario: newUser});

});

//Ruta PUT
app.put("/usuarios/:id",(req,res)=>{
    const idUser = parseInt(req.params.id);
    const updateUser = req.body;
    const index = usuarios.findIndex(u=>u.id===idUser);

    if(index === -1){
        return res.status(404).json({mensaje: "usuario no encontrado"});
    }
    usuarios[index] = updateUser;

    res.json({mensaje: "Usuario actualizado", updateUser});
});

//Ruta Delete

app.delete('/usuarios/:id',(req, res)=>{
    const idUser = parseInt(req.params.id);
    const index = usuarios.findIndex(u=>u.id===idUser);

    if(index === -1){
        return res.status(404).json({mensaje: "usuario no encontrado"});
    }
    usuarios.splice(index, 1);
    res.json({mensaje: "Usuario eliminado correctamente"});
});

//Iniciamos el servidor

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
});

