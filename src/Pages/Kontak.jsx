import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Section1 from "../Components/Kontak/Section1";
import Footer from "../Components/Footer";

function Kontak() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <Header title="KONTAK KAMI" subtitle="Silahkan hubungi kami dibawah." />
      <Section1 />
      <Footer />
    </div>
  );
}

export default Kontak;
