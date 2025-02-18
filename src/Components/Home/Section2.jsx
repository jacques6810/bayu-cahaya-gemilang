import React from "react";
import Logo from "../../assets/Logo BCG.png";
import "../../App.css";
import HeroImage from "../../assets/HeroImage.png";

function Section2() {
  return (
    <div
      id="section-2"
      className="flex flex-col md:items-center md:flex-col lg:flex-col xl:flex-row relative z-0 w-full bg-white mt-30 p-4 md:p-22 gap-4"
    >
      <div className="flex flex-col items-center mx-auto md:mx-20 mb-4 md:mb-0 w-full xl:w-1/2 p-4">
        <img
          src={Logo}
          alt="Logo BCG"
          className="h-15 w-30 mb-7"
          data-aos="fade-up"
        />
        <h2
          className="text-center max-w-xl font-semibold text-3xl md:text-4xl lg:text-4xl leading-snug"
          data-aos="fade-up"
        >
          Bangun Rumah Impian Anda Menjadi Kenyataan
        </h2>
        <p
          className="mt-7 max-w-xl text-center leading-relaxed"
          data-aos="fade-up"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <button
          className="flex items-center p-2.5 px-8 py-3 mt-7 font-semibold border-3 border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
          data-aos="fade-up"
        >
          <a href="/about">Selengkapnya</a>
        </button>
      </div>
      <div
        className="flex flex-col justify-center items-center p-4 md:p-4 mx-auto md:mx-20 w-full xl:w-1/2 h-auto overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src={HeroImage}
          alt=""
          className="w-full xl:h-full xl:w-full sm:h-100 sm:w-100"
        />
      </div>
    </div>
  );
}

export default Section2;
