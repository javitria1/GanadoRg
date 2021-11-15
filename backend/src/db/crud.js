const db = require('./firebase.js');

 //traer todos los semovientes
 function traerSemov(){
    db.collection("semovientes").get().then((docs) => {
        docs.forEach((user) => {
            console.log(user.data());
        })
    })
    }

//Ingresa los semovientes
/* function escribir(){
    db.collection("semovientes").add({
        id: "are-01",
        lote: "antiguo",
        fecha_compra: 02/02/2021,
        compra: 'true',
        edad: 23,
        castrado: false,
        sexo:"hembra"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    }
 */

module.exports = traerSemov;
/* module.exports = escribir; */