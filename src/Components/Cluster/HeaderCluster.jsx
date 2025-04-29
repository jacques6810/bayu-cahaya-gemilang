import React from "react";
import BCA_Background from "../../assets/BCA Background.jpg";
import BCA_Logo from "../../assets/BCA Logo.svg";
import "../../App.css";

function HeaderCluster() {
  return (
    <div className="relative flex flex-col items-center justify-center mt-20">
      {/* Background */}
      <img
        src={BCA_Background}
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
          src={BCA_Logo}
          alt="Cluster Logo"
          className="w-32 h-32 bg-white rounded-full p-3 shadow-lg"
        />
      </div>
    </div>
  );
}

export default HeaderCluster;
