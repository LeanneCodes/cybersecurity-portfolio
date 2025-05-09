"use client";

import OutlineButton from '@/components/Buttons/OutlineButton'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Labels from '@/components/Labels/Labels';
import { animateElements, scaleBtnAnimate } from '@/utils/gsapAnimations';

const page = () => {
    useEffect(() => {
        animateElements("skill-label");
        
        setTimeout(() => {
            scaleBtnAnimate("scale-btn");
        }, 3000);
    }, []);

    return (
        <div className='xxs:flex xxs:flex-col xxs:pr-0 top-[149px] xl:flex-row xxl:pr-40 4xl:pt-10 flex pr-48'>
            <div className='xl:justify-center flex items-start flex-col w-1/2'>
                <Image
                    alt="Triangles with an image of Leanne"
                    src={"/about-photo.png"}
                    width={500}
                    height={500}
                    id="about_triangles"
                    className="xxs:hidden xl:block xl:scale-125 xl:left-[62px] relative left-0 top-0"
                    priority
                />
            </div>
            <div className='flex justify-center mb-10'>
                <Image
                    alt="Image of Leanne"
                    src={"/leanne-img.png"}
                    width={500}
                    height={500}
                    id="leanne-img"
                    className="rounded-full xxs:w-[175px] md:w-[200px] lg:w-[250px] xxs:block xl:hidden"
                    priority
                />
            </div>
            <div className='xxs:w-4/5 xxs:mx-auto flex flex-col justify-around items-start w-1/2 xl:pr-16'>
                <div className='mb-10 md:w-full md:flex md:justify-center xl:justify-start'>
                    <Image
                        src={"/logo.png"}
                        alt="Logo"
                        width={500}
                        height={64}
                        className="xs:w-3/5 xs:mx-auto lg:w-1/3 xl:ml-0"
                        priority
                    />
                </div>

                <div className='flex flex-col w-full mb-10'>
                    <h1 className='xxs:text-center xl:text-left mb-2 text-xl font-bold'>Skills:</h1>
                    <div className='xxs:text-sm xxs:flex xxs:justify-center xl:justify-start flex gap-2 flex-wrap'>
                        <Labels className="bg-lightGrey">Mobile</Labels>
                        <Labels className="bg-sage">App</Labels>
                        <Labels className="bg-moss text-white">React</Labels>
                        <Labels className="bg-cream">HTML</Labels>
                        <Labels className="bg-darkGrey text-white">JavaScript</Labels>
                        <Labels className="bg-grey text-white">Tailwind</Labels>
                        <Labels className="bg-tan">API</Labels>
                        <Labels className="bg-lightGrey">Postman</Labels>
                        <Labels className="bg-sage">Mobile</Labels>
                        <Labels className="bg-grey text-white">SASS & CSS</Labels>
                        <Labels className="bg-tan">GSAP</Labels>
                    </div>
                </div>

                <div className='xxs:mb-10 xxs:text-sm md:text-[16px]'>
                    <p className='text-left'>
                    I'm a Frontend Developer with 3 years of experience. By day, I build display ad banners for multiple clients, which has sharpened my attention to detail and ability to work within strict design constraints. Outside of work, I focus on building passion projects centred around reading and hair care, aiming to create tools and experiences that benefit others who share these interests.<br/><br/>

                    I also gained valuable experience interning at a startup in Luxembourg, where I developed applications involving APIs and Postman. This helped sharpen my problem-solving skills and deepened my understanding of how frontend and backend systems work together.<br/><br/>

                    I’ve successfully completed two bootcamps - one focused on <a className='font-bold underline' title='View Certificate' href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb#acc.dpTPKM1l' target='_blank'>full-stack development</a> and the other on <a className='font-bold underline' title='View Certificate' href='https://skillsbootcamp.credential.getsmarter.com/bc3bb14e-0986-4109-a16a-e1f9c5af4378#acc.WHKb8k6Z' target='_blank'>frontend technologies</a>. These certifications have strengthened my knowledge of HTML, CSS, JavaScript, and React, and I’m eager to keep learning and applying new skills in my work.
                    </p>
                </div>

                <Link href="/projects" className='xxs:w-full xxs:mx-auto xxs:flex xxs:justify-center xl:justify-start'>
                    <OutlineButton className="scale-btn xxs:mx-auto xxs:text-sm xxs:h-[50px] xl:ml-0 mb-10 text-[20px] bg-white h-[60px] w-[200px] flex justify-around items-center relative z-10 group">
                        View Portfolio
                        <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
                    </OutlineButton>
                </Link>
                
            </div>
        </div>
    )
}

export default page
