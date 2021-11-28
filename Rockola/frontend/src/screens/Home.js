import React from 'react'
import HomeUser from "../components/HomeUser";
import { Navigate } from 'react-router-dom';

const Home = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <HomeUser />
    </div>
  );
};

export default Home;