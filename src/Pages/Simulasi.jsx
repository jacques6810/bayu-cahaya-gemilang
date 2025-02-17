import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Section1 from "../Components/Simulasi/Section1";
import Section2 from "../Components/Simulasi/Section2";
import Section3 from "../Components/Simulasi/Section3";
import Footer from "../Components/Footer";
import "../App.css";

function Simulasi() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <Header
        title="SIMULASI KPR"
        subtitle="Silahkan lakukan simulasi KPR halaman ini."
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default Simulasi;
