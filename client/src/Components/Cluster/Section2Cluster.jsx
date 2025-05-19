import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";

function Section2Cluster({ cluster_id }) {
  const [activeTab, setActiveTab] = useState("Deskripsi");
  const [specifications, setSpecifications] = useState([]);
  const [title, setTitle] = useState(""); // State untuk title
  const [description, setDescription] = useState(""); // State untuk deskripsi
  const [imageFloorplan, setImageFloorplan] = useState(""); // State untuk image_floorplan

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Fetch data spesifikasi
    const fetchSpesifikasi = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/cluster-spesifikasi/cluster/${cluster_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch specifications");
        }
        const data = await response.json();
        setSpecifications(data);
      } catch (error) {
        console.error("Error fetching specifications:", error);
      }
    };

    // Fetch data cluster (title, deskripsi, image_floorplan)
    const fetchClusterDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/cluster/${cluster_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cluster details");
        }
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.deskripsi);
        setImageFloorplan(data.image_floorplan);
      } catch (error) {
        console.error("Error fetching cluster details:", error);
      }
    };

    fetchSpesifikasi();
    fetchClusterDetails();
  }, [cluster_id]);

  const handleDownload = async () => {
    const response = await fetch(imageFloorplan);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `Konten_${title?.replace(/\s+/g, "_") || "Rumah"}.jpg`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      {/* Tab Navigation */}
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
              Tentang {title}
            </h3>
            <div className="justify-text text-justify space-y-4 text-base md:text-lg text-gray-600">
              {description ? (
                description
                  .replace(/\\n/g, "\n") // ganti literal \n ke real newline
                  .split("\n")
                  .map((line, index) => <p key={index}>{line}</p>)
              ) : (
                <p>Deskripsi tidak tersedia.</p>
              )}
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
                {specifications.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-10 h-10 object-contain flex-shrink-0"
                    />
                    <span className="text-gray-700">{item.title}</span>
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
                  src={imageFloorplan}
                  alt="Floorplan"
                  className="w-full rounded-lg border border-gray-200"
                />
                <button
                  onClick={handleDownload}
                  className="mt-4 w-full inline-block text-center font-semibold tracking-wider py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                >
                  DOWNLOAD KONTEN
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
