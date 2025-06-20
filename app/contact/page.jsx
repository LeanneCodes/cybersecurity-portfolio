"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import emailjs from "emailjs-com";
import ProfileLinks from '@/components/ProfileLinks/ProfileLinks';
import { usePathname } from "next/navigation";
import { leftAnimate, rightAnimate } from '@/utils/gsapAnimations';

const Page = () => {
    const pathname = usePathname();

    useEffect(() => {
        leftAnimate("left-section");
        rightAnimate("right-section");
    }, []);

    useEffect(() => {
        const body = document.querySelector("body");

        if (pathname === "/contact") {
        body.classList.remove("bg-faint-triangles");
        body.classList.add("bg-blurred-triangles");
        } else if (pathname === "/projects") {
        body.classList.remove("bg-faint-triangles");
        body.classList.remove("bg-blurred-triangles");
        } else {
        body.classList.add("bg-faint-triangles");
        }

        return () => {
        body.classList.add("bg-faint-triangles");
        body.classList.remove("bg-blurred-triangles");
        };
    }, [pathname]);

    // Initialize form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(""); // Success or error message

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        // Basic validation
        if (!name || !email || !subject || !message) {
        setStatus("All fields are required!");
        return;
        }

        try {
        // Send email using EmailJS
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );

        // On success
        setStatus("Message sent successfully!");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        } catch (error) {
        console.error("EmailJS error:", error);
        setStatus("Failed to send the message. Please try again.");
        }
    };

    // Use effect to automatically hide status after 3 seconds
    useEffect(() => {
        if (status) {
        const timer = setTimeout(() => {
            setStatus(""); // Clear status after 3 seconds
        }, 3000); // 3 seconds timeout

        // Clean-up timeout when status changes or component unmounts
        return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <div className='xxs:flex xxs:flex-col xxs:px-0 w-full mx-auto xl:mt-[100px] xl:h-[75%] xl:flex-row xl:justify-center xl:items-center xl:px-32 xl:py-0 4xl:px-52 pb-[86px]'>
            <div className='left-section xxs:w-4/5 xxs:mx-auto xxs:mb-20 w-1/2'>
                <div>
                    <h1 className='xxs:text-[24px] xxs:text-center md:text-[32px] lg:text-[44px] xl:text-left font-bold'>Contact me!</h1>
                    <h2 className='xxs:text-[36px] xxs:text-center xxs:mt-[-10px] md:text-[52px] md:mt-[-18px] lg:text-[66px] lg:mt-[-28px] xl:text-left mt-[-25px] mb-10 font-bold'>Let's work...</h2>

                    <p className='xxs:w-full xxs:text-sm xxs:text-center md:text-[16px] xl:text-left xl:w-4/5 w-3/4 mb-10'>From pixel-perfect interfaces to problem-solving tools, I bring thoughtful code and positive energy to every project.</p>

                    <div className='xxs:mb-10 xxs:flex xxs:justify-center xl:justify-start'>
                        <ProfileLinks />
                    </div>

                    <h3 className='xxs:text-center xxs:text-sm md:text-[16px] xl:text-left'><strong>Email:</strong> leannemgoldsmith@gmail.com</h3><br/>
                    <h3 className='xxs:text-center xxs:text-sm md:text-[16px] xl:text-left xl:mt-[-25px]'><strong>Mobile:</strong> 07496355196</h3>
                </div>
            </div>

            {/* Right Section with Form */}
            <div className="right-section xxs:w-4/5 xxs:px-0 xxs:mx-auto w-1/2 px-16">
                <form className="xxs:text-sm md:text-[16px] space-y-10" onSubmit={handleSubmit}>
                <div>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full border-0 border-b-[1px] bg-transparent border-black text-black placeholder-black"
                    placeholder="Your full name"
                    />
                </div>

                <div>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full border-0 border-b-[1px] bg-transparent border-black text-black placeholder-black"
                    placeholder="Email"
                    />
                </div>

                <div>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="block w-full border-0 border-b-[1px] bg-transparent border-black text-black placeholder-black"
                    placeholder="Subject"
                    />
                </div>

                <div>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="block w-full border-0 border-b-[1px] bg-transparent border-black text-black placeholder-black"
                    placeholder="Write your message"
                    ></textarea>
                </div>

                <div className="xxs:flex xxs:flex-col xxs:space-y-10 xxs:justify-between xxs:items-center xxs:pb-16 xs:space-y-10 xl:flex-row xl:space-y-0 flex justify-between">
                    <button
                    type="submit"
                    className="md:text-[16px] lg:w-[130px] group flex items-center justify-between w-[120px] h-[55px] btn border-2 border-black rounded-lg p-4 cursor-pointer hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                    Send
                    <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
                    </button>

                    <Image
                        alt='Portfolio logo'
                        src={"/portfolio-logo.png"}
                        width={200}
                        height={100}
                        priority
                    />
                </div>

                {/* Status Message */}
                {status && <div className="text-center mt-4 text-gray-500">{status}</div>}
                </form>
            </div>

        </div>
    );
};

export default Page;
