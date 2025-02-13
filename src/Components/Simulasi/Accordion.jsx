import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 mb-2">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between shadow-md text-gray-600 items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4 bg-white">
          <p className="text-sm">{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <AccordionItem
        title="Kredit Pemilikan Rumah (KPR)"
        content="Penjelasan tentang Kredit Pemilikan Rumah."
      />
      <AccordionItem
        title="Cara Kerja KPR"
        content="Bagaimana cara kerja KPR dalam pembiayaan rumah."
      />
      <AccordionItem
        title="Beberapa Jenis KPR"
        content={
          <ul className="list-disc list-inside">
            <li>
              <strong>KPR Konvensional:</strong> Menggunakan sistem bunga tetap.
            </li>
            <li>
              <strong>KPR Syariah:</strong> Berdasarkan prinsip syariah seperti
              murabahah.
            </li>
            <li>
              <strong>KPR Subsidi:</strong> Untuk masyarakat dengan suku bunga
              rendah.
            </li>
            <li>
              <strong>KPR Rumah Ibu:</strong> Untuk ibu rumah tangga dengan
              penghasilan rendah.
            </li>
          </ul>
        }
      />
      <AccordionItem
        title="Simulasi KPR"
        content="Bagaimana cara melakukan simulasi KPR dengan mudah."
      />
    </div>
  );
};

export default Accordion;
