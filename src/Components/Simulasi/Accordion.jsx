import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 mb-2 mt-5 rounded-lg overflow-hidden">
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
          {content}
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
        content="Kredit Pemilikan Rumah (KPR) adalah fasilitas pinjaman dari bank atau lembaga keuangan untuk membeli rumah. Pembayaran dilakukan dengan sistem cicilan dalam jangka waktu tertentu."
      />
      <AccordionItem
        title="Cara Kerja KPR"
        content={
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Pengajuan KPR:</strong> Calon pembeli mengajukan
              permohonan KPR dengan dokumen pendukung.
            </li>
            <li>
              <strong>Penilaian Kredit:</strong> Bank menilai kemampuan
              finansial pemohon.
            </li>
            <li>
              <strong>Penaksiran Properti:</strong> Bank menentukan nilai rumah
              yang akan dibeli.
            </li>
            <li>
              <strong>Persetujuan dan Akad Kredit:</strong> Jika disetujui,
              pemohon dan bank menandatangani perjanjian kredit.
            </li>
            <li>
              <strong>Pencairan Dana & Cicilan:</strong> Bank mencairkan dana
              kepada penjual, dan pemohon mulai membayar cicilan.
            </li>
          </ul>
        }
      />
      <AccordionItem
        title="Beberapa Jenis KPR"
        content={
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>KPR Konvensional:</strong> Menggunakan sistem suku bunga
              tetap atau mengambang.
            </li>
            <li>
              <strong>KPR Syariah:</strong> Berdasarkan prinsip syariah seperti
              murabahah (jual beli dengan margin).
            </li>
            <li>
              <strong>KPR Subsidi:</strong> Diberikan kepada masyarakat
              berpenghasilan rendah dengan bunga rendah.
            </li>
            <li>
              <strong>KPR Rumah Ibu:</strong> Dikhususkan untuk ibu rumah tangga
              dengan penghasilan rendah.
            </li>
          </ul>
        }
      />
      <AccordionItem
        title="Simulasi KPR"
        content={
          <div>
            Simulasi KPR membantu menghitung cicilan berdasarkan harga rumah,
            suku bunga, dan tenor pinjaman.
            <br />
            <br />
            <strong>Rumus perhitungan cicilan:</strong>
            <pre className="bg-gray-100 p-2 rounded-md mt-2">
              Cicilan = (P × r × (1 + r)^n) / ((1 + r)^n - 1)
            </pre>
            <p className="mt-2">
              <strong>P:</strong> Pinjaman pokok (harga rumah - uang muka){" "}
              <br />
              <strong>r:</strong> Suku bunga per bulan <br />
              <strong>n:</strong> Jumlah bulan (tenor x 12)
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Accordion;
