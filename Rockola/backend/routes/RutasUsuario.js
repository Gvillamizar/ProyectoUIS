const express = require('express');
const dbU=require('../src/db/CrudUsuario.js');
const router=express.Router();


  //Traer todos los usuarios
  router.get('/', function (req, res) {
    dbU.getUsuarios(function(arrayusuarios){
        res.send(arrayusuarios);
    })
  })

  //Traer un usuario particular
  router.get('/:id', function (req, res) {
    const eid=req.params.id;
    dbU.getUsuario(eid,function(usuario){
        res.json(usuario);
    })
  })

  //Adicionar uusuario
  router.post('/', (req, res)=>{
    const usuario=req.body;
    dbU.addUsuario(usuario,function(response){
        res.json(response);
    })
  })

  //Actualizar total
  router.put('/:id', (req, res)=>{
    const uid=req.params.id;
    const usuario=req.body;
    dbU.UpdateUsuarioTotal(uid, usuario,function(response){
        res.send(response);
    })
  })

  //Actualizar parcial
  router.patch('/:id', (req, res)=>{
    const uid=req.params.id;
    const usuario=req.body;
    dbU.UpdateUsuarioParcial(uid, usuario,function(response){
        res.send(response);
    })
  })

  //Borrar
  router.delete('/:id', (req, res)=>{
    const uid=req.params.id;
    dbU.deleteUsuario(uid, function(response){
        res.send(response);
    })
  })

  module.exports=router;