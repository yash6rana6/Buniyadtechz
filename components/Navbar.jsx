"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

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

    if (menuOpen && mounted) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen, mounted]);

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

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100]
        bg-neutral-900/60 backdrop-blur-md text-white 
        px-4 md:px-10 py-3 rounded-full shadow-md md:shadow-lg border border-white/10 
        w-[95%] md:w-[90%] max-w-6xl"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative overflow-hidden rounded-full">
              <Image 
                src="/Logo.png" 
                width={32} 
                height={32} 
                alt="Buniyad Techz Logo"
                className="md:w-10 md:h-10"
                priority
              />
            </div>
            <span className="text-[#FFD700] text-lg md:text-xl font-semibold">
              Buniyad Techz
            </span>
          </Link>
          <ul className="hidden md:flex gap-6 lg:gap-8 text-sm md:text-base font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-yellow-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-yellow-400 p-2 rounded-full"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100]
        bg-neutral-900/60 backdrop-blur-md text-white 
        px-4 md:px-10 py-3 rounded-full shadow-md md:shadow-lg border border-white/10 
        w-[95%] md:w-[90%] max-w-6xl transition-all duration-300 hover:bg-neutral-900/70"
      >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full">
            <Image 
              src="/Logo.png" 
              width={32} 
              height={32} 
              alt="Buniyad Techz Logo"
              className="md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </div>
          <span className="text-[#FFD700] text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-yellow-300">
            Buniyad Techz
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm md:text-base font-medium">
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
        className={`md:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-yellow-400 ${
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
      
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;