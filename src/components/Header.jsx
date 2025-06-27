"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY || currentY < 20);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "gr" : "en"));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-md bg-black/30`}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontSize: "1.2rem",
        WebkitBackdropFilter: "blur(16px)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="relative flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-4 text-white">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex space-x-12 text-gray-300"
          aria-label="Main Navigation"
        >
          <a href="/#projects" className="hover:text-blue-500 transition">
            Projects
          </a>
          <a href="/#brands" className="hover:text-blue-500 transition">
            Brands
          </a>
          <a href="/#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="/#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </nav>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="/" className="block" aria-label="Homepage">
            <Image
              src="/imaaage.png"
              alt="Amyg Systems Logo"
              width={180}
              height={60}
              className="cursor-pointer"
              priority
            />
          </a>
        </div>

        {/* Right: Language Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-gray-300 hover:text-blue-500 transition hidden sm:flex items-center gap-2"
            aria-label="Toggle Language"
          >
            {lang === "en" ? (
              <>
                <span>🇬🇧</span>
                <span>ENG</span>
              </>
            ) : (
              <>
                <span>🇬🇷</span>
                <span>ΕΛ</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-black/80 text-white px-6 pb-4 space-y-2">
          <a href="/#projects" className="block hover:text-blue-500 transition">
            Projects
          </a>
          <a href="/#brands" className="block hover:text-blue-500 transition">
            Brands
          </a>
          <a href="/#about" className="block hover:text-blue-500 transition">
            About
          </a>
          <a href="/#contact" className="block hover:text-blue-500 transition">
            Contact
          </a>
          <button
            onClick={toggleLang}
            className="mt-2 text-gray-300 hover:text-blue-500 transition flex items-center gap-2"
          >
            {lang === "en" ? (
              <>
                <span>🇬🇧</span>
                <span>ENG</span>
              </>
            ) : (
              <>
                <span>🇬🇷</span>
                <span>ΕΛ</span>
              </>
            )}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;