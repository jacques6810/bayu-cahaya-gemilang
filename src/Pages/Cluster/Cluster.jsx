import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Cluster/HeaderCluster";
import Section1 from "../../Components/Cluster/Section1Cluster";
import Section2 from "../../Components/Cluster/Section2Cluster";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Modal/Loading";
import Error from "../../Components/Modal/Error";
import "../../App.css";

function Cluster() {
  const { id } = useParams();
  const [clusterData, setClusterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Fetch data cluster berdasarkan id
    const fetchCluster = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/cluster/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch cluster data");
        }
        const data = await response.json();
        setClusterData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCluster();
  }, [id]);

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
      <Header data={clusterData} />
      {/* Section */}
      <div className="flex flex-col items-center justify-center py-20">
        <Section1 />
        <Section2 />
      </div>

      <Footer />
    </div>
  );
}

export default Cluster;
