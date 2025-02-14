import React from "react";
import BackgroundGambar from "../../assets/BackgroundContactUs.jpg";
import IconPhone from "../../assets/Icon Phone.png";

const Section4 = () => {
  return (
    <div
      id="section-4"
      className="flex flex-col text-center items-center w-full mx-auto p-6 mt-15 sm:px-20 md:p-10"
    >
      <img
        src={BackgroundGambar}
        alt=""
        className="absolute w-full h-100 object-cover"
      />
      <div className="absolute w-full h-100 bg-black opacity-50"></div>
      <div className="flex flex-col items-center my-15 p-2 mx-auto z-0 w-full max-w-5xl">
        <img src={IconPhone} alt="Phone" className="mb-5 h-15 w-15" />
        <h1 className="text-white mb-5 text-4xl xl:text-5xl font-semibold z-0">
          Kontak Kami
        </h1>
        <p className="text-white z-0 md:w-1/2 lg:w-1/2">
          We provide a complete service for the ale, purchase or rental of real
          estate.
        </p>
        <button className="shadow-xl tracking-widest text-sm font-regular px-10 py-2 my-5 bg-teal-600 text-white rounded-lg hover:bg-teal-800 transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
          <a href="/kontak-kami">KLIK DISINI</a>
        </button>
      </div>
    </div>
  );
};

export default Section4;
