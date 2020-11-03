import React from "react";
import LandingPage from './LandingPage'
const { default: Navbar } = require("../Others/NavBar");

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
};

export default Home;
