import axios from "axios";
const url = "http://localhost:5000";

  export function addUsuario(usuario, callback){
    axios.post(url+"/usuarios/", usuario)
    .then((res)=>{
      callback(res.data);
    })
    .catch((err)=>{
      callback(err);
    })
  }