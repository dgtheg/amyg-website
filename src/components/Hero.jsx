"use client";

import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const fullText = "Engineering the Future";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

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
      <div className="bg-black/60 p-6 rounded-xl backdrop-blur-md flex flex-col items-center transition-opacity duration-1000 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Amyg Systems delivers cutting-edge industrial and electrical solutions
          with precision, reliability, and innovation.
        </p>
      </div>

      <div
        className={`mt-10 flex flex-col items-center transition-opacity duration-500 ${
          isHeroVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <p className="mb-2 text-xl font-semibold text-white">Discover Us</p>
        <svg
          className="animate-bounce w-8 h-8 text-red-600"
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