import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Section1 from "../Components/Kontak/Section1";
import Footer from "../Components/Footer";

function Kontak() {
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
