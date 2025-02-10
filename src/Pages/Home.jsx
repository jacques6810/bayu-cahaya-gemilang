import React from "react";
import Navbar from "../Components/Navbar";
import BackgroundImage from "../assets/Background Home.png";
import InfoIcon from "../assets/Icon Information.svg";
import "../App.css";

function Home() {
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
        <div className="flex flex-col mx-6 items-center">
          <h1 className="items-center text-white font-extrabold text-6xl">
            BAYU CAHAYA GEMILANG
          </h1>
          <p className="text-xl text-white mt-5 backdrop-opacity-10">
            Bangun rumah impian anda menjadi kenyataan.
          </p>
          <button className="flex items-center p-2.5 px-4 mt-5 background-secondary-color font-bold text-white tracking-wider border-3 rounded-xl">
            <img src={InfoIcon} alt="Info Icon" className="h-7 w-7 mr-2" />
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
