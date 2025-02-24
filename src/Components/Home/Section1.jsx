import React from "react";
import BackgroundImage from "../../assets/Background Home.png";
import InfoIcon from "../../assets/Icon Information.svg";
import "../../App.css";

function Section1() {
  const scrollToSection2 = () => {
    document.getElementById("section-2").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen">
      {/* Section 1 */}
      <img
        src={BackgroundImage}
        alt="Background"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* Information Content */}
        <div
          className="flex flex-col mx-6 items-center text-center md:text-left"
          data-aos="fade-up"
        >
          <h1 className="items-center text-white font-extrabold text-3xl md:text-5xl lg:text-6xl sm:text-center">
            BAYU CAHAYA GEMILANG
          </h1>
          <p className="text-xs px-10 md:px-0 md:text-xl text-white mt-5 backdrop-opacity-10">
            Bangun rumah impian anda menjadi kenyataan.
          </p>
          <button
            className="flex items-center text-xs p-2 px-3 md:text-base md:px-4 mt-5 background-secondary-color font-bold text-white tracking-wider border-3 rounded-xl transform transition-transform duration-300 hover:scale-105"
            onClick={scrollToSection2}
          >
            <img
              src={InfoIcon}
              alt="Info Icon"
              className="h-5 w-5 md:h-6 md:w-6 mr-2"
            />
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
