import React from "react";
import BackgroundAlt from "../../assets/Background Home.png";
import "../../App.css";

function HeaderCluster({ data }) {
  const backgroundImage = data.background_header || BackgroundAlt;
  const hasLogo = !!data.logo_header;

  return (
    <div className="relative flex flex-col items-center justify-center mt-20">
      {/* Background */}
      <img
        src={backgroundImage}
        alt="Background"
        className="w-full h-96 sm:h-[28rem] object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-50"></div>

      {/* Content in center */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        data-aos="fade-up"
      >
        {hasLogo ? (
          <img
            src={data.logo_header}
            alt="Cluster Logo"
            className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full p-3 shadow-lg"
          />
        ) : (
          <h1 className="text-white text-3xl sm:text-5xl font-bold text-center px-4">
            {data.title || "Judul Cluster"}
          </h1>
        )}
      </div>
    </div>
  );
}

export default HeaderCluster;
