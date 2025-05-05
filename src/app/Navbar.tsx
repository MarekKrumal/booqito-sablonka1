"use client";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setNavOpen((o) => !o);
  };

  const handleNavigation = (path: string) => {
    // If we're on a dynamic route (like /rooms/[id]) and navigating to homepage
    if (pathname.startsWith("/rooms/") && path === "/") {
      window.location.href = "/";
    } else {
      window.location.href = path;
    }
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBgColor("rgba(255, 255, 255, 0.95)");
        setTextColor("#000000");
        setIsScrolled(true);
      } else {
        setBgColor("transparent");
        setTextColor("#ffffff");
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 py-4 flex justify-between items-center h-16">
        <div onClick={() => handleNavigation("/")}>
          <h1
            style={{ color: textColor }}
            className="text-xl font-extralight cursor-pointer font-heading"
          >
            Escape Games Olomouc
          </h1>
        </div>
        {/* Desktop menu */}
        <ul style={{ color: textColor }} className="hidden md:flex space-x-6">
          {["about", "rooms", "reservation", "contact"].map((section) => (
            <li key={section} className="capitalize">
              <div onClick={() => handleNavigation(`/#${section}`)}>
                <span className="hover:text-gray-400 transition-colors font-extralight cursor-pointer">
                  {section === "reservation"
                    ? "Rezervovat"
                    : section === "about"
                    ? "O nás"
                    : section === "rooms"
                    ? "Místnosti"
                    : "Kontakt"}
                </span>
              </div>
            </li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <div onClick={handleNav} className="md:hidden z-50 cursor-pointer">
          {navOpen ? (
            <AiOutlineClose size={24} color={textColor} />
          ) : (
            <AiOutlineMenu size={24} color={textColor} />
          )}
        </div>
        {/* Mobile menu overlay */}
        <div
          className={
            navOpen
              ? "md:hidden absolute top-0 left-0 w-full h-screen bg-black/90 flex flex-col justify-center items-center transition-transform duration-300"
              : "md:hidden absolute top-0 left-[-100%] w-full h-screen bg-black/90 flex flex-col justify-center items-center transition-transform duration-300"
          }
        >
          <ul className="space-y-8 text-center">
            {["O nás", "Místnosti", "Rezervovat", "Kontakt"].map((label) => (
              <li
                key={label}
                onClick={() => {
                  handleNav();
                  handleNavigation(
                    label === "Rezervovat"
                      ? "/#reservation"
                      : label === "O nás"
                      ? "/#about"
                      : label === "Místnosti"
                      ? "/#rooms"
                      : "/#contact"
                  );
                }}
                className="text-2xl text-white hover:text-gray-400 transition-colors font-extralight cursor-pointer"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
