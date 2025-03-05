import React from "react";
import Section from "../../Components/Section";
import LogoBCG from "../../assets/Logo BCG.png";
import "../../App.css";

function Section2() {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-20 px-10">
      <Section title="VISI & MISI" />

      <p className="text-lg text-center max-w-4xl mt-4" data-aos="fade-up">
        Menjadi pengembang yang unggul dan menjadi solusi bagi masyarakat dalam
        memenuhi kebutuhan papan (tempat tinggal) dengan nuansa asri.
      </p>
      <ul className="text-left max-w-2xl mt-6 mb-6 space-y-4">
        <li className="text-justify" data-aos="fade-up">
          ✅ Menciptakan management yang profesional, berkualitas dengan,
          menjalankan perencanaan kerja yang matang.{" "}
        </li>
        <li className="text-justify" data-aos="fade-up">
          ✅ Menciptakan sistem kerja terintegrasi yang efektif, efisien serta
          produktif.{" "}
        </li>
        <li className="text-justify" data-aos="fade-up">
          ✅ Menciptakan karyawan-karyawan yang berpotensi, jujur, berkualitas
          serta memiliki produktifitas tinggi sehingga dapat dipercaya oleh
          pelanggan.{" "}
        </li>
        <li className="text-justify" data-aos="fade-up">
          ✅ Menghasilkan properti yang berkualitas, bernilai tinggi dan dapat
          mendukung program pemerintahan dalam hal pengadaan perumahan rakyat.{" "}
        </li>
        <li className="text-justify" data-aos="fade-up">
          ✅ Menawarkan hunian berkualitas dengan harga kompetitif.
        </li>
        <li className="text-justify" data-aos="fade-up">
          ✅ Memberikan nilai tambah bagi seluruh stakeholder dan menciptakan
          produk inovatif.
        </li>
      </ul>
    </div>
  );
}

export default Section2;
