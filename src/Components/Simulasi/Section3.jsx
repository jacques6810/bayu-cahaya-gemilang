import React from "react";
import LogoBCG from "../../assets/Logo BCG.png";
import Section from "../../Components/Section";
import Accordion from "./Accordion";

function Section3() {
  return (
    <div className="flex flex-col items-center mt-10 py-20 px-10 lg:px-30">
      <Section title="ISTILAH PENTING KPR" />
      <Accordion />
    </div>
  );
}

export default Section3;
