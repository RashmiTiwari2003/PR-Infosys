import React from "react";
import Navbar from "./(landing)/navbar";
import About from "./(landing)/about";
import Products from "./(landing)/products";
import Location from "./(landing)/location";
import Contact from "./(landing)/contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Products />
      <Location />
      <Contact />
    </>
  );
};

export default Home;
