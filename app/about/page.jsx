import OutlineButton from '@/components/Buttons/OutlineButton'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div className='flex pe-32 pb-[100px]'>
        <div className='flex items-start flex-col w-1/3'>
            <Image
                alt="Triangles with an image of Leanne"
                src={"/about-photo.png"}
                width={1000}
                height={2000}
                id="about_triangles"
                className="relative left-0 top-4"
            />
        </div>
        <div className='flex flex-col justify-around items-start w-2/3'>
            <div>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={500}
                    height={64}
                    className=""
                />
            </div>

            <div>Skills</div>

            <div>
                <p>
                Hi, I'm Leanne Goldsmith, a frontend developer with a passion for transforming creative concepts and ideas into reality. I specialise in taking design visions from Adobe XD, Figma, and Photoshop and turning them into live, interactive web experiences using HTML, CSS, JavaScript, and React.Currently, I'm interning as a frontend developer at a startup, where I collaborate closely with my team to bring their ideas to life. My role involves understanding the team's vision and building functional and visually appealing web applications that meet their needs and their target audience. This hands-on experience has allowed me to enhance my problem-solving skills and deliver high-quality results.Over the past 3 years, I've completed two intensive bootcamps: Fullstack Development and Frontend Development.I'm excited to bring my skills and enthusiasm to a dynamic team, contributing to innovative projects and continuing to grow as a developer. Let's create something amazing together!
                </p>
            </div>

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
