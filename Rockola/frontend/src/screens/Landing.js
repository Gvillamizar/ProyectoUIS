import React from "react";
import { Navigate } from "react-router-dom";
import LandingImages from "../components/LandingImages";

const Landing = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user != undefined) {
    if(user.flagNewUser == false){
      return <Navigate to="/home" />;
    }else{
      return <Navigate to="/register" />;
    }    
  }
  return <LandingImages />;
};

export default Landing;