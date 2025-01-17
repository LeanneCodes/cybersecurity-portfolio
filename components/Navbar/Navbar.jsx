"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle menu toggle
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  // Automatically close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const pathname = usePathname(); // Get the current path

  // Function to determine if the link is active or hovered
  const getNavLinkClass = (linkPath) => {
    return `relative py-2 px-4 group ${
      pathname === linkPath || "group-hover"
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[149px] bg-transparent z-[100]">
      {/* Top Navbar */}
      <div className="flex flex-row justify-between items-center h-full w-full px-[60px] 2xl:px-16 z-[101]">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.png"
            alt="Logo"
            width={248}
            height={64}
            priority
            className="xxs:w-1/2 relative"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex">
          <ul className="flex flex-row items-center gap-8">
            <li>
              <Link
                href="/about"
                className={"relative py-2 group text-black text-[16px]"}
              >
                About Me
                <span
                  className={`absolute bottom-0 left-0 w-full h-[4px] bg-transparent 
                    ${pathname === "/about" ? 
                      "bg-[url('/nav-active-rectangle.png')] bg-no-repeat bg-bottom bg-contain" : 
                      "group-hover:bg-[url('/nav-active-rectangle.png')] group-hover:bg-no-repeat group-hover:bg-bottom group-hover:bg-contain"}
                  `}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={"relative py-2 group text-black text-[16px]"}
              >
                Projects
                <span
                  className={`absolute bottom-0 left-0 w-full h-[4px] bg-transparent 
                    ${pathname === "/projects" ? 
                      "bg-[url('/nav-active-rectangle.png')] bg-no-repeat bg-bottom bg-contain" : 
                      "group-hover:bg-[url('/nav-active-rectangle.png')] group-hover:bg-no-repeat group-hover:bg-bottom group-hover:bg-contain"}
                  `}
                ></span>
              </Link>
            </li>
            <Link href="/cv">
              <li className="btn border-2 border-black rounded-lg p-4 text-[16px] w-[88px] hover:bg-black hover:text-white hover:border-black">
                My CV
              </li>
            </Link>
            <Link href="/contact">
              <li className="btn border-2 border-black rounded-lg bg-black text-white p-4 text-[16px] w-[97px] hover:bg-moss hover:border-moss hover:text-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer relative z-[102]"
        >
          {menuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#6E7B6C] bg-opacity-100 p-10 bg-mob-faint-triangles bg-cover bg-center bg-no-repeat transition-transform duration-500 z-[100] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Nav Links */}
        <ul className="flex flex-col justify-center items-center h-full gap-8 text-white text-[20px]">
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
              className="btn border-2 border-white rounded-lg p-4 text-[16px] w-full text-center hover:bg-white hover:text-black"
            >
              My CV
            </li>
          </Link>
          <Link href="/contact">
            <li
              onClick={handleNav}
              className="btn border-2 border-black rounded-lg bg-black text-white p-4 text-[16px] w-full text-center hover:bg-gray-800"
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
