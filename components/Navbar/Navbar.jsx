"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import CVModal from "../Modal/CVModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCVOpen] = useState(false); // Modal state

  const toggleCVModal = () => {
    setCVOpen(!cvOpen);
  };

  // Handle menu toggle
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav"); // or the appropriate selector for your navbar
      if (window.scrollY > 10) {
        navbar.classList.add("bg-white", "shadow-md");
      } else {
        navbar.classList.remove("bg-white", "shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <nav className="fixed top-0 left-0 w-full h-[149px] bg-transparent z-[100]">
      {/* Top Navbar */}
      <div className="flex flex-row justify-between items-center h-full w-full px-[60px] 2xl:px-16 z-[101]">
        {/* Logo */}
        <Link href="/" className="cursor-pointer md:w-1/3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={248}
            height={64}
            priority
            className="xxs:w-1/2 sm:w-3/5 md:w-4/5 lg:w-3/5 2xl:w-2/5 relative"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:w-2/3 md:justify-end">
          <ul className="md:gap-5 lg:gap-8 flex flex-row items-center">
            <li>
              <Link
                href="/about"
                className={"relative py-2 group text-black text-sm 4xl:text-[20px]"}
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
                className={"relative py-2 group text-black text-sm 4xl:text-[20px]"}
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
            
            <li>
              <button
                onClick={toggleCVModal}
                className="btn border-2 border-black rounded-lg p-4 text-sm 4xl:text-[20px] w-fit hover:bg-black hover:text-white hover:border-black"
              >
                My CV
              </button>
            </li>
            
            <Link href="/contact">
              <li className="btn border-2 border-black rounded-lg bg-black text-white p-4 text-sm 4xl:text-[20px] w-fit hover:bg-moss hover:border-moss hover:text-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer relative z-[102]"
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
        <ul className="flex flex-col justify-center items-center h-full gap-8 text-white text-[24px]">
          <Link href="/about">
            <li onClick={handleNav} className="xxs:text-[16px] hover:text-gray-300">
              About Me
            </li>
          </Link>
          <Link href="/projects">
            <li onClick={handleNav} className="xxs:text-[16px] hover:text-gray-300">
              Projects
            </li>
          </Link>
          <Link href="/cv">
            <li
              onClick={handleNav}
              className="xxs:text-[16px] btn border-2 border-white rounded-lg p-4 text-[24px] w-full text-center hover:bg-white hover:text-black"
            >
              My CV
            </li>
          </Link>
          <Link href="/contact">
            <li
              onClick={handleNav}
              className="xxs:text-[16px] btn border-2 border-black rounded-lg bg-black text-white p-4 text-[24px] w-full text-center hover:bg-gray-800"
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>

      {/* CV Modal */}
      <CVModal cvOpen={cvOpen} toggleCVModal={toggleCVModal} />
    </nav>
  );
};

export default Navbar;
