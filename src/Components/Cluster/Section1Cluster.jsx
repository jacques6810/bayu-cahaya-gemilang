import React, { useState } from "react";
import Section from "../../Components/Section";
import BCA_Background from "../../assets/BCA Background.jpg";
import Gallery_1 from "../../assets/Gallery BCA_1.jpg";
import Gallery_2 from "../../assets/Gallery BCA_2.jpg";
import Gallery_3 from "../../assets/Gallery BCA_3.jpg";
import Gallery_4 from "../../assets/Gallery BCA_4.jpg";

function Section1Cluster() {
  const [activeTab, setActiveTab] = useState("Deskripsi");

  const [mainImage, setMainImage] = useState(BCA_Background);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [Gallery_1, Gallery_2, Gallery_3, Gallery_4];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 3 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 3 ? 0 : prevIndex + 1
    );
  };

  const displayedImages = galleryImages.slice(currentIndex, currentIndex + 3);
  return (
    <div>
      <Section title="Informasi Cluster" />

      {/* Gambar utama */}
      <div className="flex justify-center max-h-[500px] max-w-6xl mt-10 mx-auto object-cover">
        <img
          src={mainImage}
          alt="Cluster"
          className="w-3/4 rounded-xl shadow-lg"
          data-aos="fade-up"
        />
      </div>

      {/* Gallery */}
      <div
        className="flex justify-center items-center gap-4 mt-6"
        data-aos="fade-up"
      >
        <button
          onClick={handlePrevClick}
          className="text-gray-500 hover:text-gray-700"
        >
          &lt;
        </button>
        <div className="flex gap-4">
          {displayedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-20 h-15 md:w-36 md:h-24 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className="text-gray-500 hover:text-gray-700"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Section1Cluster;
