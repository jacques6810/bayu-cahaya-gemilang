import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Section1 from "../Components/Developer/Section1";
import Footer from "../Components/Footer";
import "../App.css";

function Developer() {
  return (
    <div>
      <Navbar />
      <Header title="DEVELOPER" subtitle="Project-project kami." />
      <Section1 />
      <Footer />
    </div>
  );
}

export default Developer;
