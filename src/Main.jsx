import React from "react";
import Family from "./HomePage/Family";
import Footer from "./HomePage/Footer";
import Mail from "./HomePage/Mail";
import Navbar from "./HomePage/Navbar";
import Order from "./HomePage/Order";
import Wrapper from "./HomePage/Wrapper";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Wrapper />
      <Family />
      <Order />
      <Mail />
      <Footer />
    </div>
  );
};

export default Main;
