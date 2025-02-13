import React from "react";
import Navbar from "../Components/Navbar";
import Section1 from "../Components/About/Section1";
import Section2 from "../Components/About/Section2";
import Header from "../Components/About/Header";
import Footer from "../Components/Footer";
import "../App.css";

function About() {
  return (
    <div className="w-full sm:border-5 sm:border-red-500 md:border-5 md:border-blue-500 lg:border-5 lg:border-green-500 xl:border-5 xl:border-yellow-500">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default About;
