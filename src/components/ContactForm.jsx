"use client";

import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.confirm(
      "✅ Thank you for reaching out!\n\nWe've received your message and usually respond within 24 hours.\n\nWe appreciate your interest in Amyg Systems!"
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-black text-white text-center"
      aria-label="Contact Section"
    >
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid grid-cols-1 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded bg-neutral-800 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded font-semibold text-white"
        >
          Send Message
        </button>
      </form>

      {/* Additional Contact Info Section */}
      <div className="mt-20 border-t border-neutral-700 pt-10 max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-4 text-gray-300 text-base leading-relaxed">
          <div>
            <strong>📍 Address:</strong>
            <br />
            1 Sachturi str. & Elpidos<br />
            17431 Agios Dimitrios<br />
            Athens – Hellas (GR)
          </div>
          <div>
            <strong>☎️ Tel/Fax:</strong> +30 211 1165497<br />
            <strong>📱 Mobile:</strong> +30 694 517 8998
          </div>
          <div>
            <strong>✉️ Email:</strong>{" "}
            <a
              href="mailto:j.amyralis@gmail.com"
              className="text-blue-400 hover:underline"
            >
              j.amyralis@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 pt-4">
            <a
              href="https://www.youtube.com/@RingoBella"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-500 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;