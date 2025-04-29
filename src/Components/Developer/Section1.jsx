import React, { useState, useEffect } from "react";
import Section from "../../Components/Section";
import ClusterComponent from "./ClusterComponent";
import "../../App.css";

function Section1({ data }) {
  const [clusters, setClusters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClusters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cluster");
        if (!response.ok) {
          throw new Error("Failed to fetch clusters");
        }
        const data = await response.json();

        const mappedClusters = data.map((cluster) => ({
          id: cluster.id,
          title: cluster.title,
          image: cluster.image_preview,
        }));

        setClusters(mappedClusters);
      } catch (error) {
        console.error("Error fetching clusters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClusters();
  }, []);

  return (
    <div className="flex flex-col items-center py-20 px-10 lg:px-20 xl:px-60">
      <Section title={data.title} />

      <div className="grid gap-6 my-10 w-full object-cover grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {loading
          ? // Skeleton loading
            Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="w-full h-64 bg-gray-300 rounded-lg animate-pulse"
              ></div>
            ))
          : // Render dynamic cluster data
            clusters.map((cluster) => (
              <ClusterComponent
                key={cluster.id}
                image={cluster.image}
                title={cluster.title}
              />
            ))}
      </div>
    </div>
  );
}

export default Section1;
