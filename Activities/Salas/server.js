const express = require('express');
const path = require('path');
const WebSocket= require('ws');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

let salas = [];
let reservas = [];

app.use(cors(),bodyParser.json());

wss.on('connection',(ws)=>{
    console.log('client conected');
    ws.on('close',()=>{
        console.log('Client disconected');
    });

});

function broadcast(data){
    wss.clients.forEach(client=>{
        if(client.readyState === WebSocket.OPEN){
            client.send(JSON.stringify(data));
        }
    });
    
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    });


app.get('/salas', (req,res)=>{
    res.json(salas);
});

app.post('/salas', (req, res)=> {
    const newRoom = req.body;
    salas.push(newRoom);
    broadcast({action: "add", newRoom});
    res.status(201).json(newRoom);
    res.send(`sala agregada correctamente con id="${newRoom.id}"`);
});

app.put('/salas/:id ', function (req, res) {
    const id = parseInt(req.params.id);
    const index = salas.findIndex(s=>s.id === id);

    if(index === -1){
        return res.status(404).json({mensaje: "La sala no fue encontrada"});
    }

    salas[index] = req.body;
    broadcast({action: 'update', room: salas[index]});
    res.status(201).json(salas[index]);
});


app.delete('/salas/:id', function(req, res) {
  const { id } = req.params;
  const index = salas.findIndex(r=>r.id===parseInt(id));
  

  if(index===-1){
    res.status(404).json({mensaje: 'Sala no encontrada'});
  }
  const deleteRoom = salas.splice(index,1)[0];
  broadcast({action: 'delete', room: deleteRoom});
  res.status(201).json({mensaje: 'usuario eleminado correctamente'});
  res.send(`Delete record with id ${id}`);
});


server.listen(PORT, () => console.log(`servidor corriendo en http://localhost:${PORT}`));