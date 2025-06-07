"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // you can use any icon library

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image src="/Logo.png" width={40} height={40} alt="Logo" />
          <span className="text-[#FFD700] text-xl font-semibold hover:drop-shadow-[0_0_10px_#FFD700] transition duration-300">
            Buniyad Techz
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-white justify-center">
          <li>
            <Link
              href="/"
              className="hover:drop-shadow-[0_0_8px_#FFD700] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:drop-shadow-[0_0_8px_#FFD700] transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:drop-shadow-[0_0_8px_#FFD700] transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:drop-shadow-[0_0_8px_#FFD700] transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-start gap-4 mt-4 px-2">
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
