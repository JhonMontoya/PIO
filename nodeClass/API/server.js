const express = require("express");
const cors = require('cors');
const http = require('http');
const webSockets = require('ws');
const bodyPaser = require('body-parser');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new webSockets.Server({server});

app.use(cors());
app.use(bodyPaser.json());

const PORT = 2500;

app.use(express.json()); //Permite recivir y procesar datos JSON

let usuarios = [];

//Ruta GET

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"));
});
 
app.get('/usuarios', (req,res) =>{
    res.json(usuarios); //Responde  con el listado completo
});

//Ruta POST
app.post('/usuarios', (req,res)=>{
    /*
    const newUser = req.body; //datos enviados por usuario

    if(!newUser.id || !newUser.nombre || !newUser.rol){
        return res.status(400).json({mensaje: "Los campos son obligatorios."});
    }
    usuarios.push(newUser);
    res.json({mensaje: "Usuario agregado correctamente", usuario: newUser});
*/
    const newUser =req.body;
    usuarios.push(newUser);
    broadcast({action: 'add', newUser});
    res.status(201).json(newUser);
});

//Ruta PUT
app.put("/usuarios/:id",(req,res)=>{
    const idUser = parseInt(req.params.id);
    //const updateUser = req.body;
    const index = usuarios.findIndex(u=>u.id===idUser);

    if(index === -1){
        return res.status(404).json({mensaje: "usuario no encontrado"});
    }
    //usuarios[index] = updateUser;
    usuarios[index] = req.body;
    //res.json({mensaje: "Usuario actualizado", updateUser});
    broadcast({action: 'update', user: usuarios[index]});
    res.json(usuarios[index]);
});

//Ruta Delete
app.delete('/usuarios/:id',(req, res)=>{
    const idUser = parseInt(req.params.id);
    const index = usuarios.findIndex(u=>u.id===idUser);

    if(index === -1){
        return res.status(404).json({mensaje: "usuario no encontrado"});
    }
    //usuarios.splice(index, 1);
    const deleteUser= usuarios.splice(index,1)[0] // el 1 indica que elimine un solo elemento y el 0 indica que elimina el primer elemento de array
    broadcast({action: 'delete', user: deleteUser})
    res.json({mensaje: "Usuario eliminado correctamente"});
});

//Conexiones a ws

wss.on('connection', (ws)=>{
    console.log('cliente conectado');
    ws.on('close',()=>{
        console.log('Cliente desconectado');
    });
});

function broadcast(data){
    wss.clients.forEach(client=>{
        if(client.readyState === webSockets.OPEN){
            client.send(JSON.stringify(data));
        }
    });
}

//Iniciamos el servidor
server.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
});

