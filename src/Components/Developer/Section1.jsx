import React from "react";
import Section from "../../Components/Section";
import ASL from "../../assets/Background Home.png";
import BCA from "../../assets/BukitCiampeaAsih_DeveloperBG.jpg";
import ClusterComponent from "./ClusterComponent";
import "../../App.css";

function Section1({ data }) {
  return (
    <div className="flex flex-col items-center py-20 px-10 lg:px-20 xl:px-60">
      <Section title={data.title} />
      <div className="grid gap-6 my-10 w-full object-cover grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {/* Artha Soreang Living */}
        <ClusterComponent image={ASL} title="ARTHA SOREANG LIVING" />

        {/* Bukit Ciampea Asri */}
        <ClusterComponent image={BCA} title="BUKIT CIAMPEA ASRI" />

        {/* Pasanggrahan Hill */}
        <ClusterComponent image={ASL} title="PASANGGRAHAN HILL" />
      </div>
    </div>
  );
}

export default Section1;
