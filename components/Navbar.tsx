"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinkClassName =
    "text-[16px] font-[400] text-gray-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold";

  return (
    <nav
      className={`fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent items-center mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 py-5 ${
        isMenuOpen ? "backdrop-blur-md bg-white/30" : ""
      }`}
    >
      {/* Left: Logo */}
      <Link href="/">
        <Image src="/images/app-logo.png" alt="logo" width={74} height={29} />
      </Link>

      {/* Center: Navigation Links (Hidden on small screens) */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className={navLinkClassName}>
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Right: Contact Button (Hidden on small screens) */}
      <div className="lg:flex items-center justify-center hidden">
        <Link
          href="/contact"
          className="px-4 py-2 bg-slate-50 text-black font-medium rounded-lg hover:bg-white"
        >
          Contact Us
        </Link>
      </div>

      {/* Hamburger Menu (Visible on tablet and smaller screens) */}
      <button
        className="inline-block cursor-pointer lg:hidden backdrop-blur-md bg-white/30 rounded-lg p-2"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span>&#9776;</span>
      </button>

      {/* Mobile Menu with backdrop blur */}
      {isMenuOpen && (
        <ul className="absolute top-[80px] left-0 w-full backdrop-blur-md bg-white/30 text-white flex flex-col items-center gap-4 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className={navLinkClassName}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 bg-slate-50 text-black font-medium rounded-lg hover:bg-white"
          >
            Contact Us
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
