import React from "react";
import LogoBCG from "../../Assets/Logo BCG.png";
import ASL from "../../Assets/Background Home.png";
import BCA from "../../Assets/BukitCiampeaAsih_DeveloperBG.jpg";
import "../../App.css";

function Section1() {
  return (
    <div className="flex flex-col items-center py-20 px-10 lg:px-20 xl:px-60">
      <img src={LogoBCG} alt="Logo BCG" className="h-15 w-30 mb-7" />
      <h1 className="text-4xl font-semibold text-center mb-5">CLUSTER</h1>
      <div className="grid gap-6 my-10 w-full object-cover grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {/* Artha Soreang Living */}
        <div className="relative w-full h-90 lg:h-120 shadow-2xl overflow-hidden group">
          <img
            src={ASL}
            alt=""
            className="w-full h-full object-cover rounded-xl transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-lg bg-black opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
          <div className="absolute bottom-0 w-full flex flex-col items-center justify-center pb-6 mb-5">
            <h1 className="font-semibold text-white text-xl text-center shadow-2xl">
              ARTHA SOREANG LIVING
            </h1>
            <button className="text-sm font-regular text-white shadow-2xl bg-teal-500 px-7 py-2 mt-3 rounded-4xl hover:bg-teal-600 transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
              Info Selengkapnya
            </button>
          </div>
        </div>

        {/* Bukit Ciampea Asih */}
        <div className="relative w-full h-90 lg:h-120 shadow-2xl overflow-hidden group">
          <img
            src={BCA}
            alt=""
            className="w-full h-full object-cover rounded-xl transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-lg bg-black opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
          <div className="absolute bottom-0 w-full flex flex-col items-center justify-center pb-6 mb-5">
            <h1 className="font-semibold text-white text-xl text-center shadow-2xl">
              BUKIT CIAMPEA ASIH
            </h1>
            <button className="text-sm font-regular text-white shadow-2xl bg-teal-500 px-7 py-2 mt-3 rounded-4xl hover:bg-teal-600 transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
              Info Selengkapnya
            </button>
          </div>
        </div>

        {/* Pasanggrahan Hill */}
        <div className="relative w-full h-90 lg:h-120 shadow-2xl overflow-hidden group">
          <img
            src={ASL}
            alt=""
            className="w-full h-full object-cover rounded-xl transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-lg bg-black opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
          <div className="absolute bottom-0 w-full flex flex-col items-center justify-center pb-6 mb-5">
            <h1 className="font-semibold text-white text-xl text-center shadow-2xl">
              PASANGGRAHAN HILL
            </h1>
            <button className="text-sm font-regular text-white shadow-2xl bg-teal-500 px-7 py-2 mt-3 rounded-4xl hover:bg-teal-600 transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
              Info Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
