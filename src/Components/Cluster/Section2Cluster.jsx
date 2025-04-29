import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import "../../App.css";

function Section2Cluster() {
  const [activeTab, setActiveTab] = useState("Deskripsi");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full">
      {/* Tab Navigasi */}
      <div className="flex justify-center my-10" data-aos="fade-up">
        <div className="inline-flex border-b border-gray-300">
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
      </div>

      {/* Konten Tab */}
      <div
        className="w-3/4 mx-auto mt-5 text-justify text-gray-700"
        data-aos="fade-up"
      >
        {activeTab === "Deskripsi" ? (
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <p>
              Bukit Ciampea Asri Bogor menghadirkan hunian eksklusif dengan
              lingkungan yang aman, nyaman, dan asri. Mengusung konsep rumah
              taman, perumahan ini dilengkapi dengan berbagai fasilitas modern
              yang mendukung gaya hidup urban, menjadikannya pilihan ideal bagi
              mereka yang menginginkan keseimbangan antara kenyamanan dan
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
                <div key={index} className="flex items-center gap-4 mt-3">
                  <img src={item.icon} alt="icon" className="w-8 h-8" />
                  <span className="text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <img
                src={FloorplanBCA}
                alt="Floorplan"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section2Cluster;
