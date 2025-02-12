import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo BCG.png";
import "../../App.css";
import CobaGambar from "../../assets/CobaGambar.png";

function Section2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div
      id="section-2"
      className="flex flex-col md:items-center md:flex-col lg:flex-col xl:flex-row relative z-0 w-full bg-white mt-30 p-4 md:p-22 gap-4"
    >
      <div className="flex flex-col items-center mx-auto md:mx-20 mb-4 md:mb-0 w-full xl:w-1/2 p-4">
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
          onClick={handleClick}
        >
          Selengkapnya
        </button>
      </div>
      <div className="flex flex-col justify-center items-center p-4 md:p-10 mx-auto md:mx-20 w-full xl:w-1/2 h-auto overflow-hidden">
        <img
          src={CobaGambar}
          alt=""
          className="w-full lg:h-140 lg:w-140 sm:h-100 sm:w-100"
        />
      </div>
    </div>
  );
}

export default Section2;
