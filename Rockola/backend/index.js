const APIRutas = require('./routes');
const express = require('express');
const app = express();
const port = 3000;

// const dbU=require('./src/db/CrudUsuario.js')
// const dbM=require('./src/db/crudMusica.js')

app.use(express.static('public'));
app.use(express.json());

APIRutas(app);
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
 
app.listen(port, ()=>{
  console.log('My port'+port);
});
