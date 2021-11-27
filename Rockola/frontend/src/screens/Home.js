import React from 'react'
import HomeUser from "../components/HomeUser";
import { Navigate } from 'react-router-dom';

const Home = () => {
  var contentHome = <Navigate to="/"/>
  if(localStorage.getItem('data') !== undefined){
    contentHome = <HomeUser/>
  }
  return (
    <>
      {contentHome}
    </>
  )
}

export default Home