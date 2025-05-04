"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">Logo</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`hover:text-gray-300 transition-colors ${
                isScrolled ? "hover:text-gray-600" : "hover:text-gray-300"
              }`}
            >
              Domů
            </Link>
            <Link
              href="#about"
              className={`hover:text-gray-300 transition-colors ${
                isScrolled ? "hover:text-gray-600" : "hover:text-gray-300"
              }`}
            >
              O nás
            </Link>
            <Link
              href="#services"
              className={`hover:text-gray-300 transition-colors ${
                isScrolled ? "hover:text-gray-600" : "hover:text-gray-300"
              }`}
            >
              Služby
            </Link>
            <Link
              href="#contact"
              className={`hover:text-gray-300 transition-colors ${
                isScrolled ? "hover:text-gray-600" : "hover:text-gray-300"
              }`}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
