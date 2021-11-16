/*forma para importar varialbes o funciones únicas 
const traerSemov = require("./src/db/crud.js");
leerSemovientes(); */
const {leerSemovientes} = require("./src/db/crud.js");

const express = require('express');
const app = express(); // se crea una aplicación de express utilizando la librería
const port = 3000;  //definición del puerto

app.get('/get-semovientes',function(req, res){
    leerSemovientes(function(arraySemovientes){
        res.send(arraySemovientes);
    })
})







app.listen(port, () =>{
    console.log("Corriendo en el puerto " + port)
})
