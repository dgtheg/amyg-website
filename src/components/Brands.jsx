"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Engineering = () => {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const router = useRouter();

  const machines = [
    {
      title: "Hydraulic Press System",
      image: "/machine1.jpg",
    },
    {
      title: "CNC Milling Unit",
      image: "/machine2.jpg",
    },
    {
      title: "Laser Cutting Platform",
      image: "/machine3.jpg",
    },
    // Add more machines if needed
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    const items = sectionRef.current?.querySelectorAll(".machine-card");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      id="gallery"
      aria-label="Engineering Section"
      ref={sectionRef}
      className="py-16 px-4 text-center bg-black border-t border-neutral-700"
    >
      <h2 className="text-3xl font-bold text-white mb-10">Engineering Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {machines.map((machine, i) => (
          <div
            key={i}
            data-index={i}
            className={`machine-card border border-neutral-700 rounded-lg p-4 shadow transition bg-neutral-900 transform duration-700 ${
              visibleItems[i]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={machine.image}
              alt={machine.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-white">{machine.title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <button
          onClick={() => router.push("/engineering-gallery")}
          className="bg-neutral-800 hover:bg-neutral-700 transition px-6 py-3 rounded-md font-semibold text-white"
        >
          See Full Gallery
        </button>
      </div>
    </section>
  );
};

export default Engineering;