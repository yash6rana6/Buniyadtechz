"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && setMenuOpen(false);
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest("nav")) setMenuOpen(false);
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

  // ✅ Updated links with homepage anchors
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Projects" },
    { href: "/blogs", label: "Blog" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  // ✅ Improved navigation logic
  const handleNavClick = (href) => {
    setActiveSection(href);
    setMenuOpen(false);

    // If it's a homepage anchor and user is already on "/", scroll smoothly
    if (href.startsWith("/#")) {
      const sectionId = href.split("#")[1];
      if (pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
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
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative transition-colors duration-300 hover:text-yellow-400 ${
                    activeSection === item.href ? "text-yellow-400" : ""
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400 p-2 rounded-full transition-colors duration-300 hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-yellow-400 ${
                    activeSection === item.href ? "text-yellow-400 bg-white/5" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay */}
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
