import React from "react";
import Navbar from "../Components/Navbar";
import Section1 from "../Components/Home/Section1";
import Section2 from "../Components/Home/Section2";
import Section3 from "../Components/Home/Section3";
import "../App.css";

function Home() {
  return (
    <div className="relative w-full h-screen">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />

      {/* Section 4 */}
      <div
        id="section-4"
        className="flex flex-col md:flex-col lg:flex-row relative z-0 w-full bg-white mt-30 p-4 md:p-10 gap-4"
      >
        <div className="flex flex-col items-center mx-auto md:mx-20 mb-4 md:mb-0 w-full lg:w-full p-4 border-2 border-red-500"></div>
      </div>
    </div>
  );
}

export default Home;
