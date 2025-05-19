import React from "react";
import LogoBCG from "../assets/Logo BCG.png";
import "../App.css";

function Section({ title }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img
        src={LogoBCG}
        alt="Logo BCG"
        className="h-12 w-25 mb-7 md:h-15 md:w-30"
        data-aos="fade-up"
      />
      <h1
        className="text-3xl md:text-4xl font-semibold mb-10"
        data-aos="fade-up"
      >
        {title}
      </h1>
    </div>
  );
}

export default Section;
