import React from "react";
import Navbar from "../Components/Navbar";
import BackgroundImage from "../assets/Background Home.png";
import InfoIcon from "../assets/Icon Information.svg";
import Logo from "../assets/Logo BCG.png";
import "../App.css";
import CobaGambar from "../assets/CobaGambar.png";
import Section3 from "../Components/Section3";

function Home() {
  const scrollToSection2 = () => {
    document.getElementById("section-2").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen">
      {/* Section 1 */}
      <img
        src={BackgroundImage}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* Navigation Bar */}
        <Navbar />

        {/* Information Content */}
        <div className="flex flex-col mx-6 items-center text-center md:text-left">
          <h1 className="items-center text-white font-extrabold text-6xl">
            BAYU CAHAYA GEMILANG
          </h1>
          <p className="text-xl text-white mt-5 backdrop-opacity-10">
            Bangun rumah impian anda menjadi kenyataan.
          </p>
          <button
            className="flex items-center p-2.5 px-4 mt-5 background-secondary-color font-bold text-white tracking-wider border-3 rounded-xl transform transition-transform duration-300 hover:scale-105"
            onClick={scrollToSection2}
          >
            <img src={InfoIcon} alt="Info Icon" className="h-7 w-7 mr-2" />
            Lihat Selengkapnya
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div
        id="section-2"
        className="flex flex-col md:flex-col lg:flex-row relative z-0 w-full bg-white mt-30 p-4 md:p-10 gap-4"
      >
        <div className="flex flex-col items-center mx-auto md:mx-20 mb-4 md:mb-0 w-full lg:w-1/2 p-4">
          <img src={Logo} alt="Logo BCG" className="h-15 w-30 mb-7" />
          <h2 className="text-center max-w-xl font-semibold text-2xl md:text-5xl leading-snug">
            Bangun Rumah Impian Anda Menjadi Kenyataan
          </h2>
          <p className="mt-7 max-w-xl text-center leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <button
            className="flex items-center p-2.5 px-8 mt-7 font-semibold px-6 py-3 border-3 border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition"
            onClick={scrollToSection2}
          >
            Selengkapnya
          </button>
        </div>
        <div className="flex flex-col justify-center items-center p-4 md:p-10 mx-auto md:mx-20 w-full lg:w-1/2 h-auto overflow-hidden">
          <img src={CobaGambar} alt="" className="w-full" />
        </div>
      </div>

      {/* Section 3 */}
      <div
        id="section-3"
        className="flex flex-col md:flex-col lg:flex-row relative z-0 w-full bg-white mt-30 p-4 md:p-10 gap-4"
      >
        <div className="flex flex-col items-center mx-auto md:mx-20 mb-4 md:mb-0 w-full lg:w-full p-4 border-2 border-red-500">
          <Section3 />
        </div>
      </div>

      {/* End Div */}
    </div>
  );
}

export default Home;
