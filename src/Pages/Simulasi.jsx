import React from "react";
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
      {/* Section3 */}
      <div className="border-2 flex flex-col items-center">
        <img src={LogoBCG} alt="" className="h-15 w-30 mb-7" />
        <h1 className="text-4xl font-semibold text-center mb-5">
          ISTILAH PENTING KPR
        </h1>
        {/* Make Accordion Here */}
      </div>
      <Footer />
    </div>
  );
}

export default Simulasi;
