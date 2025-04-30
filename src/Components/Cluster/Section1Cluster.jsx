import React, { useState, useEffect } from "react";
import Section from "../../Components/Section";
import BCA_Background from "../../assets/BCA Background.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Section1Cluster({ cluster_id }) {
  const [mainImage, setMainImage] = useState(BCA_Background);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]); // State untuk menyimpan gambar dari API

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/cluster-gallery/cluster/${cluster_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch gallery images");
        }
        const data = await response.json();
        const images = data.map((image) => image.image_cluster);
        console.log("Fetched images:", images);

        if (images.length > 0) {
          setGalleryImages(images);
          setMainImage(images[0]);
          setCurrentIndex(0);
        } else {
          setMainImage(BCA_Background);
        }
      } catch (error) {
        console.error("Error fetching gallery images:", error);
        setMainImage(BCA_Background);
      }
    };

    fetchGalleryImages();
  }, [cluster_id]);

  const handlePrevClick = () => {
    const newIndex =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setMainImage(galleryImages[newIndex]);
  };

  const handleNextClick = () => {
    const newIndex =
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setMainImage(galleryImages[newIndex]);
  };

  const handleThumbnailClick = (index) => {
    setMainImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  // Determine how many thumbnails to show based on screen size
  const displayedThumbnails = window.innerWidth < 768 ? 3 : 4;
  const startIndex = Math.min(
    Math.max(0, currentIndex - Math.floor(displayedThumbnails / 2)),
    Math.max(0, galleryImages.length - displayedThumbnails)
  );
  const visibleThumbnails = galleryImages.slice(
    startIndex,
    startIndex + displayedThumbnails
  );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <Section title="Cluster Gallery" />

      {/* Main Image with Modern Frame */}
      <div className="max-w-6xl mx-auto md:mt-1 mb-8 px-2 sm:px-0">
        <div className="relative overflow-hidden rounded-xl shadow-xl border-8 border-white bg-white">
          <img
            src={mainImage}
            alt="Cluster"
            className="w-full h-auto object-cover transition-opacity duration-300"
            style={{ minHeight: "300px", maxHeight: "500px" }}
            data-aos="fade-up"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Gallery {currentIndex + 1}
            </h3>
            <p className="text-white/80 text-xs md:text-sm mt-1">
              {galleryImages.length} gallery images available
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Navigation */}
      <div className="max-w-6xl mx-auto px-2 sm:px-0" data-aos="fade-up">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-gray-700 font-medium">Browse Gallery</h4>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>

        <div className="relative">
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {visibleThumbnails.map((image, index) => {
              const originalIndex = startIndex + index;
              return (
                <div
                  key={originalIndex}
                  className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                    originalIndex === currentIndex
                      ? "border-teal-500 scale-105"
                      : "border-transparent"
                  }`}
                  onClick={() => handleThumbnailClick(originalIndex)}
                >
                  <img
                    src={image}
                    alt={`Gallery ${originalIndex + 1}`}
                    className="w-full h-24 sm:h-32 md:h-40 object-cover hover:opacity-90"
                  />
                  <div
                    className={`absolute inset-0 ${
                      originalIndex === currentIndex
                        ? "bg-black/20"
                        : "bg-black/0"
                    } transition-all duration-300`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous image"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next image"
          >
            <FiChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1Cluster;
