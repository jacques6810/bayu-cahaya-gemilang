import React, { useState } from "react";
import Section from "../Section";
import "../../App.css";

function Section1({ data }) {
  const [hargaProperti, setHargaProperti] = useState(400000000);
  const [sukuBunga, setSukuBunga] = useState(7.7);
  const [jangkaWaktu, setJangkaWaktu] = useState(15);
  const [dpPersen, setDpPersen] = useState(0);

  const dp = (hargaProperti * dpPersen) / 100;
  const pinjaman = hargaProperti - dp;
  const bungaPerBulan = sukuBunga / 100 / 12;
  const totalBulan = jangkaWaktu * 12;
  const angsuran =
    (pinjaman * bungaPerBulan) / (1 - Math.pow(1 + bungaPerBulan, -totalBulan));

  const handleHargaChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("0")) value = value.replace(/^0+/, "");
    setHargaProperti(value);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 mt-10 mx-10">
        <Section title={data.title} />
      </div>
      {/* Form Simulasi */}
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Harga Properti */}
          <div data-aos="fade-up">
            <label className="block text-gray-700 font-semibold mb-2">
              HARGA PROPERTI
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Masukkan harga properti dalam Rupiah"
              value={hargaProperti}
              onChange={handleHargaChange}
              className="w-full p-3 border rounded-lg placeholder:text-xs md:placeholder:text-base"
            />
          </div>

          {/* Jangka Waktu */}
          <div data-aos="fade-up">
            <label className="block text-gray-700 font-semibold mb-2">
              JANGKA WAKTU
            </label>
            <select
              value={jangkaWaktu}
              onChange={(e) => setJangkaWaktu(Number(e.target.value))}
              className="w-full p-3 border rounded-lg"
            >
              {[...Array(20)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Tahun
                </option>
              ))}
            </select>
          </div>

          {/* Pilihan DP */}
          <div data-aos="fade-up">
            <label className="block text-gray-700 font-semibold mb-2">
              UANG MUKA / DP
            </label>
            <select
              value={dpPersen}
              onChange={(e) => setDpPersen(Number(e.target.value))}
              className="w-full p-3 border rounded-lg"
            >
              {[0, 10, 15, 20].map((percent) => (
                <option key={percent} value={percent}>
                  {percent}%
                </option>
              ))}
            </select>
          </div>

          {/* Estimasi Suku Bunga */}
          <div data-aos="fade-up">
            <label className="block text-gray-700 font-semibold mb-2">
              ESTIMASI SUKU BUNGA / TAHUN
            </label>
            <input
              type="text"
              value={sukuBunga}
              className="w-full p-3 border rounded-lg"
            />
            <p className="text-xs text-gray-500 mt-1">
              Simulasi diatas hanya perhitungan dengan suku bunga tetap (fixed).
            </p>
          </div>
        </div>

        {/* Hasil Simulasi */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6"
          data-aos="fade-up"
        >
          <div className="bg-teal-500 text-white p-4 text-center rounded-lg">
            <h2 className="font-semibold">ANGSURAN PERBULAN</h2>
            <p className="text-lg font-bold">
              Rp {angsuran.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="bg-teal-500 text-white p-4 text-center rounded-lg">
            <h2 className="font-semibold">JUMLAH PINJAMAN</h2>
            <p className="text-lg font-bold">
              Rp {pinjaman.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
