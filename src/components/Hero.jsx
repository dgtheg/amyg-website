"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasLoaded(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const el = heroRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative h-screen w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-center px-4 overflow-hidden transition-all duration-1000 ease-out ${
        hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{
        backgroundImage: 'url("/amygback.png")',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
      aria-label="Hero Section"
    >
      {/* ✅ Preload background image */}
      <div className="hidden">
        <Image
          src="/amygback.png"
          alt=""
          width={1920}
          height={1080}
          priority
          loading="eager"
        />
      </div>

      {/* ✅ Preload logo */}
      <div className="hidden">
        <Image
          src="/imaaage.png"
          alt="Amyg Systems Logo"
          width={180}
          height={60}
          priority
          loading="eager"
        />
      </div>

      {/* 🔍 Hidden SEO keywords */}
      <div className="sr-only">
        Amyralis Giannis, Amyralis Technik, Amyralis Technick, Amyg
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Main content */}
      <div className="relative z-10 p-6 rounded-xl flex flex-col items-center transition-opacity duration-1000">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Engineering the <span className="text-blue-500">Future</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Amyg Systems delivers cutting-edge industrial and electrical solutions
          with <strong>precision</strong>, <strong>reliability</strong>, and{" "}
          <strong>innovation</strong>.
        </p>
      </div>

      {/* Discover Us button */}
      <div
        className={`absolute bottom-28 flex flex-col items-center transition-opacity duration-500 ${
          isHeroVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <p className="mb-2 text-xl font-semibold text-white">Discover Us</p>
        <svg
          className="animate-bounce w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 16.5l-7.5-7.5h15z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;