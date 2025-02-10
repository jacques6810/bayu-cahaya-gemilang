import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/Logo BCG.png";
import IconWA from "../assets/Icon Whatsapp.png";
import "../App.css";

function Navbar() {
  const location = useLocation();
  const [selected, setSelected] = useState(
    localStorage.getItem("selected") || "BERANDA"
  );
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("selected", selected);
  }, [selected]);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelected("BERANDA");
        break;
      case "/about":
        setSelected("TENTANG KAMI");
        break;
      case "/developer":
        setSelected("DEVELOPER");
        break;
      case "/simulasi-kpr":
        setSelected("SIMULASI KPR");
        break;
      case "/kontak-kami":
        setSelected("KONTAK KAMI");
        break;
      default:
        setSelected("BERANDA");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSelect = (item) => {
    setSelected(item);
    setMenuOpen(false); // Close the menu when an item is selected
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 start-0 transition-colors duration-300 ${
        scrolled ? "background-secondary-color shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-14" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex items-center whatsapp-color text-sm tracking-widest font-semibold text-white rounded-lg text-sm px-4 py-1.5 text-center"
          >
            <img src={IconWA} alt="Whatsapp Icon" className="h-7 w-7 mr-2" />
            WHATSAPP
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 tracking-widest font-bold border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="/"
                onClick={() => handleSelect("BERANDA")}
                className={`block py-2 px-3 text-xs rounded-sm md:bg-transparent md:p-0 ${
                  selected === "BERANDA"
                    ? "text-primary-color font-bold"
                    : location.pathname === "/"
                    ? "text-white font-normal"
                    : "text-black font-normal"
                }`}
                aria-current="page"
              >
                BERANDA
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={() => handleSelect("TENTANG KAMI")}
                className={`block py-2 px-3 text-xs rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  selected === "TENTANG KAMI"
                    ? "text-primary-color font-bold"
                    : location.pathname === "/"
                    ? "text-white font-normal"
                    : "text-black font-normal"
                }`}
              >
                TENTANG KAMI
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSelect("DEVELOPER")}
                className={`block py-2 px-3 text-xs rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  selected === "DEVELOPER"
                    ? "text-primary-color font-bold"
                    : location.pathname === "/"
                    ? "text-white font-normal"
                    : "text-black font-normal"
                }`}
              >
                DEVELOPER
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSelect("SIMULASI KPR")}
                className={`block py-2 px-3 text-xs rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  selected === "SIMULASI KPR"
                    ? "text-primary-color font-bold"
                    : location.pathname === "/"
                    ? "text-white font-normal"
                    : "text-black font-normal"
                }`}
              >
                SIMULASI KPR
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                onClick={() => handleSelect("KONTAK KAMI")}
                className={`block py-2 px-3 text-xs rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 ${
                  selected === "KONTAK KAMI"
                    ? "text-primary-color font-bold"
                    : location.pathname === "/"
                    ? "text-white font-normal"
                    : "text-black font-normal"
                }`}
              >
                KONTAK KAMI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
