import React from "react";
import Navbar from "../Components/Navbar";
import Section1 from "../Components/About/Section1";
import Section2 from "../Components/About/Section2";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";

function About() {
  return (
    <div className="w-full">
      <Navbar />
      <Header
        title="TENTANG KAMI"
        subtitle="Ketahui lebih lanjut tentang kami."
      />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default About;
