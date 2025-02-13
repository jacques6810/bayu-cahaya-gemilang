import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Simulasi/Header";
import Section1 from "../Components/Simulasi/Section1";
import Section2 from "../Components/Simulasi/Section2";
import Footer from "../Components/Footer";
import LogoBCG from "../Assets/Logo BCG.png";
import "../App.css";

function Simulasi() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default Simulasi;
