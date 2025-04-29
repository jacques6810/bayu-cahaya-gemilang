import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo BCG.png";
import IconWA from "../assets/Icon Whatsapp.png";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(
    localStorage.getItem("selected") || "BERANDA"
  );
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("selected", selected);
  }, [selected]);

  useEffect(() => {
    if (location.pathname.includes("/cluster/")) {
      if (location.pathname.startsWith("/")) {
        setSelected("DEVELOPER");
      }
    } else if (location.pathname.includes("/accordion/")) {
      if (location.pathname.startsWith("/simulasi-kpr")) {
        setSelected("SIMULASI KPR");
      }
    } else if (location.pathname.includes("/bank/")) {
      if (location.pathname.startsWith("/simulasi-kpr")) {
        setSelected("SIMULASI KPR");
      }
    } else if (location.pathname.includes("/section/")) {
      if (location.pathname.startsWith("/")) {
        setSelected("BERANDA");
      } else if (location.pathname.startsWith("/about")) {
        setSelected("TENTANG KAMI");
      } else if (location.pathname.startsWith("/developer")) {
        setSelected("DEVELOPER");
      } else if (location.pathname.startsWith("/simulasi-kpr")) {
        setSelected("SIMULASI KPR");
      } else if (location.pathname.startsWith("/kontak-kami")) {
        setSelected("KONTAK KAMI");
      } else {
        setSelected("BERANDA");
      }
    } else {
      switch (true) {
        case location.pathname === "/":
          setSelected("BERANDA");
          break;
        case location.pathname === "/about":
          setSelected("TENTANG KAMI");
          break;
        case location.pathname.startsWith("/developer"):
          setSelected("DEVELOPER");
          break;
        case location.pathname === "/simulasi-kpr":
          setSelected("SIMULASI KPR");
          break;
        case location.pathname === "/kontak-kami":
          setSelected("KONTAK KAMI");
          break;
        default:
          setSelected("BERANDA");
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      }
      // Scrolling up
      else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      // At top of page
      if (currentScrollY === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSelect = (item) => {
    setSelected(item);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 ease-in-out ${
        location.pathname === "/" && !scrolled
          ? "bg-transparent"
          : "bg-white shadow-lg"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-2xl md:max-w-4xl lg:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse transition-transform duration-300 hover:scale-105"
        >
          <img
            src={Logo}
            className="h-10 md:h-14 transition-all duration-300"
            alt="Logo"
          />
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
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
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
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out ${
            menuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 md:max-h-screen opacity-0 md:opacity-100 invisible md:visible"
          } overflow-hidden md:overflow-visible`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 md:text-xs lg:text-sm mt-4 tracking-widest font-bold border border-gray-100 rounded-lg bg-transparent md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {[
              "BERANDA",
              "TENTANG KAMI",
              "DEVELOPER",
              "SIMULASI KPR",
              "KONTAK KAMI",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`/${
                    item === "BERANDA"
                      ? ""
                      : item === "TENTANG KAMI"
                      ? "about"
                      : item.toLowerCase().replace(" ", "-")
                  }`}
                  onClick={() => handleSelect(item)}
                  className={`block py-2 px-3 text-xs rounded-sm md:bg-transparent md:p-0 transition-all duration-300 text-left ${
                    selected === item
                      ? "text-primary-color font-bold scale-105"
                      : location.pathname === "/" && !scrolled
                      ? "text-white font-normal hover:text-primary-color hover:scale-105"
                      : "text-black font-normal hover:text-primary-color hover:scale-105"
                  }`}
                  aria-current={selected === item ? "page" : undefined}
                >
                  {item === "KONTAK KAMI" ? "KONTAK" : item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
