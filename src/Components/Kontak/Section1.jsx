import React, { useState } from "react";
import LogoBCG from "../../assets/Logo BCG.png";

const locations = [
  {
    name: "Bukit Ciampea Asih",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.795169437701!2d106.68941573853812!3d-6.57327349835504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69db19f30129ff%3A0xa19af266db849527!2sBukit%20Ciampea%20Asri%20A16!5e0!3m2!1sen!2id!4v1740970882470!5m2!1sen!2id",
  },
  {
    name: "Artha Soreang Living",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7305903278384!2d107.5341914748108!3d-7.040914692961161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68edae774b400d%3A0x2bfd9ac05a53f18f!2sArtha%20Living%20Soreang!5e0!3m2!1sen!2sid!4v1740972374306!5m2!1sen!2sid",
  },
  {
    name: "Pasanggrahan Hill",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.820847824335!2d107.70795307480951!3d-6.912012693087473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd267dcc1d7f%3A0x369c3b3d7cbd1065!2sCluster%20Pasanggrahan%20Hill!5e0!3m2!1sen!2sid!4v1740972222350!5m2!1sen!2sid",
  },
];

function Section1() {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const handlePrev = () => {
    setCurrentLocationIndex((prevIndex) =>
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentLocationIndex((prevIndex) =>
      prevIndex === locations.length - 1 ? 0 : prevIndex + 1
    );
  };

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
              style={{ border: 0, borderRadius: "10px" }}
              src={locations[currentLocationIndex].mapSrc}
              allowFullScreen
            ></iframe>
          </div>

          {/* Location Selector */}
          <div className="flex items-center justify-center w-full mt-5 space-x-2">
            <button
              onClick={handlePrev}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 sm:px-4 rounded-full transition-all"
            >
              &lt;
            </button>
            <h3 className="background-secondary-color text-center text-xs text-white font-semibold py-3 px-4 sm:px-6 sm:text-sm rounded-lg shadow-md">
              {locations[currentLocationIndex].name}
            </h3>
            <button
              onClick={handleNext}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 sm:px-4  rounded-full transition-all"
            >
              &gt;
            </button>
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
