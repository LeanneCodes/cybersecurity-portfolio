import OutlineButton from '@/components/Buttons/OutlineButton'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Labels from '@/components/Labels/Labels';

const page = () => {
  return (
    <div className='flex pt-10 pr-48 pb-[86px]'>
        <div className='flex items-start flex-col w-1/2'>
            <Image
                alt="Triangles with an image of Leanne"
                src={"/about-photo.png"}
                width={500}
                height={500}
                id="about_triangles"
                className="relative left-0 top-0"
            />
        </div>
        <div className='flex flex-col justify-around items-start w-1/2'>
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

            <div className='mb-10'>
                <p>
                I’m a Junior Frontend Developer with 3 years of experience. Over the years, I’ve worked on a range of projects, including building display ad banners for various clients. This has honed my ability to create engaging, responsive designs while adhering to client specifications.<br/><br/>

                I also interned at a startup in Luxembourg, where I developed applications that involved working with APIs and Postman. This experience helped me sharpen my problem-solving skills and deepened my understanding of how frontend interfaces interact with backend systems.<br/><br/>

                I’ve successfully completed two bootcamps—one focused on <a className='font-bold underline' title='View Certificate' href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb#acc.dpTPKM1l' target='_blank'>full-stack development</a> and the other on <a className='font-bold underline' title='View Certificate' href='https://skillsbootcamp.credential.getsmarter.com/bc3bb14e-0986-4109-a16a-e1f9c5af4378#acc.WHKb8k6Z' target='_blank'>frontend technologies</a>. These certifications have strengthened my knowledge of HTML, CSS, JavaScript, and React, and I’m eager to keep learning and applying new skills in my work.
                </p>
            </div>

            <Link href="/projects">
                <OutlineButton className="mb-10 text-[20px] bg-white h-[60px] w-[230px] flex justify-around items-center relative z-10 group">
                    View Portfolio
                    <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
                </OutlineButton>
            </Link>
            
        </div>
    </div>
  )
}

export default page
