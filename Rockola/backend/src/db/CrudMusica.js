const db = require('./firebase.js')

//Traer todos los musicos
function getMusica(callback){
    return db.collection("Musica").get()
    .then((refDoc) => {
        var arraymusica=[];
        refDoc.forEach((doc)=>{
            arraymusica.push(doc.data());
        })
        callback(arraymusica);
    }).catch((error) => {
        callback(`Error getting music ${error}`);
    })
}


//Traer la música x Id
function getMusicaEspecifica(mid, callback){
    return db.collection("Musica").doc(mid).get()
    .then((doc) => {
            callback(doc.data());
        }).catch((error) => {
            callback(`Error getting music ${error}`);
    })
}


//Adicionar los musicos
function addMusica(musica, callback){
    return db.collection("Musica").add(musica)
    .then(() => {
            callback("Music Created");
        }).catch((error) => {
            callback(`Error adding music ${error}`);
    })
}

//Actualizar la música Toda la información
function UpdateMusicaTotal(mid, musica, callback){
    return db.collection("Musica").doc(mid).set(musica)
    .then(() => {
            callback("music Updated");
        }).catch((error) => {
            callback(`Error Updating music ${error}`);
    })
}

//Actualizar la música parcialmente
function UpdateMusicaParcial(mid, musica, callback){
    return db.collection("Musica").doc(mid).update(musica)
    .then(() => {
            callback("Music Updated");
        }).catch((error) => {
            callback(`Error Updating music ${error}`);
    })
}

//Borrar por Id
function deleteMusica(mid, callback){
    return db.collection("Musica").doc(mid).delete()
    .then(() => {
            callback("Music Deleted");
        }).catch((error) => {
            callback(`Error Deleting music ${error}`);
    })
}

module.exports = {
    getMusica,
    getMusicaEspecifica,
    addMusica,
    UpdateMusicaTotal,
    UpdateMusicaParcial,
    deleteMusica
}