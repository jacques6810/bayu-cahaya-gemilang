import React, { useState, useEffect } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Cek apakah content mengandung bullet list (\n- ...)
  const renderContent = (text) => {
    if (text.includes("\n-")) {
      return (
        <ul className="list-disc list-inside space-y-1">
          {text
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, idx) => (
              <li key={idx}>{line.replace(/^- /, "")}</li>
            ))}
        </ul>
      );
    } else {
      return <p>{text}</p>;
    }
  };

  return (
    <div
      className="border border-gray-300 mb-2 mt-5 rounded-lg overflow-hidden"
      data-aos="fade-up"
    >
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-semibold"
      >
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-xl text-gray-500">{isOpen ? "-" : "+"}</span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-300 text-sm text-gray-600">
          {renderContent(content)}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    const fetchAccordions = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/simulasi-accordion"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch accordions");
        }
        const data = await response.json();
        setAccordions(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchAccordions();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {accordions.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.paragraph}
        />
      ))}
    </div>
  );
};

export default Accordion;
