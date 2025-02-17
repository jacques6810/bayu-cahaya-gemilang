import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Section1 from "../Components/Home/Section1";
import Section2 from "../Components/Home/Section2";
import Section3 from "../Components/Home/Section3";
import Section4 from "../Components/Home/Section4";
import Footer from "../Components/Footer";
import "../App.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full h-full">
      <Navbar />
      <Section1 data-aos="fade-up" />
      <Section2 data-aos="fade-up" />
      <Section3 data-aos="fade-up" />
      <Section4 data-aos="fade-up" />
      <Footer />
    </div>
  );
}

export default Home;
