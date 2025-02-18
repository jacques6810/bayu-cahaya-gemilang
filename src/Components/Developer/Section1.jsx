import React from "react";
import LogoBCG from "../../assets/Logo BCG.png";
import ASL from "../../assets/Background Home.png";
import BCA from "../../assets/BukitCiampeaAsih_DeveloperBG.jpg";
import ClusterComponent from "./ClusterComponent";
import "../../App.css";

function Section1() {
  return (
    <div className="flex flex-col items-center py-20 px-10 lg:px-20 xl:px-60">
      <img
        src={LogoBCG}
        alt="Logo BCG"
        className="h-15 w-30 mb-7"
        data-aos="fade-up"
      />
      <h1
        className="text-4xl font-semibold text-center mb-5"
        data-aos="fade-up"
      >
        CLUSTER
      </h1>
      <div className="grid gap-6 my-10 w-full object-cover grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {/* Artha Soreang Living */}
        <ClusterComponent image={ASL} title="ARTHA SOREANG LIVING" />

        {/* Bukit Ciampea Asih */}
        <ClusterComponent image={BCA} title="BUKIT CIAMPEA ASIH" />

        {/* Pasanggrahan Hill */}
        <ClusterComponent image={ASL} title="PASANGGRAHAN HILL" />
      </div>
    </div>
  );
}

export default Section1;
