const dbm= require("./src/db/CrudMusica.js");
const dbU= require("./src/db/CrudUsuario.js");

const APIRutas = require('./routes');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

//app.use(express.static('public'));
app.use(express.json());
app.use(cors());

APIRutas(app);

app.listen(port, ()=>{
  console.log('My port'+port);
});


   //Traer un musica particular
   app.get('/musica/search/:nombre_Artista', function (req, res) {
    const artista=req.params.nombre_Artista;
    dbm.getMusicaArtista(artista,function(refDoc){
      res.send(refDoc);
     }) 
  })

  //Adicionar musica
  app.post('/', (req, res)=>{
    const musica=req.body;
    dbm.addMusica(musica,function(response){
        res.json(response);
    })
  })  

  //Adicionar Usuarios
  app.post('/usuarios', (req, res)=>{
    const usuario=req.body;
    dbU.addUsuario(usuario,function(response){
        res.json(response);
    })
  })
  

// const dbU=require('./src/db/CrudUsuario.js')
// const dbM=require('./src/db/crudMusica.js')

/*
app.get('/', function (req, res) {
  res.send('Bienvenidos a la Rockola');
})

app.get('/get-musica', function (req, res) {
  dbM.getMusica(function(arraymusica){
      res.send(arraymusica);
  })
})

app.get('/get-usuario', function (req, res) {
  dbU.getMusica(function(arrayusuarios){
      res.send(arrayusuarios);
  })
})*/