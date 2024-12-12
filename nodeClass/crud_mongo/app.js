const express = require('express');
const mongoose = require('mongoose');
const bodyParser = requier('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/')
.then(()=> console.log('Conexion a la BD exitosamente'))
.catch((error)=> console.log('Error al conectarse con la BD', error));

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`servidor en ejecución en http://localhost:${PORT}`)
});

const Item =require('./model');

app.get('/items', async(req, res)=>{
    try {
        const items = await Item.find();
        res.status(201).send(items)
    } catch (error) {
        res.status(400).send("Error al obtener los items");
    }
});

app.get('/items/:id', async(req, res)=>{
    try {
        const item = await Item.findById(req.params.id);
        if(!Item) return res.status(400).send('Item no existe en la base de datos');
        res.status(200).send(item);
    } catch (error) {
        res.satatus(400).send('Error al obtener el item');
    }
});

app.put('/items/:id', async(req,res)=>{
    try {
        const updateItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateItem) return res.status(404).send('No se encontró el item');

        res.status(200).send("Item actualizado correctamente")
    } catch (error) {
        res.status(400).send('Error al actulizar el item');
    }
});

app.delete('/items/:id', async(req,res)=>{
    try {
        const deleteItem = await Item.findByIdAndDelete(req.params.id);
        if(!deleteItem) return res.status(404).send("id no encontrado");

        res.status(200).send("eliminado correctamente");
    } catch (error) {
        res.status(400).send("error al eliminar el item");        
    }
});