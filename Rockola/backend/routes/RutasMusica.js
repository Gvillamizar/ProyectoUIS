const express = require('express');
const dbm=require('../src/db/CrudMusica.js');
const router=express.Router();


  //Traer todos los musicos
  router.get('/', function (req, res) {
    dbm.getMusica(function(arraymusica){
        res.send(arraymusica);
    })
  })

   //Traer un musica particular
   router.get('/search/:nombre_Artista', function (req, res) {
    const artista=req.params.nombre_Artista;
    dbm.getMusicaArtista(artista,function(refDoc){
      res.send(refDoc);
     })
  }) 

  //Traer un musica particular
  router.get('/:id', function (req, res) {
    const eid=req.params.id;
    dbm.getMusicaEspecifica(eid,function(musica){
        res.json(musica);
    })
  })


  

  
  //Adicionar musica
  router.post('/', (req, res)=>{
    const musica=req.body;
    dbm.addMusica(musica,function(response){
        res.json(response);
    })
  })

  
  //Actualizar total
  router.put('/:id', (req, res)=>{
    const uid=req.params.id;
    const musica=req.body;
    dbm.UpdateMusicaTotal(uid, musica,function(response){
        res.send(response);
    })
  })

  //Actualizar parcial
  router.patch('/:id', (req, res)=>{
    const uid=req.params.id;
    const musica=req.body;
    dbm.UpdatemusicaParcial(uid, musica,function(response){
        res.send(response);
    })
  })

  //Borrar
  router.delete('/:id', (req, res)=>{
    const uid=req.params.id;
    dbm.deleteMusica(uid, function(response){
        res.send(response);
    })
  })

  module.exports=router;