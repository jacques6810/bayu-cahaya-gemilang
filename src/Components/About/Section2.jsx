import React, { useState, useEffect } from "react";
import Section from "../Section";
import "../../App.css";

const API_URL = import.meta.env.VITE_API_URL;

function Section2({ data }) {
  const [aboutPoints, setAboutPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutPoints = async () => {
      try {
        const response = await fetch(`${API_URL}/api/about-point`);
        if (!response.ok) {
          throw new Error("Failed to fetch about points");
        }
        const data = await response.json();

        const mappedPoints = data.map((about) => ({
          id: about.id,
          title: about.title,
        }));

        setAboutPoints(mappedPoints);
      } catch (error) {
        console.error("Error fetching about points:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutPoints();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 py-20 px-10">
      <Section title={data.title} />

      <p className="text-lg text-center max-w-4xl mt-4" data-aos="fade-up">
        {data.paragraph}
      </p>

      <ul className="text-left max-w-2xl mt-6 mb-6 space-y-4">
        {loading
          ? // Skeleton loading (6 lines)
            Array.from({ length: 6 }).map((_, index) => (
              <li
                key={index}
                className="h-6 bg-gray-300 rounded animate-pulse"
              ></li>
            ))
          : // Render actual data
            aboutPoints.map((point) => (
              <li key={point.id} className="text-justify" data-aos="fade-up">
                {point.title}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Section2;
