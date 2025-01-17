"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Page = () => {
    const pathname = usePathname();

    useEffect(() => {
        const body = document.querySelector('body');

        // Ensure the class is updated immediately when the path changes
        if (pathname === "/contact") {
            body.classList.remove('bg-faint-triangles');
            body.classList.add('bg-blurred-triangles');
        } else {
            body.classList.add('bg-faint-triangles');
        }

        // Clean-up function to avoid side effects
        return () => {
            body.classList.add('bg-faint-triangles');
            body.classList.remove('bg-blurred-triangles');
        };
    }, [pathname]);

    return (
        <div className='flex px-60 pt-36'>
            <div className='w-1/2'>
                <div>
                    <h1 className='text-[36px] font-bold'>Contact me!</h1>
                    <h2 className='text-[62px] mt-[-25px] mb-10 font-bold'>Let's work...</h2>

                    <p className='w-3/4 mb-10'>I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community and ecommerce for small businesses</p>

                    <div>
                        <ul className="flex flex-row gap-4">
                        <Link href="/" aria-label="GitHub">
                            <li className="text-2xl hover:text-gray-400 transition-colors">
                            <FaGithub />
                            </li>
                        </Link>
                        <Link href="/" aria-label="LinkedIn">
                            <li className="text-2xl mb-10 hover:text-gray-400 transition-colors">
                            <FaLinkedin />
                            </li>
                        </Link>
                        </ul>
                    </div>

                    <h3><strong>Email:</strong> leannemgoldsmith@gmail.com</h3>
                    <h3><strong>Mobile:</strong> 07496355196</h3>
                </div>
            </div>

            <div className="w-1/2 px-16">
                <form className="space-y-10">
                    <div className=''>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full border-0 border-b-[1px] bg-transparent border-black text-black placeholder-black"
                        placeholder="Your full name"
                    />
                    </div>

                    <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full border-0 border-b-[1px] bg-transparent border-black text-black placeholder-black"
                        placeholder="Email"
                    />
                    </div>

                    <div>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="block w-full border-0 border-b-[1px] bg-transparent border-black text-black placeholder-black"
                        placeholder="Subject"
                    />
                    </div>

                    <div>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="block w-full border-0 border-b-[1px] bg-transparent border-black text-black placeholder-black"
                        placeholder="Write your message"
                    ></textarea>
                    </div>

                    <div className='flex justify-between'>
                        <button
                            type="submit"
                            className="group flex items-center justify-between w-[120px] h-[55px] btn border-2 border-black rounded-lg p-4 cursor-pointer hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Send
                            <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
                        </button>

                        <Image
                            alt='Portfolio logo'
                            src={"/portfolio-logo.png"}
                            width={200}
                            height={100}
                        />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Page;
