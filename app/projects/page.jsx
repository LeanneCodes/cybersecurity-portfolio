"use client";

import React, { useState } from 'react';
import useBackgroundEffect from "@/hooks/useBackgroundEffect";
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Labels from '@/components/Labels/Labels';
import Link from 'next/link';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import OutlineButton from '@/components/Buttons/OutlineButton';

const page = () => {
  useBackgroundEffect();

  // Project data with unique images
  const projects = [
    {
      title: "Project One",
      image: "/project1.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "App", "React"]
    },
    {
      title: "Project Two",
      image: "/project2.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "App", "Gaming"]
    },
    {
      title: "Project Three",
      image: "/project3.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "React", "Gaming"]
    },
    {
      title: "Project Four",
      image: "/project4.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["API", "JavaScript", "Gaming"]
    },
    {
      title: "Project Five",
      image: "/project5.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "React", "Gaming"]
    },
    {
      title: "Project Six",
      image: "/project4.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["API", "JavaScript", "Gaming"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
      if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
      }
  };   

  return (
    <div className='flex flex-col top-[149px] w-full'>
      {/* Carousel */}
      <div className='bg-blurred-mantel bg-cover object-cover bg-no-repeat bg-bottom bg-fixed flex flex-col justify-center items-center w-full h-[450px] relative'>
        <div className='w-full h-full flex justify-around items-center'>
          <div>
            <OutlineButton onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`border-darkGrey text-darkGrey text-4xl py-1 hover:bg-darkGrey hover:text-white ${
                currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
            }`}>
              <HiOutlineArrowLongLeft /> 
            </OutlineButton>
          </div>

          {/* Main content */}
          <Link href={`/projects/${currentIndex + 1}`} className='cursor-pointer w-3/4 flex justify-center'>
            <div className='w-[65%] gap-8 flex'>
              <div>
                <Image
                  alt={projects[currentIndex].title}
                  src={projects[currentIndex].image}
                  width={600}
                  height={600}
                />
              </div>
              <div className='flex flex-col justify-around'>
                <h1 className='font-bold text-6xl'>{projects[currentIndex].title}</h1>
                <p>{projects[currentIndex].desc}</p>
                <div className="flex gap-2 mt-4">
                  {projects[currentIndex].labels.map((label, labelIndex) => (
                    <Labels key={labelIndex}>{label}</Labels>
                  ))}
              </div>
              </div>
            </div>
          </Link>

          <div>
            <OutlineButton onClick={handleNext}
            disabled={currentIndex === projects.length - 1}
            className={`border-darkGrey text-darkGrey text-4xl py-1 hover:bg-darkGrey hover:text-white ${
                currentIndex === projects.length - 1
                    ? "opacity-50 pointer-events-none"
                    : ""
            }`}>
              <HiOutlineArrowLongRight /> 
            </OutlineButton>
          </div>
        </div>

        {/* Active bar indicator */}
        <div className="h-[50px] flex justify-center items-center space-x-2">
          {projects.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-6 rounded-full ${
                currentIndex === index
                  ? "bg-white w-14"
                  : "bg-white opacity-50 hover:bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Portfolio Image */}
      <div className='h-[200px] flex justify-center items-center relative'>
        <Image
          alt='Portfolio Logo'
          src={"/portfolio-logo.png"}
          width={200}
          height={200}
        />
      </div>

      {/* Project Cards */}
      <div className="relative max-h-fit w-full px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-8 px-10 w-full justify-evenly items-center">
          {projects.length === 0 ? (
            <div>No projects found</div>
          ) : (
            projects.map((project, index) => (
              <Link href={`/projects/${index + 1}`} className='cursor-pointer' key={index}>
                <ProjectCard image={project.image} title={project.title} desc={project.desc}>
                  {project.labels.map((label, labelIndex) => (
                    <Labels key={labelIndex}>{label}</Labels>
                  ))}
                </ProjectCard>
              </Link>
            ))
          )}
        </div>
      </div>

    </div>
  )
}

export default page;
