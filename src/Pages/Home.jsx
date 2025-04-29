import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Section1 from "../Components/Home/Section1";
import Section2 from "../Components/Home/Section2";
import Section3 from "../Components/Home/Section3";
import Section4 from "../Components/Home/Section4";
import Footer from "../Components/Footer";
import "../App.css";

function Home() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchSections = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/home");
        if (!response.ok) {
          throw new Error("Failed to fetch sections");
        }
        const data = await response.json();
        setSections(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  if (loading)
    return (
      <div className="relative w-full h-full">
        <div className="relative w-full h-screen bg-gray-200 animate-pulse">
          <Navbar />

          {/* Background Skeleton */}
          <div className="absolute w-full h-full bg-gray-300 object-cover blur-sm"></div>
          <div className="absolute w-full h-full bg-black opacity-50"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        {/* <Navbar /> */}

        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center animate-fade-in">
          {/* Error Icon */}
          <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="h-10 w-10 text-red-500 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Gagal Memuat Data
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 text-base bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="relative w-full h-full">
      <Navbar />
      <Section1 data={sections.find((s) => s.id === 1)} />
      <Section2 data={sections.find((s) => s.id === 2)} />
      <Section3 data={sections.find((s) => s.id === 3)} />
      <Section4 data={sections.find((s) => s.id === 4)} />
      <Footer />
    </div>
  );
}

export default Home;
