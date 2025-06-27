"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const machines = [
  { title: "Hydraulic Press System", image: "/machine1.jpg" },
  { title: "CNC Milling Unit", image: "/machine2.jpg" },
  { title: "Laser Cutting Platform", image: "/machine3.jpg" },
  { title: "Robotic Welding Cell", image: "/machine4.jpg" },
  { title: "5-Axis Machining Center", image: "/machine5.jpg" },
  { title: "Automated Assembly Line", image: "/machine6.jpg" },
  { title: "Industrial 3D Printer", image: "/machine7.jpg" },
  { title: "High-Voltage Test Bench", image: "/machine8.jpg" },
  { title: "Pick-and-Place Robot", image: "/machine9.jpg" },
];

export default function EngineeringGalleryPage() {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        }),
      { threshold: 0.3 }
    );

    const cards = sectionRef.current?.querySelectorAll(".machine-card");
    cards?.forEach((c) => observer.observe(c));
    return () => cards?.forEach((c) => observer.unobserve(c));
  }, []);

  return (
    <main
      role="main"
      className="relative bg-black min-h-screen text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-sm brightness-[.25]"
        style={{ backgroundImage: 'url("/amygback.png")' }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="border-t border-neutral-700" />

        <section
          ref={sectionRef}
          aria-label="Engineering Gallery"
          className="flex-grow py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
              Engineering&nbsp;Gallery
            </h1>

            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {machines.map((m, i) => (
                <div
                  key={i}
                  data-index={i}
                  className={`machine-card transform transition duration-700 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900/80 ${
                    visibleItems[i]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">{m.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button
                onClick={() => router.back()}
                className="px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 transition font-semibold"
              >
                ← Back
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}