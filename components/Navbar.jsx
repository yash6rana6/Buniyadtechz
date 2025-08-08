"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest("nav")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href) => {
    setActiveSection(href);
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999]
      bg-neutral-900/60 backdrop-blur-md text-white 
      px-10 py-3 rounded-full shadow-lg border border-white/10 
      w-[90%] max-w-6xl transition-all duration-300 hover:bg-neutral-900/70"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full">
            <Image 
              src="/Logo.png" 
              width={40} 
              height={40} 
              alt="Buniyad Techz Logo"
              className="transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>
          <span className="text-[#FFD700] text-xl font-semibold transition-colors duration-300 group-hover:text-yellow-300">
            Buniyad Techz
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative transition-colors duration-300 hover:text-yellow-400 ${
                  activeSection === item.href ? "text-yellow-400" : ""
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400 p-2 rounded-full transition-colors duration-300 hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 mt-4 px-2 pb-2 text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-yellow-400 ${
                  activeSection === item.href ? "text-yellow-400 bg-white/5" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;