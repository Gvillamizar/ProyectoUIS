import axios from "axios";
const url = "https://larockola-app.herokuapp.com/";

  export function addUsuario(usuario, callback){
    axios.post(url+"usuarios/", usuario)
    .then((res)=>{
      callback(res.data);
    })
    .catch((err)=>{
      callback(err);
    })
  }