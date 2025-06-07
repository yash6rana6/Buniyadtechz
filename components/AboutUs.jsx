"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaMagic } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] text-white py-24 px-6 overflow-hidden">

      {/* Hero Heading */}
      <div className="text-center max-w-3xl mx-auto z-10 relative mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
        >
          Who We Are
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg"
        >
          We're a digital-first agency building unique experiences that move people & brands forward.
        </motion.p>
      </div>

      {/* Mission / Vision / Why Us */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative">
        {[
          {
            icon: <FaBullseye className="text-4xl text-pink-500" />,
            title: "Our Mission",
            desc: "To empower brands with world-class design & impactful tech that drives measurable growth.",
          },
          {
            icon: <FaRocket className="text-4xl text-purple-500" />,
            title: "Our Vision",
            desc: "To lead the future of digital innovation — where ideas turn into experiences that inspire.",
          },
          {
            icon: <FaMagic className="text-4xl text-yellow-400" />,
            title: "Why Us?",
            desc: "We're not your average devs. We mix logic with magic — blending creativity, code & strategy like pros.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-24 z-10 relative"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Wanna build something epic?</h2>
        <p className="text-gray-400 mb-6">Let’s connect & bring your vision to life.</p>
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition">
          Contact Us
        </button>
      </motion.div>

      {/* Floating Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse z-0" />
    </section>
  );
};

export default AboutUs;
