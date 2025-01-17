import OutlineButton from '@/components/Buttons/OutlineButton'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Labels from '@/components/Labels/Labels';

const page = () => {
  return (
    <div className='flex pt-10 pr-24 pb-[86px]'>
        <div className='flex items-start flex-col w-1/4'>
            <Image
                alt="Triangles with an image of Leanne"
                src={"/about-photo.png"}
                width={1000}
                height={2000}
                id="about_triangles"
                className="relative left-0 top-4"
            />
        </div>
        <div className='flex flex-col justify-around items-start w-3/4'>
            <div className='mb-10'>
                <Image
                    src={"/logo.png"}
                    alt="Logo"
                    width={500}
                    height={64}
                    className=""
                />
            </div>

            <div className='flex flex-col w-full mb-10'>
                <h1 className='mb-2 text-xl font-bold'>Skills:</h1>
                <div className='flex gap-2 flex-wrap'>
                    <Labels className="bg-lightGrey">Mobile</Labels>
                    <Labels className="bg-sage">App</Labels>
                    <Labels className="bg-moss text-white">React</Labels>
                    <Labels className="bg-cream">Gaming</Labels>
                    <Labels className="bg-darkGrey text-white">JavaScript</Labels>
                    <Labels className="bg-grey text-white">Tailwind</Labels>
                    <Labels className="bg-tan">API</Labels>
                    <Labels className="bg-lightGrey">Postman</Labels>
                    <Labels className="bg-sage">Mobile</Labels>
                </div>
            </div>

            <div className='mb-10 pr-72'>
                <p>
                Hi, I'm Leanne Goldsmith, a frontend developer with a passion for transforming creative concepts and ideas into reality. I specialise in taking design visions from Adobe XD, Figma, and Photoshop and turning them into live, interactive web experiences using HTML, CSS, JavaScript, and React.<br/><br/>
                Currently, I'm interning as a frontend developer at a startup, where I collaborate closely with my team to bring their ideas to life. My role involves understanding the team's vision and building functional and visually appealing web applications that meet their needs and their target audience. This hands-on experience has allowed me to enhance my problem-solving skills and deliver high-quality results.
                </p>
            </div>

            <Link href="/projects">
                <OutlineButton className="mb-10 text-[20px] bg-white h-[60px] w-[230px] flex justify-around items-center relative z-10 group">
                    View Portfolio
                    <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
                </OutlineButton>
            </Link>

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
