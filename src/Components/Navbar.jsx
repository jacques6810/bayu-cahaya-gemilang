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
  const [visible, setVisible] = useState(true);

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
    let timeoutId;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        setScrolled(false);
        setVisible(true);
        clearTimeout(timeoutId);
      } else {
        setScrolled(true);
        setVisible(true);

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSelect = (item) => {
    setSelected(item);
    setMenuOpen(false); // Close the menu when an item is selected
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed w-full z-50 top-0 start-0 lg:w-full transition-all duration-300 ${
        scrolled ? "background-secondary-color shadow-lg" : "bg-transparent"
      } ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="max-w-2xl md:max-w-4xl lg:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-10 md:h-14" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex items-center whatsapp-color text-xs md:text-sm tracking-widest font-semibold text-white rounded-lg text-sm px-4 py-1 md:px-4 md:py-1.5 text-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={IconWA}
              alt="Whatsapp Icon"
              className="h-6 w-6 md:h-7 md:w-7 mr-2"
            />
            WHATSAPP
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-400"
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
          <ul className="flex flex-col p-4 md:p-0 md:text-xs lg:text-sm mt-4 tracking-widest font-bold border border-gray-100 rounded-lg bg-transparent md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="/"
                onClick={() => handleSelect("BERANDA")}
                className={`block py-2 px-3 text-xs rounded-sm md:bg-transparent md:p-0 transform transition-transform duration-300 ${
                  selected === "BERANDA"
                    ? "text-primary-color font-bold"
                    : isHomePage || scrolled
                    ? "text-white font-normal hover:text-primary-color hover:scale-105"
                    : "text-black font-normal hover:text-primary-color hover:scale-105"
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
                className={`block py-2 px-3 text-xs rounded-sm md:bg-transparent md:p-0 transform transition-transform duration-300 ${
                  selected === "TENTANG KAMI"
                    ? "text-primary-color font-bold"
                    : isHomePage || scrolled
                    ? "text-white font-normal hover:text-primary-color hover:scale-105"
                    : "text-black font-normal hover:text-primary-color hover:scale-105"
                }`}
              >
                TENTANG KAMI
              </a>
            </li>
            <li>
              <a
                href="/developer"
                onClick={() => handleSelect("DEVELOPER")}
                className={`block py-2 px-3 text-xs rounded-sm md:bg-transparent md:p-0 transform transition-transform duration-300 ${
                  selected === "DEVELOPER"
                    ? "text-primary-color font-bold"
                    : isHomePage || scrolled
                    ? "text-white font-normal hover:text-primary-color hover:scale-105"
                    : "text-black font-normal hover:text-primary-color hover:scale-105"
                }`}
              >
                DEVELOPER
              </a>
            </li>
            <li>
              <a
                href="/simulasi-kpr"
                onClick={() => handleSelect("SIMULASI KPR")}
                className={`block py-2 px-3 text-xs rounded-sm md:bg-transparent md:p-0 transform transition-transform duration-300 ${
                  selected === "SIMULASI KPR"
                    ? "text-primary-color font-bold"
                    : isHomePage || scrolled
                    ? "text-white font-normal hover:text-primary-color hover:scale-105"
                    : "text-black font-normal hover:text-primary-color hover:scale-105"
                }`}
              >
                SIMULASI KPR
              </a>
            </li>{" "}
            <li>
              <a
                href="/kontak-kami"
                onClick={() => handleSelect("KONTAK KAMI")}
                className={`block py-2 px-3 text-xs rounded-sm md:bg-transparent md:p-0 transform transition-transform duration-300 ${
                  selected === "KONTAK KAMI"
                    ? "text-primary-color font-bold"
                    : isHomePage || scrolled
                    ? "text-white font-normal hover:text-primary-color hover:scale-105"
                    : "text-black font-normal hover:text-primary-color hover:scale-105"
                }`}
              >
                KONTAK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
