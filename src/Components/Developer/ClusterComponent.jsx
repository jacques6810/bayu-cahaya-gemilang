import React from "react";

function ClusterComponent({ key, image, title }) {
  return (
    <div
      className="relative w-full h-90 lg:h-120 shadow-2xl overflow-hidden group"
      data-aos="fade-up"
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 hover:rounded-none rounded-lg bg-black opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
      <div className="absolute bottom-0 w-full flex flex-col items-center justify-center pb-6 mb-5">
        <h1 className="font-semibold text-white text-xl text-center shadow-2xl">
          {title}
        </h1>
        <button className="text-sm font-regular text-white shadow-2xl bg-teal-500 px-7 py-2 mt-3 rounded-4xl hover:bg-teal-600 transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
          <a href="/developer/cluster">Info Selengkapnya</a>
        </button>
      </div>
    </div>
  );
}

export default ClusterComponent;
