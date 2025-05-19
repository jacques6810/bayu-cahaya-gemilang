import React, { useState, useEffect } from "react";
import Section from "../../Components/Section";
import "../../App.css";

function Section2({ data }) {
  const [bank, setBank] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBank = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/simulasi-bank");
        if (!response.ok) {
          throw new Error("Failed to fetch bank data");
        }
        const data = await response.json();

        // Mapping ambil hanya id dan logo
        const mappedBank = data.map((bank) => ({
          id: bank.id,
          logo: bank.logo,
        }));

        setBank(mappedBank);
      } catch (error) {
        console.error("Error fetching bank data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBank();
  }, []);

  return (
    <div className="w-full bg-gray-200">
      <div className="flex flex-col items-center justify-center py-20 mx-20 mt-20">
        <Section title={data.title} />

        {/* Bank Mitra */}
        {loading ? (
          <p className="text-gray-500 mt-10">Loading logo bank...</p>
        ) : bank.length === 0 ? (
          <p className="text-red-500 mt-10">
            Tidak ada logo bank yang tersedia.
          </p>
        ) : (
          <div
            className="grid justify-center gap-10 my-10 gap-5 sm:gap-15 md:px-5 lg:px-20 lg:gap-20 items-center justify-items-center w-full object-cover grid-cols-3 md:grid-cols-5"
            data-aos="fade-up"
          >
            {bank.map((item) => (
              <img
                key={item.id}
                src={item.logo}
                alt={`Bank-${item.id}`}
                className="h-auto w-auto mb-7 max-h-30 object-contain"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section2;
