"use client";

import React from 'react';
import useBackgroundEffect from "@/hooks/useBackgroundEffect";
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Labels from '@/components/Labels/Labels';

const page = () => {
  useBackgroundEffect();

  return (
    <div className='flex flex-col absolute top-[149px] w-full'>
      {/* Carousel */}
      <div className='bg-lightGrey flex justify-center items-center w-full h-[560px] relative'>Mantel Carousel</div>

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
        <h1>Filter projects by label</h1>
        <div className='flex justify-center items-center gap-4 flex-wrap relative'>
          <Labels className="bg-mediumGrey">All</Labels>
          <Labels className="bg-lightGrey">Mobile</Labels>
          <Labels className="bg-sage">App</Labels>
          <Labels className="bg-moss text-white">React</Labels>
          <Labels className="bg-cream">Gaming</Labels>
          <Labels className="bg-darkGrey text-white">JavaScript</Labels>
          <Labels className="bg-grey text-white">Tailwind</Labels>
          <Labels className="bg-tan">API</Labels>
          <Labels className="bg-lightGrey">Postman</Labels>
        </div>
      </div>

      {/* Project Cards */}
      <div className="relative max-h-fit w-full mb-44">
        {/* Center the grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-8 px-10 w-full justify-evenly items-center">
          <ProjectCard
            image={"/portfolio-logo.png"}
            title={"Project One"}
            desc={
              "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community."
            }
          >
            <Labels className="bg-lightGrey">Mobile</Labels>
            <Labels className="bg-sage">App</Labels>
            <Labels className="bg-moss text-white">React</Labels>
            <Labels className="bg-cream">Gaming</Labels>
          </ProjectCard>

          <ProjectCard
            image={"/portfolio-logo.png"}
            title={"Project Two"}
            desc={
              "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community."
            }
          >
            <Labels className="bg-lightGrey">Mobile</Labels>
            <Labels className="bg-sage">App</Labels>
            <Labels className="bg-moss text-white">React</Labels>
            <Labels className="bg-cream">Gaming</Labels>
          </ProjectCard>

          <ProjectCard
            image={"/portfolio-logo.png"}
            title={"Project Three"}
            desc={
              "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community."
            }
          >
            <Labels className="bg-lightGrey">Mobile</Labels>
            <Labels className="bg-sage">App</Labels>
            <Labels className="bg-moss text-white">React</Labels>
            <Labels className="bg-cream">Gaming</Labels>
          </ProjectCard>

          <ProjectCard
            image={"/portfolio-logo.png"}
            title={"Project Four"}
            desc={
              "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community."
            }
          >
            <Labels className="bg-lightGrey">Mobile</Labels>
            <Labels className="bg-sage">App</Labels>
            <Labels className="bg-moss text-white">React</Labels>
            <Labels className="bg-cream">Gaming</Labels>
          </ProjectCard>

          <ProjectCard
            image={"/portfolio-logo.png"}
            title={"Project Five"}
            desc={
              "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community."
            }
          >
            <Labels className="bg-lightGrey">Mobile</Labels>
            <Labels className="bg-sage">App</Labels>
            <Labels className="bg-moss text-white">React</Labels>
            <Labels className="bg-cream">Gaming</Labels>
          </ProjectCard>

          <ProjectCard
            image={"/portfolio-logo.png"}
            title={"Project Six"}
            desc={
              "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community."
            }
          >
            <Labels className="bg-lightGrey">Mobile</Labels>
            <Labels className="bg-sage">App</Labels>
            <Labels className="bg-moss text-white">React</Labels>
            <Labels className="bg-cream">Gaming</Labels>
          </ProjectCard>
        </div>
      </div>
    </div>
  )
}

export default page
