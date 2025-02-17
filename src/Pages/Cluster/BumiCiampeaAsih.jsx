import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../App.css";
import BCA_Background from "../../assets/BCA Background.jpg";
import BCA_Logo from "../../assets/BCA Logo.svg";
import LogoBCG from "../../assets/Logo BCG.png";
import Gallery_1 from "../../assets/Gallery BCA_1.jpg";
import Gallery_2 from "../../assets/Gallery BCA_2.jpg";
import Gallery_3 from "../../assets/Gallery BCA_3.jpg";
import Gallery_4 from "../../assets/Gallery BCA_4.jpg";
import FloorplanBCA from "../../assets/Floorplan BCA.jpg";
import IconPondasi from "../../assets/IconSpesifikasi/Icon Pondasi BCA.png";
import IconAtap from "../../assets/IconSpesifikasi/Icon Atap BCA.png";
import IconAir from "../../assets/IconSpesifikasi/Icon Air BCA.png";
import IconListrik from "../../assets/IconSpesifikasi/Icon Listrik BCA.png";
import IconSanitasi from "../../assets/IconSpesifikasi/Icon Sanitasi BCA.png";
import IconToilet from "../../assets/IconSpesifikasi/Icon Toilet BCA.png";
import IconDinding from "../../assets/IconSpesifikasi/Icon Dinding BCA.png";
import IconLantaiUtama from "../../assets/IconSpesifikasi/Icon LantaiUtama BCA.png";
import IconPintuUtama from "../../assets/IconSpesifikasi/Icon PintuUtama BCA.png";
import IconPintuKamar from "../../assets/IconSpesifikasi/Icon PintuKamar BCA.png";
import IconJendela from "../../assets/IconSpesifikasi/Icon Jendela BCA.png";
import IconPlafind from "../../assets/IconSpesifikasi/Icon Plafind BCA.png";

function BumiCiampeaAsih() {
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
      <Navbar />
      <div className="relative flex flex-col items-center justify-center mt-20">
        {/* Background */}
        <img
          src={BCA_Background}
          alt="Background"
          className="w-full h-110 object-cover"
        />
        <div className="absolute w-full h-full bg-black opacity-50"></div>

        {/* Logo Cluster */}
        <div className="absolute flex items-center justify-center inset-0">
          <img
            src={BCA_Logo}
            alt="Cluster Logo"
            className="w-32 h-32 bg-white rounded-full p-3 shadow-lg"
          />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex flex-col items-center justify-center py-20">
        <img src={LogoBCG} alt="Logo BCG" className="h-15 w-30 mb-7" />
        <h1 className="text-4xl font-semibold mb-20">Informasi Cluster</h1>

        {/* Gambar utama */}
        <div className="flex justify-center max-h-[500px] max-w-6xl mx-auto object-cover">
          <img
            src={mainImage}
            alt="Cluster"
            className="w-3/4 rounded-xl shadow-lg"
          />
        </div>

        {/* Gallery */}
        <div className="flex justify-center items-center gap-4 mt-6">
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

        {/* Tab Navigasi */}
        <div className="flex justify-center mt-15 border-b border-gray-300">
          {["Deskripsi", "Spesifikasi"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-lg font-semibold ${
                activeTab === tab
                  ? "text-teal-500 border-b-2 border-teal-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Konten Tab */}
        <div className="w-3/4 mx-auto mt-5 text-justify text-gray-700">
          {activeTab === "Deskripsi" ? (
            <div className="max-w-4xl mx-auto">
              <p>
                Bukit Ciampea Asri Bogor menghadirkan hunian eksklusif dengan
                lingkungan yang aman, nyaman, dan asri. Mengusung konsep rumah
                taman, perumahan ini dilengkapi dengan berbagai fasilitas modern
                yang mendukung gaya hidup urban, menjadikannya pilihan ideal
                bagi mereka yang menginginkan keseimbangan antara kenyamanan dan
                aksesibilitas.
              </p>
              <p className="mt-5">
                Keunggulan Bukit Ciampea Asri tidak hanya terletak pada desain
                rumah yang modern dan harga yang terjangkau, tetapi juga pada
                lokasinya yang strategis. Dengan akses transportasi yang mudah
                serta kedekatan dengan berbagai fasilitas umum, penghuni dapat
                menikmati kemudahan dalam memenuhi kebutuhan sehari-hari.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 max-w-4xl mx-auto">
              <div className="lg:col-span-2 lg:mr-40 mx-auto">
                {[
                  {
                    text: "Batu kali Beton bertulang (Pondasi)",
                    icon: IconPondasi,
                  },
                  {
                    text: "Rangka Atap Baja Ringan (Struktur)",
                    icon: IconAtap,
                  },
                  {
                    text: "Bata press, roster kotak (Dinding)",
                    icon: IconDinding,
                  },
                  {
                    text: "Granit Tile - 60 x 60 (Lantai Utama)",
                    icon: IconLantaiUtama,
                  },
                  {
                    text: "Engineering wood fin, melamic (Pintu Utama)",
                    icon: IconPintuUtama,
                  },
                  { text: "Wood Panel (Pintu Kamar)", icon: IconPintuKamar },
                  {
                    text: "Aluminium powder coating (Jendela)",
                    icon: IconJendela,
                  },
                  {
                    text: "Gypsum, Rangka Hollow (Plafond)",
                    icon: IconPlafind,
                  },
                  {
                    text: "Genteng beton rangka baja ringan (Atap)",
                    icon: IconAtap,
                  },
                  { text: "PDAM (Air)", icon: IconAir },
                  { text: "1300VA (Listrik)", icon: IconListrik },
                  { text: "American Standard (Sanitasi)", icon: IconSanitasi },
                  {
                    text: "Closet Duduk Toto Standart (Toilet)",
                    icon: IconToilet,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 mt-2">
                    <img src={item.icon} alt="icon" className="w-8 h-8" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={FloorplanBCA}
                  alt="Floorplan"
                  className="w-full max-w-sm rounded-lg shadow-lg"
                />
                <div className="flex gap-5 mt-3 text-gray-700">
                  <span>
                    Luas Bangunan: <strong>30</strong>
                  </span>
                  <span>
                    Luas Tanah: <strong>72</strong>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BumiCiampeaAsih;
