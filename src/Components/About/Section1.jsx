import React from "react";
import Section from "../../Components/Section";
import BackgroundImage from "../../assets/Background Home.png";
import IconCompany from "../../assets/Icon Company.png";
import IconLegality from "../../assets/Icon Legality.png";
import IconCommitment from "../../assets/Icon Commitment.png";
import "../../App.css";

function Section1({ data }) {
  return (
    <div className="flex flex-col items-center justify-center my-20 mx-10">
      <Section title={data.title} />

      {/* Profil Perusahaan */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-center text-justify max-w-6xl w-full gap-10 mt-10 mb-16">
        <img
          src={BackgroundImage}
          alt="Profil Perusahaan"
          className="w-full md:w-1/2 h-70 object-cover rounded-lg"
          data-aos="fade-up"
        />
        <div
          className="w-full md:w-1/2 flex flex-col justify-center h-full"
          data-aos="fade-up"
        >
          <div className="flex flex-row gap-5">
            <img src={IconCompany} alt="" className="h-8 w-8" />
            <h1 className="text-2xl lg:text-3xl font-bold text-secondary-color text-justify">
              PROFIL PERUSAHAAN
            </h1>
          </div>
          <p className="text-sm lg:text-base text-gray-700 mt-4 text-justify">
            PT. Bayu Cahaya Gemilang merupakan perusahaan yang bergerak dalam
            bidang pengembangan properti yang memfokuskan diri pada pengembangan
            rumah, investasi, dan manajemen properti. Didirikan pada tahun 2016,
            saat ini PT. Bayu Cahaya Gemilang sedang mengembangkan perumahan
            Bukit Ciampea Asri yang merupakan perumahan komersil dengan harga
            murah serta mewah dan mempunyai konsep yang asri di daerah Bogor.
          </p>
        </div>
      </div>

      {/* Legalitas & Pendirian */}
      <div className="flex flex-col md:flex-row items-center text-justify md:items-center max-w-6xl w-full gap-10 mb-16">
        <img
          src={BackgroundImage}
          alt="Legalitas & Pendirian"
          className="w-full md:w-1/2 h-70 object-cover rounded-lg"
          data-aos="fade-up"
        />
        <div
          className="w-full md:w-1/2 flex flex-col justify-center h-full"
          data-aos="fade-up"
        >
          <div className="flex flex-row gap-5">
            <img src={IconLegality} alt="" className="h-8 w-8" />
            <h1 className="text-2xl lg:text-3xl font-bold text-secondary-color text-justify">
              LEGALITAS & PENDIRIAN
            </h1>
          </div>
          <p className="text-sm lg:text-base text-gray-700 mt-4 text-justify">
            Perusahaan didirikan di Kota Tangerang berdasarkan Akta Notaris ayng
            dibuat oleh Notaris Dewi Sukardi, S.H,. M.Kn., serta telah
            memperoleh persetujuan dari Menteri Kehakiman dan Hak Asasi Manusia
            Republik Indonesia melalui surat keputusan Nomor AHU-0484.A H.02.02
            - Tahun 2010 pada Tanggal 4 Mei 2016.
          </p>
        </div>
      </div>

      {/* Komitmen & Pengembangan */}
      <div className="flex flex-col md:flex-row-reverse items-center text-justify md:items-center max-w-6xl w-full gap-10 mb-16">
        <img
          src={BackgroundImage}
          alt="Komitmen & Pengembangan"
          className="w-full md:w-1/2 h-70 object-cover rounded-lg"
          data-aos="fade-up"
        />
        <div
          className="w-full md:w-1/2 flex flex-col justify-center h-full"
          data-aos="fade-up"
        >
          <div className="flex flex-row gap-5">
            <img src={IconCommitment} alt="" className="h-8 w-8" />
            <h1 className="text-2xl lg:text-3xl font-bold text-secondary-color text-justify">
              KOMITMEN & INOVASI
            </h1>
          </div>
          <p className="text-sm lg:text-base text-gray-700 mt-4 text-justify">
            PT. Bayu Cahaya Gemilang saat ini beroperasi di Tangerang. Dalam
            rangka pengembangan Bukit Ciampea Asri, PT. Bayu Cahaya Gemilang
            berkomitmen untuk meningkatkan kinerja perusahaan melalui penerapan
            menejemen teknologi. Komitmen perusahaan tersebut dibangun dengan
            tujuan untuk meningkatkan kepuasan pelanggan secara nyata dengan
            menghasilkan karya konstruksi yang berkualitas dan tepat waktu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
