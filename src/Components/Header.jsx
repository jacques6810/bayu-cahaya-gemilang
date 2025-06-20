import React from "react";
import "../App.css";

function Header({ data }) {
  return (
    <div className="flex flex-col items-center justify-center py-30 mt-18 sm:mt-22 background-gradient">
      <h1
        className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
        data-aos="fade-up"
      >
        {data.title}
      </h1>
      <p
        className="text-xs lg:text-base text-white opacity-80"
        data-aos="fade-up"
      >
        {data.paragraph}
      </p>
    </div>
  );
}

export default Header;
