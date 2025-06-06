import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-neutral-900">
     
      <div className="flex items-center gap-3 w-1/3">
        <Image src="/Logo.png" width={40} height={40} alt="Logo" />
        <span className="text-[#FFD700] text-xl font-semibold hover:drop-shadow-[0_0_10px_#FFD700] transition duration-300">
          Buniyad Techz
        </span>
      </div>

      <ul className="flex gap-6 text-white justify-center w-1/3">
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
            href="/about"
            className="hover:drop-shadow-[0_0_8px_#FFD700] transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:drop-shadow-[0_0_8px_#FFD700] transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="w-1/3" />
    </nav>
  );
};

export default Navbar;
