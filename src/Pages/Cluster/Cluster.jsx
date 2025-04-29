import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Cluster/HeaderCluster";
import Section1 from "../../Components/Cluster/Section1Cluster";
import Section2 from "../../Components/Cluster/Section2Cluster";
import Footer from "../../Components/Footer";
import "../../App.css";

function Cluster() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />

      {/* Section */}
      <div className="flex flex-col items-center justify-center py-20">
        <Section1 />
        <Section2 />
      </div>

      <Footer />
    </div>
  );
}

export default Cluster;
