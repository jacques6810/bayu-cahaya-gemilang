import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Simulasi/Header";
import Section1 from "../Components/Simulasi/Section1";
import Section2 from "../Components/Simulasi/Section2";
import Footer from "../Components/Footer";
import LogoBCG from "../Assets/Logo BCG.png";
import Accordion from "../Components/Simulasi/Accordion"; // Import Accordion
import "../App.css";

function Simulasi() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />

      {/* Section 3 - Accordion */}
      <div className="border-2 flex flex-col items-center py-10 px-10 lg:px-30">
        <img src={LogoBCG} alt="Logo" className="h-15 w-30 mb-7" />
        <h1 className="text-4xl font-semibold text-center mb-5">
          ISTILAH PENTING KPR
        </h1>
        <Accordion />
      </div>

      <Footer />
    </div>
  );
}

export default Simulasi;
