import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LogoBCG from "../Assets/Logo BCG.png";
import IconContact from "../assets/Icon Contact.png";
import IconEmail from "../assets/Icon Email.png";

// Google Maps configuration
const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
};

const center = {
  lat: -6.303983,
  lng: 106.683556,
};

function Kontak() {
  return (
    <div>
      <Navbar />
      <Header title="KONTAK KAMI" subtitle="Silahkan hubungi kami dibawah." />

      {/* Section Hubungi Kami */}
      <div className="flex flex-col items-center justify-center py-20 mx-10">
        <img src={LogoBCG} alt="Logo BCG" className="h-16 w-32 mb-7" />
        <h1 className="text-4xl font-semibold text-center mb-5">
          HUBUNGI KAMI
        </h1>
        <p className="text-thin text-sm text-center px-5 lg:px-40 xl:px-80">
          Hubungi kami{" "}
          <span className="text-primary-color font-semibold">
            sales marketing
          </span>{" "}
          rumah Bayu Cahaya Gemilang yang selalu siap membantu anda mendapatkan
          hunian rumah baru di Bumi Cahaya Gemilang.
        </p>

        {/* Container Form & Lokasi */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:mt-10 w-full max-w-5xl lg:max-w-6xl">
          {/* Bagian Lokasi */}
          <div className="flex flex-col w-full lg:w-1/2">
            {/* Google Maps */}
            <div className="mt-20 w-full h-[250px] md:h-[300px] rounded-lg shadow-md">
              <LoadScript googleMapsApiKey="AIzaSyDKIHGeWuvvktB4nl0mSGTGZEk0n-RdF6A">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>

          {/* Bagian Form */}
          <div className="flex flex-col mt-10 w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="border border-gray-300 rounded-md p-3 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Nomor Handphone"
              className="border border-gray-300 rounded-md p-3 mb-4 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-3 mb-4 w-full"
            />
            <textarea
              placeholder="Pesan anda"
              rows="4"
              className="border border-gray-300 rounded-md p-3 mb-4 w-full"
            ></textarea>
            <button className="bg-teal-500 text-white py-3 px-6 rounded-md font-semibold w-full transition duration-200 ease-in-out hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Kontak;
