import React from "react";
import Navbar from "../Components/Navbar";
import Section1 from "../Components/Home/Section1";
import Section2 from "../Components/Home/Section2";
import Section3 from "../Components/Home/Section3";
import Section4 from "../Components/Home/Section4";
import Footer from "../Components/Footer";
import "../App.css";

// sm:border-5 sm:border-red-500 md:border-5 md:border-blue-500 lg:border-5 lg:border-green-500 xl:border-5 xl:border-yellow-500

function Home() {
  return (
    <div className="relative w-full h-full">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Home;
