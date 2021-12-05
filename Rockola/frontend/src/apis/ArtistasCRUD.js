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
    axios.post(url+"/musica/", musica)
    .then((res)=>{
      callback(res.data);
    })
    .catch((err)=>{
      callback(err);
    })
  }


//Traer todos los musicos
export function getMusica(callback){
  axios.get(url+"/musica/").then((res)=>{
    callback(res.data);
})
.catch((err)=>{
    callback(err);
})
}
