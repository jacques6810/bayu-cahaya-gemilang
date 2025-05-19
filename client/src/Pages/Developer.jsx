import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Section1 from "../Components/Developer/Section1";
import Footer from "../Components/Footer";
import Loading from "../Components/Modal/Loading";
import Error from "../Components/Modal/Error";
import "../App.css";

function Developer() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchSections = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/developer");
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
      <Footer />
    </div>
  );
}

export default Developer;
