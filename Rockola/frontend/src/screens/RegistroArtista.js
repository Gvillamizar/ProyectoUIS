import React from 'react'
import RegistroArtist from '../components/RegistroArtista'
import { Stack } from 'react-bootstrap'
import { Navigate } from "react-router-dom";


const RegistroArtista = () => {
  var user = JSON.parse(localStorage.getItem("user"));
/*   if (user == undefined) {
      return <Navigate to="/" />;
  }else if(user.flagNewUser == false){
      return <Navigate to="/home" />;
  } */
  return (
      <div>
          <Stack gap={2} className="col-md-5 mx-auto">
              <RegistroArtist />
          </Stack>
      </div>
  )
}

export default RegistroArtista