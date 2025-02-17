import React from "react";
import LogoBCG from "../../assets/Logo BCG.png";
import "../../App.css";

function Section2() {
  return (
    <div
      className="flex flex-col items-center bg-gray-100 py-20 px-10"
      data-aos="fade-up"
    >
      <img src={LogoBCG} alt="Logo BCG" className="h-15 w-30 mb-7" />
      <h1 className="text-4xl font-semibold text-center mb-5">VISI & MISI</h1>
      <p className="text-lg text-center max-w-4xl mt-4">
        Menjadi pengembang yang unggul dan menjadi solusi bagi masyarakat dalam
        memenuhi kebutuhan papan (tempat tinggal) dengan nuansa asri.
      </p>
      <ul className="text-left max-w-2xl mt-6 mb-6 space-y-4">
        <li className="text-justify">
          ✅ Menciptakan management yang profesional, berkualitas dengan,
          menjalankan perencanaan kerja yang matang.{" "}
        </li>
        <li className="text-justify">
          ✅ Menciptakan sistem kerja terintegrasi yang efektif, efisien serta
          produktif.{" "}
        </li>
        <li className="text-justify">
          ✅ Menciptakan karyawan-karyawan yang berpotensi, jujur, berkualitas
          serta memiliki produktifitas tinggi sehingga dapat dipercaya oleh
          pelanggan.{" "}
        </li>
        <li className="text-justify">
          ✅ Menghasilkan properti yang berkualitas, bernilai tinggi dan dapat
          mendukung program pemerintahan dalam hal pengadaan perumahan rakyat.{" "}
        </li>
        <li className="text-justify">
          ✅ Menawarkan hunian berkualitas dengan harga kompetitif.
        </li>
        <li className="text-justify">
          ✅ Memberikan nilai tambah bagi seluruh stakeholder dan menciptakan
          produk inovatif.
        </li>
      </ul>
    </div>
  );
}

export default Section2;
