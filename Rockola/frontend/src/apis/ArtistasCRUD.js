import axios from "axios";
const url = "http://localhost:5000";

export function getMusicaArtista(artista, callback){
    axios.get(url+"/musica/search/"+artista)
    .then((res)=>{
        callback(res);
    })
    .catch((err)=>{
        callback(err);
    })
}