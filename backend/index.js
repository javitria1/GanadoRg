/*forma para importar varialbes o funciones únicas 
const traerSemov = require("./src/db/crud.js");
leerSemovientes(); */
const dbS = require("./src/db/crud.js");

const express = require('express');
const db = require("./src/db/firebase.js");
const app = express(); // se crea una aplicación de express utilizando la librería
const port = 3000;  //definición del puerto

app.use(express.json()); //lo que me traiga, traigalo como un archivo .json

var page;
var methodDb;

page = '/semovientes';
methodDb = dbS.leerSemovientes;
//Leo todos los semovientes
function leerTodos(page,methodDb){
    app.get(page,function(req, res){
    methodDb(function(arraySemovientes){
        res.send(arraySemovientes);
    })
})
}
 app.get('/semovientes',function(req, res){
    dbS.leerSemovientes(function(arraySemovientes){
        res.send(arraySemovientes);
    })
}) 

//leer un semoviente específico
app.get('/semovientes/:id', function(req, res){
    const uid = req.params.id;
    dbS.leerSemoviente(uid, function(refDoc){
        res.json(refDoc);
    })
})

//registrar un nuevo semovientes
app.post('/semovientes', function(req, res){
    const semoviente =req.body;
    dbS.ingresarSemoviente(semoviente, function(status){
        res.json(status);
    })
})
//Actualizar totalmente un semoviente en la base de datos
app.put('/semovientes/:id', function(req, res){
    const uid = req.params.id;
    const semoviente = req.body;
    dbS.actualizarSemovienteTotalmente(uid,semoviente, function(status){
        res.json(status)
    })
})
//Actualizar parcialmente un semoviente
app.put('/semovientes/:id', function(req, res){
    const uid = req.params.id;
    const semoviente = req.body;
    dbS.actualizarSemovienteParcial(uid,semoviente,function(status){
        res.json(status)
    })
})
//eliminar un semoviente
app.delete('/semovientes/:id', function(req, res){
    const uid = req.params.id;
    dbS.borrarSemoviente(uid, function(status){
       res.json(status)
    })
})





app.listen(port, () =>{
    console.log("Corriendo en el puerto " + port)
})
