const RutaUsuarios = require('./RutasUsuario.js');
const RutaMusica = require('./RutasMusica.js');

function APIRutas(app){
    app.use('/usuarios',RutaUsuarios);
    app.use('/musica',RutaMusica);
}

module.exports =APIRutas;