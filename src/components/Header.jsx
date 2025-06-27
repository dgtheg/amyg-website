"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lang, setLang] = useState("en");

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

  return (
    <header
      role="banner"
      className={`bg-black sticky top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontSize: "1.2rem",
      }}
    >
      <div className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        {/* Left Menu */}
        <nav
          className="flex space-x-12 text-gray-300"
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

        {/* Centered logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="/" className="block" aria-label="Homepage">
            <Image
              src="/imaaage.png"
              alt="Amyg Systems Logo"
              width={180}
              height={60}
              className="cursor-pointer"
            />
          </a>
        </div>

        {/* Right: Language Toggle */}
        <div className="w-[150px] flex justify-end">
          <button
            onClick={toggleLang}
            className="text-gray-300 hover:text-blue-500 transition flex items-center gap-2"
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
    </header>
  );
};

export default Header;