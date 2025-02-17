import React from "react";
import LogoBCG from "../../assets/Logo BCG.png";
import Accordion from "./Accordion";

function Section3() {
  return (
    <div className="flex flex-col items-center mt-10 py-20 px-10 lg:px-30">
      <img
        src={LogoBCG}
        alt="Logo"
        className="h-15 w-30 mb-7"
        data-aos="fade-up"
      />
      <h1
        className="text-4xl font-semibold text-center mb-5"
        data-aos="fade-up"
      >
        ISTILAH PENTING KPR
      </h1>
      <Accordion />
    </div>
  );
}

export default Section3;
