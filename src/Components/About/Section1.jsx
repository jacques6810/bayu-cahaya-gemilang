import React, { useState, useEffect } from "react";
import Section from "../Section";
import "../../App.css";

const API_URL = import.meta.env.VITE_API_URL;

function Section1({ data }) {
  const [aboutInfo, setAboutInfo] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const response = await fetch(`${API_URL}/api/about-info`);
        if (!response.ok) {
          throw new Error("Failed to fetch about info");
        }
        const data = await response.json();
        setAboutInfo(data);
      } catch (error) {
        console.error("Error fetching about info:", error);
      }
    };
    fetchAboutInfo();
  }, []);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col items-center justify-center my-20 mx-10">
      <Section title={data.title} />

      {aboutInfo.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center text-justify max-w-6xl w-full gap-10 mt-20`}
        >
          {/* Skeleton Placeholder */}
          <div className="w-full md:w-1/2 h-70 relative rounded-lg overflow-hidden">
            {!loadedImages[item.id] && (
              <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-lg z-0" />
            )}
            <img
              src={item.background_image}
              alt={item.title}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                loadedImages[item.id] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(item.id)}
              data-aos="fade-up"
            />
          </div>

          {/* Text Content */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center h-full"
            data-aos="fade-up"
          >
            <div className="flex flex-row gap-5">
              <img src={item.logo} alt="" className="h-8 w-8" />
              <h1 className="text-2xl lg:text-3xl font-bold text-secondary-color text-justify">
                {item.title}
              </h1>
            </div>
            <p className="text-sm lg:text-base text-gray-700 mt-4 text-justify">
              {item.paragraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section1;
