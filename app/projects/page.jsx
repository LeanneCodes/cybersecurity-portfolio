"use client";

import React, { useState } from 'react';
import useBackgroundEffect from "@/hooks/useBackgroundEffect";
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Labels from '@/components/Labels/Labels';
import Link from 'next/link';

const page = () => {
  useBackgroundEffect();

  // Track selected label for filtering
  const [selectedLabel, setSelectedLabel] = useState('All');

  // Project data with unique images
  const projects = [
    {
      title: "Project One",
      image: "/no-image.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "App", "React"]
    },
    {
      title: "Project Two",
      image: "/no-image.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "App", "Gaming"]
    },
    {
      title: "Project Three",
      image: "/no-image.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "React", "Gaming"]
    },
    {
      title: "Project Four",
      image: "/no-image.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["API", "JavaScript", "Gaming"]
    },
    {
      title: "Project Five",
      image: "/no-image.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["App", "React", "Postman"]
    },
    {
      title: "Project Six",
      image: "/no-image.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "App", "Tailwind", "Gaming"]
    },
  ];

  console.log(selectedLabel);


  // Filter the projects based on the selected label
  const filteredProjects = selectedLabel === 'All' 
    ? projects 
    : projects.filter(project => project.labels.includes(selectedLabel));

  return (
    <div className='flex flex-col absolute top-[149px] w-full'>
      {/* Carousel */}
      <div className='bg-blurred-mantel bg-cover object-cover bg-no-repeat bg-bottom bg-fixed flex justify-center items-center w-full h-[560px] relative'>Mantel Carousel</div>

      {/* Portfolio Imager */}
      <div className='h-[150px] flex justify-center items-center relative'>
        <Image
          alt='Portfolio Logo'
          src={"/portfolio-logo.png"}
          width={200}
          height={200}
        />
      </div>

      {/* Filter */}
      <div className='flex flex-col h-[100px] relative justify-start items-center'>
        <h1 className='mb-3'>Filter projects by label</h1>
        <div className='flex justify-center items-center gap-4 flex-wrap relative'>
          <Labels 
            className={`cursor-pointer ${selectedLabel === 'All' ? 'bg-darkGrey text-white' : 'bg-mediumGrey'}`} 
            onClick={() => setSelectedLabel('All')}
          >
            All
          </Labels>
          <Labels 
            className={`cursor-pointer ${selectedLabel === 'Mobile' ? 'bg-darkGrey text-white' : 'bg-lightGrey'}`} 
            onClick={() => setSelectedLabel('Mobile')}
          >
            Mobile
          </Labels>
          <Labels 
            className={`cursor-pointer ${selectedLabel === 'App' ? 'bg-darkGrey text-white' : 'bg-sage'}`} 
            onClick={() => setSelectedLabel('App')}
          >
            App
          </Labels>
          <Labels 
            className={`cursor-pointer ${selectedLabel === 'React' ? 'bg-darkGrey text-white' : 'bg-moss text-white'}`} 
            onClick={() => setSelectedLabel('React')}
          >
            React
          </Labels>
          <Labels 
            className={`cursor-pointer ${selectedLabel === 'Gaming' ? 'bg-darkGrey text-white' : 'bg-cream'}`} 
            onClick={() => setSelectedLabel('Gaming')}
          >
            Gaming
          </Labels>
        </div>
      </div>

      {/* Project Cards */}
      <div className="relative max-h-fit w-full mb-44">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-8 px-10 w-full justify-evenly items-center">
          {filteredProjects.length === 0 ? (
            <div>No projects found</div>
          ) : (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} image={project.image} title={project.title} desc={project.desc}>
                {project.labels.map((label, labelIndex) => {
                  // Determine label background dynamically
                  let labelBg = '';
                  switch (label) {
                    case 'Mobile':
                      labelBg = 'bg-lightGrey';
                      break;
                    case 'App':
                      labelBg = 'bg-sage';
                      break;
                    case 'React':
                      labelBg = 'bg-moss text-white';
                      break;
                    case 'Gaming':
                      labelBg = 'bg-cream';
                      break;
                    case 'JavaScript':
                      labelBg = 'bg-darkGrey text-white';
                      break;
                    case 'Tailwind':
                      labelBg = 'bg-grey text-white';
                      break;
                    case 'API':
                      labelBg = 'bg-tan';
                      break;
                    case 'Postman':
                      labelBg = 'bg-lightGrey';
                      break;
                    default:
                      labelBg = 'bg-darkGrey text-white';
                      break;
                  }

                  return (
                    <Labels key={labelIndex} className={labelBg}>
                      {label}
                    </Labels>
                  );
                })}
              </ProjectCard>
            ))
          )}
        </div>
      </div>

    </div>
  )
}

export default page;
