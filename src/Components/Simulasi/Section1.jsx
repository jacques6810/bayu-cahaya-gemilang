import React, { useState } from "react";
import LogoBCG from "../../Assets/Logo BCG.png";
import "../../App.css";

function Section1() {
  const [hargaProperti, setHargaProperti] = useState(400000000);
  const [dp, setDp] = useState(80000000);
  const [sukuBunga, setSukuBunga] = useState(7.7);
  const [jangkaWaktu, setJangkaWaktu] = useState(15);

  const pinjaman = hargaProperti - dp;
  const bungaPerBulan = sukuBunga / 100 / 12;
  const totalBulan = jangkaWaktu * 12;
  const angsuran =
    (pinjaman * bungaPerBulan) / (1 - Math.pow(1 + bungaPerBulan, -totalBulan));

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20">
        <img src={LogoBCG} alt="Logo BCG" className="h-15 w-30 mb-7" />
        <h1 className="text-4xl font-semibold text-center mb-5">SIMULASI</h1>
      </div>
      {/* Form Simulasi */}
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Harga Properti */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              HARGA PROPERTI
            </label>
            <input
              type="number"
              value={hargaProperti}
              onChange={(e) => setHargaProperti(Number(e.target.value))}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Jangka Waktu */}
          <div>
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

          {/* Uang Muka */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              UANG MUKA / DP 20%
            </label>
            <input
              type="number"
              value={dp}
              onChange={(e) => setDp(Number(e.target.value))}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Estimasi Suku Bunga */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              ESTIMASI SUKU BUNGA / TAHUN
            </label>
            <input
              type="number"
              value={sukuBunga}
              onChange={(e) => setSukuBunga(Number(e.target.value))}
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>

        {/* Hasil Simulasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
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

        <p className="text-sm text-gray-600 text-center mt-4">
          Simulasi di atas hanya perhitungan dengan suku bunga tetap (fixed)
        </p>
      </div>
    </div>
  );
}

export default Section1;
