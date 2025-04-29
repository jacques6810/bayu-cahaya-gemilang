import React, { useState, useEffect } from "react";
import Section from "../../Components/Section";

function Section1({ data }) {
  const [location, setLocations] = useState([]);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  useEffect(() => {
    const fetchClusters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cluster");
        if (!response.ok) {
          throw new Error("Failed to fetch clusters");
        }
        const data = await response.json();

        // Mapping hanya ambil title dan link_location
        const mappedLocation = data.map((cluster) => ({
          title: cluster.title,
          link_location: cluster.link_location,
        }));

        setLocations(mappedLocation);
      } catch (error) {
        console.error("Error fetching clusters:", error);
      }
    };

    fetchClusters();
  }, []);

  const handlePrev = () => {
    setCurrentLocationIndex((prevIndex) =>
      prevIndex === 0 ? location.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentLocationIndex((prevIndex) =>
      prevIndex === location.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Helper untuk validasi URL Google Maps
  const isValidMapUrl = (url) => {
    return (
      typeof url === "string" &&
      url.startsWith("https://www.google.com/maps") &&
      url.includes("embed")
    );
  };

  // Saat data belum selesai di-fetch
  if (location.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-500">Loading lokasi...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 mx-10">
      <Section title={data.title} />

      {/* Kontak Info */}
      <p
        className="text-thin text-sm md:text-base text-center px-5 lg:px-10 xl:px-80 2xl:px-100"
        data-aos="fade-up"
      >
        {data.paragraph.split(/%%(.*?)%%/).map((part, index) =>
          index % 2 === 1 ? (
            <span key={index} className="font-semibold text-teal-600">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>

      {/* Container Form & Lokasi */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:mt-10 w-full max-w-5xl lg:max-w-6xl">
        {/* Bagian Lokasi */}
        <div className="flex flex-col w-full lg:w-1/2">
          {/* Google Maps */}
          <div
            className="mt-20 w-full h-[250px] md:h-[300px] rounded-lg shadow-2xl bg-gray-100 flex items-center justify-center"
            data-aos="fade-up"
          >
            {isValidMapUrl(location[currentLocationIndex]?.link_location) ? (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "10px" }}
                src={location[currentLocationIndex]?.link_location}
                allowFullScreen
              ></iframe>
            ) : (
              <div className="text-gray-500 text-center px-5">
                Lokasi belum tersedia
              </div>
            )}
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
              {location[currentLocationIndex]?.title}
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
