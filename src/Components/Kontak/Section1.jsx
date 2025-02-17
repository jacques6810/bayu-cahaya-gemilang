import React from "react";
import LogoBCG from "../../assets/Logo BCG.png";

function Section1() {
  return (
    <div className="flex flex-col items-center justify-center py-20 mx-10">
      <img
        src={LogoBCG}
        alt="Logo BCG"
        className="h-16 w-32 mb-7"
        data-aos="fade-up"
      />
      <h1
        className="text-4xl font-semibold text-center mb-5"
        data-aos="fade-up"
      >
        HUBUNGI KAMI
      </h1>
      <p
        className="text-thin text-sm text-center px-5 lg:px-40 xl:px-80"
        data-aos="fade-up"
      >
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
          <div
            className="mt-20 w-full h-[250px] md:h-[300px] rounded-lg shadow-2xl"
            data-aos="fade-up"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, borderRadius: "10px" }}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDKIHGeWuvvktB4nl0mSGTGZEk0n-RdF6A&q=-6.303983,106.683556`}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Bagian Form */}
        <div className="flex flex-col mt-10 w-full lg:w-1/2">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="border border-gray-300 rounded-md p-3 mb-4 w-full"
            data-aos="fade-up"
          />
          <input
            type="text"
            placeholder="Nomor Handphone"
            className="border border-gray-300 rounded-md p-3 mb-4 w-full"
            data-aos="fade-up"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-3 mb-4 w-full"
            data-aos="fade-up"
          />
          <textarea
            placeholder="Pesan anda"
            rows="4"
            className="border border-gray-300 rounded-md p-3 mb-4 w-full"
            data-aos="fade-up"
          ></textarea>
          <button
            className="bg-teal-500 text-white py-3 px-6 rounded-md font-semibold w-full transition duration-200 ease-in-out hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
            data-aos="fade-up"
          >
            Kirim Pesan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
