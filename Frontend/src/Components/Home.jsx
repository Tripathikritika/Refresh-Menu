import React from "react";
import LandingPage from './LandingPage'
import Footer from '../Others/Footer.jsx'
const { default: Navbar } = require("../Others/NavBar");

const Home = () => {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </>
  );
};

export default Home;
