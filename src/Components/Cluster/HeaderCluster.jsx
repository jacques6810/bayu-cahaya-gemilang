import React from "react";
import "../../App.css";

function HeaderCluster({ data }) {
  console.log(data.data);
  return (
    <div className="relative flex flex-col items-center justify-center mt-20">
      {/* Background */}
      <img
        src={data.background_header}
        alt="Background"
        className="w-full h-110 object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-50"></div>

      {/* Logo Cluster */}
      <div
        className="absolute flex items-center justify-center inset-0"
        data-aos="fade-up"
      >
        <img
          src={data.logo_header}
          alt="Cluster Logo"
          className="w-32 h-32 bg-white rounded-full p-3 shadow-lg"
        />
      </div>
    </div>
  );
}

export default HeaderCluster;
