"use client";

import { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);
  const titleWords = ["Precision.", "Performance.", "Reliability."];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartAnimation(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const interval = setInterval(() => {
      setVisibleWords((prev) =>
        prev < titleWords.length ? prev + 1 : prev
      );
    }, 500);

    return () => clearInterval(interval);
  }, [startAnimation]);

  const stylizeAMYG = (text) =>
    text.split(/(AMYG)/gi).map((part, i) =>
      part.toLowerCase() === "amyg" ? (
        <span key={i}>
          <span className="text-blue-500">A</span>MY<span className="text-blue-500">G</span>
        </span>
      ) : (
        part
      )
    );

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Amyg Systems"
      className="relative py-28 px-6 border-t border-b border-neutral-800 text-white"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{
          backgroundImage: 'url("/amygback.png")',
          zIndex: -1,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 bg-black/60 backdrop-blur-sm p-8 rounded-xl">
        {/* Animated Title */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in"
          aria-label="Precision, Performance, Reliability"
        >
          {titleWords.slice(0, visibleWords).join(" ")}
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left */}
          <div className="flex-1 space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              {stylizeAMYG(
                "For over 30 years, the team at AMYG Technik has been designing, engineering, and delivering highly customized industrial machinery — including advanced automation systems, control units, and industrial software — tailored to the most demanding technological applications."
              )}
            </p>
            <p>
              From wire and rebar processing to the automotive sector and spacecraft wiring technologies, our engineers have developed solutions across a wide range of complexity and scale.
            </p>
            <p>
              We don’t settle for “good enough” or merely functional. Our commitment is to precision engineering and operational excellence — machines built to perform flawlessly under intense, continuous use.
            </p>
            <p>
              By combining deep cross-disciplinary technical expertise with three decades of hands-on experience, we deliver systems that are still running after 25+ years of uninterrupted production.
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Our Expertise</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Machinery for wire, steel strip, and rebar processing (straightening, bending, cutting, chamfering)</li>
                <li>Machinery for Aluminum profile CNC-processing & frame assembly (doors, windows)</li>
                <li>Machinery for Production & quality control equipment for the automotive industry</li>
                <li>Laboratory devices for cosmetic testing & product QC</li>
                <li>Robotics-based industrial applications</li>
                <li>3D mockups for spacecraft wiring</li>
                <li>Industrial software & human-machine interfaces (HMI)</li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1">
            <img
              src="/factory.jpg"
              alt="AMYG industrial machinery"
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-[400px]"
            />
          </div>
        </div>

        {/* Closing Line */}
        <p className="text-xl font-medium text-white pt-10 text-center">
          {stylizeAMYG("AMYG Technik. Built to perform.")}
        </p>
      </div>

      {/* Custom fade-in keyframes */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;