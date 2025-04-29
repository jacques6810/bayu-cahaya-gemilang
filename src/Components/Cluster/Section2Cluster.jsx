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

  const specifications = [
    { text: "Batu kali Beton bertulang (Pondasi)", icon: IconPondasi },
    { text: "Rangka Atap Baja Ringan (Struktur)", icon: IconAtap },
    { text: "Air bersih dari PDAM", icon: IconAir },
    { text: "Listrik 1300 Watt", icon: IconListrik },
    { text: "Sanitasi dari Septic Tank", icon: IconSanitasi },
    { text: "Toilet dalam rumah", icon: IconToilet },
    { text: "Dinding bata merah", icon: IconDinding },
    { text: "Lantai keramik 60x60 cm", icon: IconLantaiUtama },
    { text: "Pintu utama kayu solid", icon: IconPintuUtama },
    { text: "Pintu kamar kayu solid", icon: IconPintuKamar },
    { text: "Jendela aluminium", icon: IconJendela },
    { text: "Plafond Gypsum", icon: IconPlafind },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      {/* Tab Navigation - Improved */}
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

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto">
        {activeTab === "Deskripsi" ? (
          <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Tentang Cluster Bukit Ciampea Asri
            </h3>
            <div className="justify-text text-justify space-y-4 text-base md:text-lg text-gray-600">
              <p>
                Bukit Ciampea Asri Bogor menghadirkan hunian eksklusif dengan
                lingkungan yang aman, nyaman, dan asri. Mengusung konsep rumah
                taman, perumahan ini dilengkapi dengan berbagai fasilitas modern
                yang mendukung gaya hidup urban.Keunggulan Bukit Ciampea Asri
                tidak hanya terletak pada desain rumah yang modern dan harga
                yang terjangkau, tetapi juga pada lokasinya yang strategis
                dengan akses transportasi yang mudah. Perumahan ini dirancang
                untuk memberikan kenyamanan maksimal bagi penghuninya, dengan
                tata ruang yang efisien dan estetika yang menawan.
              </p>
              <p>
                Selain itu, Bukit Ciampea Asri menawarkan fasilitas umum seperti
                taman bermain, area olahraga, dan jalur jogging yang dirancang
                untuk mendukung gaya hidup sehat. Lingkungan yang hijau dan asri
                memberikan suasana yang tenang dan damai, menjadikannya tempat
                yang ideal untuk keluarga. Dengan lokasi yang dekat dengan pusat
                perbelanjaan, sekolah, dan fasilitas kesehatan, penghuni dapat
                dengan mudah memenuhi kebutuhan sehari-hari tanpa harus
                bepergian jauh. Bukit Ciampea Asri juga memiliki akses yang
                mudah ke jalan utama, sehingga memudahkan mobilitas ke berbagai
                tujuan.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8" data-aos="fade-up">
            {/* Specifications List */}
            <div className="flex-1 bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Detail Spesifikasi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="w-10 h-10 object-contain flex-shrink-0"
                    />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floorplan */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Denah Rumah
                </h3>
                <img
                  src={FloorplanBCA}
                  alt="Floorplan"
                  className="w-full rounded-lg border border-gray-200"
                />
                <button className="mt-4 w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
                  Download Denah
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section2Cluster;
