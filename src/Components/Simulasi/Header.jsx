import React from "react";
import "../../App.css";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center py-30 mt-20 background-gradient">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
        SIMULASI KPR
      </h1>
      <p className="text-xs lg:text-base text-white opacity-80">
        Silahkan lakukan simulasi KPR halaman ini.
      </p>
    </div>
  );
}

export default Header;
