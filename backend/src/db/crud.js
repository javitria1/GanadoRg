const db = require('./firebase.js');

 //leer todos los semovientes
 function leerSemovientes(callback){
    return db.collection("semovientes").get().then((docs) => {
        var arraySemovientes = [];
        docs.forEach((user) => {
            //console.log(user.data()); las líneas 6-9-12 no existian
            arraySemovientes.push(user.data());
        })
        //Aquí se envía la respuesta al GET REQUEST
        callback(arraySemovientes);
    }).catch(() => {
        callback(`Error para obtener semovientes ${error}`);
    })
    }

 //leer un semoviente en específico
 function leerSemoviente(uid, callback){
     return db.collection("semovientes").doc(uid).get()
     .then ((refDoc) => {
         callback(refDoc.data())
     })
 }   

//Ingresa los semovientes
function ingresarSemoviente(semoviente, callback){
    return db.collection("semovientes").add(semoviente)
    .then(() => {
        callback("HECHO!!!");
    })
    .catch((error) => {
        callback(`Error adicionando información ${error}`);
    });
    }

function actualizarSemovienteTotalmente(uid, semoviente, callback){
    return db.collection("semovientes").doc(uid).set(semoviente)
        .then(() =>{
            callback("Hecho");
        })
        .catch((error) => {
            callback(`Error adicionando información ${error}`);
        });   
}

function actualizarSemovienteParcial(uid, semoviente, callback){
    return db.collection("semovientes").doc(uid).update(semoviente)
    .then(() =>{
        callback("Hecho");
    })
    .catch((error) => {
        callback(`Error adicionando información ${error}`);
    });   
}

function borrarSemoviente(uid, callback){
    return db.collection("semovientes").doc(uid).delete()
    .then(() => {
        callback("Eliminado el muchacho");
    })
    .catch((error) => {
        callback(`Error eliminando información ${error}`);
    });   
}
//PRUEBAS
//prueba para ver si se está leyendo el crud PASANDO UN id
/* leerSemoviente("rGCo8yEttRcNUfaBD3gJ", (vaquitas) => {
    console.log(vaquitas)
}) */
///////
// prueba para inggresar una vaquita NUEVA
/* const semoviente = {
    id: "are-04",
    lote: "nuevo",
    fecha_compra: 02/07/2021,
    compra: 'true',
    edad: 18,
    castrado: false,
    sexo:"macho"
}
ingresarSemoviente(semoviente, (status)=>{
    console.log(status);  
})
 */
//Para actualizar un Semoviente Totalmente
/* const semoviente = {
    "id": "Vlyva-01",
    "lote": "viejito",
    "edad": 35
    }
actualizarSemovienteTotalmente("DlShLjhTbyKD0I1eGgCu", semoviente, (status) =>{
    console.log(status)
})
 */
// Para eliminar un semovientes
/* borrarSemoviente("DlShLjhTbyKD0I1eGgCu", (status) =>{
    console.log(status)
}) */



module.exports = {
    leerSemovientes,
    leerSemoviente, 
    ingresarSemoviente, 
    actualizarSemovienteTotalmente,
    actualizarSemovienteParcial,
    borrarSemoviente

} 