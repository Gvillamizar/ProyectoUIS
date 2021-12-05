import React from 'react'
import ArtistaHome from "../components/ArtistaHome";
import { Navigate } from 'react-router-dom';

const Home = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <ArtistaHome />
    </div>
  );
};

export default Home;