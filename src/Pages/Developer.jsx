import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Section1 from "../Components/Developer/Section1";
import Footer from "../Components/Footer";
import "../App.css";

function Developer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
