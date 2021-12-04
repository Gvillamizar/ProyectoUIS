import axios from "axios";
const url = "http://localhost:5000";

export function getMusicaArtista(artista, callback){
    axios.get(url+"/musica/search/"+artista).then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

export function addMusica(musica, callback){
    axios.post(url+"/musica/"+musica.Id, musica)
    .then((res)=>{
      callback(res.data);
    })
    .catch((err)=>{
      callback(err);
    })
  }

  export function addUsuario(usuario, callback){
    axios.post(url+"/usuarios/"+usuario.ID, usuario)
    .then((res)=>{
      callback(res.data);
    })
    .catch((err)=>{
      callback(err);
    })
  }