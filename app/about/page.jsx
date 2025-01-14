import OutlineButton from '@/components/Buttons/OutlineButton'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div className='flex'>
        <div>
            <Image
                alt="Triangles"
                src={"/main-triangles.png"}
                width={500}
                height={1170}
                id="main_triangles"
                className=""
            />
        </div>
        <div className='flex flex-col justify-center items-start'>
            <div>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={780}
                    height={64}
                    className=""
                />
            </div>

            <div>Skills</div>

            <div>Content</div>

            <OutlineButton className=" bg-white w-[200px] flex justify-around items-center relative z-10 group">
            View Portfolio
            <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
            </OutlineButton>

            <div>
                <ul className="flex flex-row gap-4">
                <Link href="/" aria-label="GitHub">
                    <li className="text-4xl hover:text-gray-400 transition-colors">
                    <FaGithub />
                    </li>
                </Link>
                <Link href="/" aria-label="LinkedIn">
                    <li className="text-4xl hover:text-gray-400 transition-colors">
                    <FaLinkedin />
                    </li>
                </Link>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default page
