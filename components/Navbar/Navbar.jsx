"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuLogo, setShowMenuLogo] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);

    // If the menu is opening, show the logo after 2 seconds
    if (!menuOpen) {
      setTimeout(() => setShowMenuLogo(true), 2000);
    } else {
      // Hide the logo immediately when the menu closes
      setShowMenuLogo(false);
    }
  };

  return (
    <nav className="fixed w-full h-[149px] bg-transparent">
      {/* Top Navbar */}
      <div className="flex flex-row justify-between items-center h-full w-full px-[60px] 2xl:px-16 relative z-50">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={248}
            height={64}
            className="z-50"
            priority
          />
        </Link>

        {/* Nav Links Desktop */}
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex flex-row items-center gap-8">
            <Link href="/about">
              <li className="text-[16px]">About Me</li>
            </Link>
            <Link href="/projects">
              <li className="text-[16px]">Projects</li>
            </Link>
            <Link href="/cv">
              <li className="btn border-2 border-black rounded-lg p-4 text-[16px] w-[84px]">
                My CV
              </li>
            </Link>
            <Link href="/contact">
              <li className="btn border-2 border-black rounded-lg bg-black text-white p-4 text-[16px] w-[97px]">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* Burger and Close Icon */}
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer pl-24 relative z-50"
        >
          {menuOpen ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full sm:hidden h-screen bg-[#6E7B6C] bg-opacity-95 p-10 bg-mob-faint-triangles bg-cover bg-center bg-no-repeat transition-all duration-500 ${
          menuOpen ? "left-0 opacity-100" : "left-[-100%] opacity-0"
        }`}
      >
        {/* Menu Logo (delayed visibility) */}
        {showMenuLogo && (
          <div className="absolute top-0 left-[60px] h-[149px] flex items-center transition-opacity duration-500">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={248}
                height={64}
                priority
              />
            </Link>
          </div>
        )}

        {/* Nav Links */}
        <ul className="flex flex-col justify-end absolute bottom-40 right-0 gap-8 mt-8 px-8 text-white text-[20px] text-right z-50">
          <Link href="/about">
            <li onClick={handleNav} className="hover:text-gray-300">
              About Me
            </li>
          </Link>
          <Link href="/projects">
            <li onClick={handleNav} className="hover:text-gray-300">
              Projects
            </li>
          </Link>
          <Link href="/cv">
            <li
              onClick={handleNav}
              className="btn border-2 border-white rounded-lg p-4 text-[16px] text-center w-full hover:bg-white hover:text-black"
            >
              My CV
            </li>
          </Link>
          <Link href="/contact">
            <li
              onClick={handleNav}
              className="btn border-2 border-black rounded-lg bg-black text-white p-4 text-[16px] w-[97px]"
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
