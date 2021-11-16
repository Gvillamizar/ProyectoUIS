const db = require('./firebase.js')

//Traer todos los usuarios
function getUsuarios(callback){
    return db.collection("Usuarios").get()
    .then((refDoc) => {
        var arrayusuarios=[];
        refDoc.forEach((doc)=>{
            //console.log(`Document data ${doc.id}:`, doc.data());
            arrayusuarios.push(doc.data());
        })
        callback(arrayusuarios);
    }).catch((error) => {
        //console.log(`Error getting user ${error}`);
        callback(`Error getting user ${error}`);
    })
}

//Traer los usuarios x Id
function getUsuario(eid, callback){
    return db.collection("Usuarios").doc(eid).get()
    .then((doc) => {
            callback(doc.data());
        }).catch((error) => {
            callback(`Error getting user ${error}`);
    })
}

//Adicionar los usuarios
function addUsuario(usuario, callback){
    return db.collection("Usuarios").add(usuario)
    .then(() => {
            callback("User Created");
        }).catch((error) => {
            callback(`Error adding user ${error}`);
    })
}

//Actualizar los usuarios Toda la información
function UpdateUsuarioTotal(uid, usuario, callback){
    return db.collection("Usuarios").doc(uid).set(usuario)
    .then(() => {
            callback("User Updated");
        }).catch((error) => {
            callback(`Error Updating user ${error}`);
    })
}

//Actualizar los usuarios parcialmente
function UpdateUsuarioParcial(uid, usuario, callback){
    return db.collection("Usuarios").doc(uid).update(usuario)
    .then(() => {
            callback("User Updated");
        }).catch((error) => {
            callback(`Error Updating user ${error}`);
    })
}

//Borrar por Id
function deleteUsuario(uid, callback){
    return db.collection("Usuarios").doc(uid).delete()
    .then(() => {
            callback("User Deleted");
        }).catch((error) => {
            callback(`Error Deleting user ${error}`);
    })
}

module.exports = {
    getUsuarios,
    getUsuario,
    addUsuario,
    UpdateUsuarioTotal,
    UpdateUsuarioParcial,
    deleteUsuario
}