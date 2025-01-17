"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import useBackgroundEffect from "@/hooks/useBackgroundEffect";
import emailjs from "emailjs-com";
import ProfileLinks from '@/components/ProfileLinks/ProfileLinks';

const Page = () => {
    useBackgroundEffect();

    // Initialize form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(""); // Success or error message

    // Effect for custom background change (optional)
    useBackgroundEffect();

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
        <div className='flex px-60 pt-36'>
            <div className='w-1/2'>
                <div>
                    <h1 className='text-[36px] font-bold'>Contact me!</h1>
                    <h2 className='text-[62px] mt-[-25px] mb-10 font-bold'>Let's work...</h2>

                    <p className='w-3/4 mb-10'>I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community and ecommerce for small businesses</p>

                    <div className='mb-10'>
                        <ProfileLinks />
                    </div>

                    <h3><strong>Email:</strong> leannemgoldsmith@gmail.com</h3>
                    <h3><strong>Mobile:</strong> 07496355196</h3>
                </div>
            </div>

            {/* Right Section with Form */}
            <div className="w-1/2 px-16">
                <form className="space-y-10" onSubmit={handleSubmit}>
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

                <div className="flex justify-between">
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

                {/* Status Message */}
                {status && <div className="text-center mt-4 text-gray-500">{status}</div>}
                </form>
            </div>

        </div>
    );
};

export default Page;
