import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Section1 from "../Components/Simulasi/Section1";
import Section2 from "../Components/Simulasi/Section2";
import Section3 from "../Components/Simulasi/Section3";
import Footer from "../Components/Footer";
import Loading from "../Components/Modal/Loading";
import Error from "../Components/Modal/Error";
import "../App.css";

const API_URL = import.meta.env.VITE_API_URL;

function Simulasi() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchSections = async () => {
      try {
        const response = await fetch(`${API_URL}/api/simulasi`);
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

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-200">
        <Error message={error} />
      </div>
    );

  return (
    <div>
      <Navbar />
      <Header data={sections.find((s) => s.id === 1)} />
      <Section1 data={sections.find((s) => s.id === 2)} />
      <Section2 data={sections.find((s) => s.id === 3)} />
      <Section3 data={sections.find((s) => s.id === 4)} />
      <Footer />
    </div>
  );
}

export default Simulasi;
