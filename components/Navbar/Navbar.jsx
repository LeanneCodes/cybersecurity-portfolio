"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className='fixed w-full h-[149px] bg-transparent'>
        <div className='flex flex-row justify-between items-center h-full w-full px-[60px] 2xl:px-16'>
          {/* Logo */}
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt='Logo'
              width={248}
              height={64}
              priority
            />
          </Link>

          {/* Nav Links Desktop */}
          <div className='hidden sm:flex'>
            <ul className='hidden sm:flex flex-row items-center gap-8'>
              <Link href="/about">
                <li className='text-[16px]'>About Me</li>
              </Link>
              <Link href="/projects">
                <li className='text-[16px]'>Projects</li>
              </Link>
              <Link href="/cv">
                <li className='btn border-2 border-black rounded-lg p-4 text-[16px] w-[84px]'>My CV</li>
              </Link>
              <Link href="/contact">
                <li className='btn border-2 border-black rounded-lg bg-black text-white p-4 text-[16px] w-[97px]'>Contact</li>
              </Link>
            </ul>
          </div>

          {/* Burger Menu */}
          <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
            <AiOutlineMenu size={25} />
          </div>

        </div>


        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ccf0f3] p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 h-screen p-10 ease-out duration-500"
        }>

        </div>
    </nav>
  )
}

export default Navbar
