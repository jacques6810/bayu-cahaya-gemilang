import React from "react";
import Section from "../../Components/Section";
import Accordion from "./Accordion";

function Section3({ data }) {
  return (
    <div className="flex flex-col items-center mt-10 py-20 px-10 lg:px-30">
      <Section title={data.title} />
      <Accordion />
    </div>
  );
}

export default Section3;
