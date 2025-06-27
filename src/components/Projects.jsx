"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Projects = () => {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const router = useRouter();

  const projects = [
    {
      title: "Fully Automatic Production line for aluminun frames",
      desc: "",
      image: "/project1n.jpg",
    },
    {
      title: "Combi machine for wire & strip straingthening, double bending & cutting",
      desc: "",
      image: "/project2n.jpg",
    },
    {
      title: "CNC Rebar 3D-Bending & Cutting machine",
      desc: "",
      image: "/project3n.jpg",
    },
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

    const items = sectionRef.current?.querySelectorAll(".project-card");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      id="projects"
      aria-label="Projects Section"
      ref={sectionRef}
      className="py-16 px-4 text-center bg-black"
    >
      <h2 className="text-3xl font-bold text-white mb-10">Our Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            data-index={i}
            className={`project-card border border-neutral-700 rounded-lg p-6 shadow transition bg-neutral-900 flex flex-col justify-between transform duration-700 ${
              visibleItems[i]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-400 flex-grow">{proj.desc}</p>
              <button
                onClick={() => alert(`More info coming soon about: ${proj.title}`)}
                className="mt-4 px-2 py-1.5 w-1/2 bg-blue-600 hover:bg-blue-700 text-sm text-white rounded-full transition self-center"
                aria-label={`Learn more about ${proj.title}`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <button
          onClick={() => router.push("/all-projects")}
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold text-white"
          aria-label="See all projects"
        >
          See All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;