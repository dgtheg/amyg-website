"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";

const AllProjects = () => {
  const allProjects = [
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
    {
      title: "Wire bending & Cutting machine",
      desc: "",
      image: "/project4.jpg",
    },
    {
      title: "QC & Marking machine for absorbers' top-mounts",
      desc: "",
      image: "/project5.jpg",
    },
    {
      title: "Vertical lathe fo gear-boxes seals/rings NBR",
      desc: "",
      image: "/project6.jpg",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredProjects = allProjects.filter((proj) =>
    proj.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      role="main"
      className="relative bg-black min-h-screen text-white overflow-hidden"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-20 z-0"
        style={{ backgroundImage: "url('/amygback.png')" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <section
          aria-label="All Projects Section"
          className="py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            {/* Back Arrow */}
            <div className="mb-8">
              <button
                onClick={scrollToProjects}
                className="text-3xl text-blue-400 hover:text-blue-500 transition transform hover:-translate-x-1"
                aria-label="Back to Projects"
              >
                ←
              </button>
            </div>

            <h1 className="text-4xl font-bold text-center mb-6">
              All Projects
            </h1>

            {/* Search Bar */}
            <div className="flex justify-center mb-10">
              <input
                type="text"
                placeholder="Search projects..."
                aria-label="Search projects"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-2xl px-6 py-3 rounded-full bg-neutral-800 border border-neutral-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((proj, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 border border-neutral-700 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 duration-500 flex flex-col"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">
                      {proj.desc}
                    </p>
                    <button
                      className="mt-auto px-2 py-1.5 w-1/2 bg-blue-600 hover:bg-blue-700 text-sm text-white rounded-full transition"
                      onClick={() =>
                        alert(`More info coming soon about: ${proj.title}`)
                      }
                      aria-label={`Learn more about ${proj.title}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <p className="text-center col-span-full text-gray-500">
                  No projects found.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AllProjects;