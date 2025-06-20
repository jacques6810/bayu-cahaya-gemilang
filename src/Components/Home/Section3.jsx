import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "../Section";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const Section3 = ({ data }) => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    draggable: false,
  };

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchClusters = async () => {
      try {
        const response = await fetch(`${API_URL}/api/cluster`);
        if (!response.ok) {
          throw new Error("Failed to fetch clusters");
        }
        const data = await response.json();

        // Mapping hanya ambil title dan image_preview
        const mappedSlides = data.map((cluster) => ({
          title: cluster.title,
          image: cluster.image_preview,
        }));

        setSlides(mappedSlides);
      } catch (error) {
        console.error("Error fetching clusters:", error);
      }
    };

    fetchClusters();
  }, []);

  return (
    <div className="flex flex-col items-center mx-auto md:w-full mb-4 md:mb-0 w-full lg:w-full p-4">
      <div
        id="section-3"
        className="flex flex-col items-center w-full bg-white p-6 md:p-10"
      >
        <Section title={data.title} />

        <div className="relative w-full max-w-5xl" data-aos="fade-up">
          {/* Tombol Panah Kiri */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="mx-4 absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            <FaChevronLeft className="text-teal-500 text-xl" />
          </button>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="px-3">
                <div className="relative h-72 md:h-115 rounded-xl overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
                    <div className="absolute w-full h-full bg-black opacity-35 z-0"></div>
                    <h3 className="mx-18 text-center text-white text-lg md:text-3xl font-bold z-10">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Tombol Panah Kanan */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="mx-4 absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            <FaChevronRight className="text-teal-500 text-xl" />
          </button>
        </div>

        <div className="flex gap-4 mt-6" data-aos="fade-up">
          <button className="text-xs md:text-sm font-semibold px-4 py-3 md:px-6 md:py-3 border-3 border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
            <a href="/developer">Selengkapnya</a>
          </button>
          <button className="text-xs md:text-sm font-semibold px-4 py-3 md:px-8 md:py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
            <a href="/simulasi-kpr">Simulasi KPR</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
