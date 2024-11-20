const express = require('express');
const path = require('path');

const app = express();

const PORT = 2500;

app.use(express.urlencoded({extended : true}));

let estudiantes=[];

//Ruta GET

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"));
});


//Ruta POST

app.post('/registros', function (req, res) {

    const {name,age,email,course}= req.body;

    res.end(`<h1> Registro completado</h1>
              <p><strong>Nombre:<strong> ${name}</p>
              <p><strong>Edad:<strong> ${age}</p>
              <p><strong>Email:<strong> ${email}</p>
              <p><strong>Curso:<strong> ${course}</p>
              <a href="http://localhost:${PORT}"> Volver al formulario</a>
              `)
});


app.listen(PORT,()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});