"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import useBackgroundEffect from "@/hooks/useBackgroundEffect";
import Link from "next/link";
import OutlineButton from "@/components/Buttons/OutlineButton";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

const ProjectDetailsPage = () => {
  useBackgroundEffect();

  const { id } = useParams(); // Get the project ID from the pathname
  const projectId = parseInt(id); // Convert it to a number

  // Array of project details
  const projectGameDetails = [
    {
      id: 1,
      title: "Project Title 1",
      description: "This is the description for Project 1.",
      labels: "API, Mobile",
      liveLink: "https://www.google.com",
      gitHub: "https://www.github.com",
      imageOne: "url('/project1.png')",
      contentOne: "Content for the first section.",
      imageTwo: "url('/project1.png')",
      contentTwo: "Content for the second section.",
      imageThree: "url('/project1.png')",
      contentThree: "Additional content for the project.",
      video: "https://www.youtube.com/embed/dl6etXJdjbQ?si=jRRNg3AV35FlvXr2",
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "This is the description for Project 2.",
      labels: "React, Tailwind",
      liveLink: "https://example.com",
      gitHub: "https://github.com/example",
      imageOne: "url('/project2.png')",
      contentOne: "Content for Project 2's first section.",
      imageTwo: "url('/project2.png')",
      contentTwo: "Content for Project 2's second section.",
      imageThree: "url('/project2.png')",
      contentThree: "More details about Project 2.",
      video: "https://www.youtube.com/embed/dl6etXJdjbQ?si=jRRNg3AV35FlvXr2",
    },
    {
        id: 3,
        title: "Project Title 3",
        description: "This is the description for Project 1.",
        labels: "API, Mobile",
        liveLink: "https://www.google.com",
        gitHub: "https://www.github.com",
        imageOne: "url('/project1.png')",
        contentOne: "Content for the first section.",
        imageTwo: "url('/project1.png')",
        contentTwo: "Content for the second section.",
        imageThree: "url('/project1.png')",
        contentThree: "Additional content for the project.",
        video: "https://www.youtube.com/embed/dl6etXJdjbQ?si=jRRNg3AV35FlvXr2",
      },
      {
        id: 4,
        title: "Project Title 4",
        description: "This is the description for Project 2.",
        labels: "React, Tailwind",
        liveLink: "https://example.com",
        gitHub: "https://github.com/example",
        imageOne: "url('/project2.png')",
        contentOne: "Content for Project 2's first section.",
        imageTwo: "url('/project2.png')",
        contentTwo: "Content for Project 2's second section.",
        imageThree: "url('/project2.png')",
        contentThree: "More details about Project 2.",
        video: "https://www.youtube.com/embed/dl6etXJdjbQ?si=jRRNg3AV35FlvXr2",
      },
  ];

  // Find the project with the matching ID
  const project = projectGameDetails.find((project) => project.id === projectId);

  // Handle case where the project isn't found
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Project not found</h1>
        <p>Please check the URL or go back to the projects page.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col absolute top-0 w-full">
      <div className="bg-blurred-mantel-project bg-cover object-cover bg-no-repeat bg-top bg-fixed flex justify-center items-center w-full h-[709px] relative">
        <div className="text-center w-1/2">
          <h1 className="font-montserrat font-bold text-[62px]">{project.title}</h1>
          <h2 className="w-full">{project.description}</h2>
          <div className="mb-10">{project.labels}</div>
          <div>
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              Live Link
            </Link>{" "}
            |{" "}
            <Link href={project.gitHub} target="_blank" rel="noopener noreferrer">
              GitHub Link
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[880px] w-full flex xxs:flex-col md:flex-row justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
          <div
            style={{
              backgroundImage: project.imageOne,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "880px",
              width: "100%",
            }}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start p-40">
          <h3 className="font-montserrat font-bold text-[30px] mb-5">The Purpose of this Project</h3>
          {project.contentOne}
        </div>
      </div>

      <div className="h-[880px] w-full flex xxs:flex-col md:flex-row-reverse justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
          <div
            style={{
              backgroundImage: project.imageTwo,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "880px",
              width: "100%",
            }}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start p-40">
          <h3 className="font-montserrat font-bold text-[30px] mb-5">The Technical Implementation</h3>
          {project.contentTwo}
        </div>
      </div>

      <div className="flex flex-col w-full h-[400px] p-40">
        <h3 className="font-montserrat font-bold text-[30px] mb-5">The Results & Impact</h3>
        {project.contentThree}
      </div>

      <div
        className="w-full h-[300px]"
        style={{
          backgroundImage: project.imageThree,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="w-full h-[1000px] p-40">
        <h3 className="font-montserrat font-bold text-[30px] text-center mb-5">{project.title} Demo</h3>
        {project.video && (
          <iframe
            src={project.video}
            title="Project Video Demo"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="w-full flex flex-row justify-between px-40 mb-44">
        {/* Previous Button */}
        <div>
          <Link
            href={projectId === 1 ? "#" : `/projects/${projectId - 1}`}
            onClick={(e) => projectId === 1 && e.preventDefault()} // Prevent navigation for the first project
            className={`xxs:w-full xxs:mx-auto xxs:flex xxs:justify-center 2xl:justify-start ${
              projectId === 1 ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <OutlineButton
              className="xxs:mx-auto xxs:text-sm xxs:h-[50px] 2xl:ml-0 mb-10 text-[20px] bg-white h-[60px] w-[200px] flex justify-around items-center relative z-10 group"
            >
              <HiOutlineArrowLongLeft className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
              Previous Project
            </OutlineButton>
          </Link>
        </div>

        {/* Pagination Info */}
        <div className="flex items-center gap-4">
        {projectGameDetails.map((project) => (
            <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`text-xl ${
                    project.id === projectId ? "font-bold" : "font-normal"
                }`}
            >
                {project.id}
            </Link>
        ))}
        </div>

        {/* Next Button */}
        <div>
          <Link
            href={projectId === projectGameDetails.length ? "#" : `/projects/${projectId + 1}`}
            onClick={(e) => projectId === projectGameDetails.length && e.preventDefault()} // Prevent navigation for the last project
            className={`xxs:w-full xxs:mx-auto xxs:flex xxs:justify-center 2xl:justify-start ${
              projectId === projectGameDetails.length ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <OutlineButton
              className="xxs:mx-auto xxs:text-sm xxs:h-[50px] 2xl:ml-0 mb-10 text-[20px] bg-white h-[60px] w-[200px] flex justify-around items-center relative z-10 group"
            >
              Next Project
              <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
            </OutlineButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
