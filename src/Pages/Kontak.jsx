import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Kontak/Header";
import Footer from "../Components/Footer";
import "../App.css";
import LogoBCG from "../Assets/Logo BCG.png";

function Kontak() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* Section 1 */}
      <div className="flex flex-col items-center justify-center py-20 sm:border-5 sm:border-red-500 md:border-5 md:border-blue-500 lg:border-5 lg:border-green-500 xl:border-5 xl:border-yellow-500">
        <img src={LogoBCG} alt="Logo BCG" className="h-15 w-30 mb-7" />
        <h1 className="text-4xl font-semibold text-center mb-5">
          HUBUNGI KAMI
        </h1>
        <p className="text-thin text-sm text-center px-20 lg:px-50 xl:px-100">
          Hubungi kami{" "}
          <span className="text-primary-color font-semibold">
            sales marketing
          </span>{" "}
          rumah Bayu Cahaya Gemilang yang selalu siap membantu anda mendapatkan
          hunian rumah baru di Bumi Cahaya Gemilang.
        </p>
        <div className="flex flex-col lg:flex-row mt-20 px-10 border-2 border-blue-500">
          <div className="flex flex-col border-2 border-red-500">
            <h3 className="font-semibold text-xl">Lokasi</h3>
            <p className="font-thin text-sm">
              Jl. Griya Loka Raya kav.Blok BJ-26 BSD City Tangerang Selatan
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kontak;
