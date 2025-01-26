"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import useBackgroundEffect from "@/hooks/useBackgroundEffect";
import Link from "next/link";
import OutlineButton from "@/components/Buttons/OutlineButton";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowUp } from "react-icons/hi2";
import Labels from "@/components/Labels/Labels";
import { RxDoubleArrowDown } from "react-icons/rx";

const ProjectDetailsPage = () => {
    useBackgroundEffect();

    const { id } = useParams();
    const router = useRouter();
    const initialIndex = parseInt(id) - 1; // Convert id to index (0-based)
    const [currentIndex, setCurrentIndex] = useState(initialIndex); // Dynamic current index
    const [visible, setVisible] = useState(false);

    // Array of project details
    const projectGameDetails = [
        {
            id: 1,
            title: "Project Title 1",
            description: "This is the description for Project 1.",
            labels: "Mobile, App, React",
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
            description: "This is the description for Project 3.",
            labels: "Gaming, Tailwind",
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
            description: "This is the description for Project 4.",
            labels: "JavaScript, API, React",
            liveLink: "https://example.com",
            gitHub: "https://github.com/example",
            imageOne: "url('/project2.png')",
            contentOne: "Content for Project 4's first section.",
            imageTwo: "url('/project2.png')",
            contentTwo: "Content for Project 4's second section.",
            imageThree: "url('/project2.png')",
            contentThree: "More details about Project 4.",
            video: "https://www.youtube.com/embed/dl6etXJdjbQ?si=jRRNg3AV35FlvXr2",
        },
        {
            id: 5,
            title: "Project Title 5",
            description: "This is the description for Project 5.",
            labels: "Gaming, Tailwind",
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
            id: 6,
            title: "Project Title 6",
            description: "This is the description for Project 6.",
            labels: "JavaScript, API, React",
            liveLink: "https://example.com",
            gitHub: "https://github.com/example",
            imageOne: "url('/project2.png')",
            contentOne: "Content for Project 4's first section.",
            imageTwo: "url('/project2.png')",
            contentTwo: "Content for Project 4's second section.",
            imageThree: "url('/project2.png')",
            contentThree: "More details about Project 4.",
            video: "https://www.youtube.com/embed/dl6etXJdjbQ?si=jRRNg3AV35FlvXr2",
        },
    ];

    const handleNext = () => {
        if (currentIndex < projectGameDetails.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };    

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, []);

    useEffect(() => {
        // Sync currentIndex with URL when it changes
        router.push(`/projects/${currentIndex + 1}`);
    }, [currentIndex, router]);

    useEffect(() => {
        // Update currentIndex when URL changes
        if (id) {
            const index = parseInt(id) - 1;
            setCurrentIndex(index);
        }
    }, [id]);

    const project = projectGameDetails[currentIndex]; // Get project dynamically
    const projectId = projectGameDetails[currentIndex].id

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
        <div className="flex flex-col top-0 w-full">
            {/* Project header and content */}
            <div className="bg-blurred-mantel-project bg-cover object-cover bg-no-repeat bg-top bg-fixed flex flex-col justify-center items-center w-full mt-[-149px] lg:h-[709px] relative">
                <div className="w-full h-full mt-[149px]">
                    <div className="w-full h-full flex justify-around items-center">
                        <div>
                            <OutlineButton
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className={`xxs:hidden md:block border-darkGrey text-darkGrey text-4xl py-1 hover:bg-darkGrey hover:text-white ${
                                    currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
                                }`}
                            >
                                <HiOutlineArrowLongLeft />
                            </OutlineButton>
                        </div>

                        <div className="text-center xxs:w-full xxs:space-y-5 xxs:p-5 lg:p-0 lg:mt-0 lg:w-1/2">
                            <h1 className="font-montserrat font-bold xxs:text-[44px] md:text-[50px] xl:text-[62px]">{project.title}</h1>
                            <h2 className="w-full">{project.description}</h2>
                            
                            <div className="mb-10 mt-3 flex flex-row justify-center gap-5 w-full">
                                {project.labels.split(",").map((label, index) => {
                                    const labelText = label.trim();
                                    return (
                                        <Labels key={index}>
                                            {labelText}
                                        </Labels>
                                    );
                                })}
                            </div>

                            <div>
                                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:font-bold">
                                    Live Link
                                </Link>{" "}
                                |{" "}
                                <Link href={project.gitHub} target="_blank" rel="noopener noreferrer" className="hover:font-bold">
                                    GitHub Link
                                </Link>
                            </div>

                            <Link href="/" onClick={(e) => {
                                e.preventDefault(); // Prevent default link behaviour

                                // Get the element and calculate the scroll position
                                const targetElement = document.getElementById('content-start');
                                if (targetElement) {
                                    const offset = 149; // Adjust this value to fine-tune the final position
                                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                                    window.scrollTo({
                                        top: elementPosition - offset, // Subtract the offset to prevent over-scrolling
                                        behavior: 'smooth',
                                    });
                                }
                            }}>
                                <div className="flex justify-center items-center text-2xl mt-10 animate-bounce">
                                    <RxDoubleArrowDown />
                                </div>
                            </Link>
                            
                        </div>

                        <div>
                            <OutlineButton
                                onClick={handleNext}
                                disabled={currentIndex === projectGameDetails.length - 1}
                                className={`xxs:hidden md:block border-darkGrey text-darkGrey text-4xl py-1 hover:bg-darkGrey hover:text-white ${
                                    currentIndex === projectGameDetails.length - 1
                                        ? "opacity-50 pointer-events-none"
                                        : ""
                                }`}
                            >
                                <HiOutlineArrowLongRight />
                            </OutlineButton>
                        </div>
                    </div>
                </div>

                {/* Active bar indicator */}
                <div className="h-[149px] flex justify-center items-center space-x-2">
                    {projectGameDetails.map((_, index) => (
                        <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-6 rounded-full ${
                            currentIndex === index
                            ? "bg-white w-12"
                            : "bg-white opacity-50 hover:bg-gray-500"
                        }`}
                        ></div>
                    ))}
                </div>
                
            </div>

            {/* Project sections */}
            <div id="content-start" className="lg:mt-0 h-fit w-full flex xxs:flex-col md:flex-row justify-center items-center">
                <div className="xxs:w-full xxs:flex-col lg:w-1/2 lg:flex-row flex justify-center items-center">
                    <div
                        style={{
                            backgroundImage: project.imageOne,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "880px",
                            width: "100%",
                        }}
                        className="xxs:h-[300px!important] sm:h-[500px!important] md:w-[400px!important] md:h-[400px!important] lg:h-[600px!important] lg:w-[100%!important]"
                    />
                </div>
                <div className="xxs:w-full lg:w-1/2 flex flex-col justify-center items-start xxs:p-5 lg:p-16 2xl:p-40">
                    <h3 className="font-montserrat font-bold text-[30px] mb-5">The Purpose of this Project</h3>
                    {project.contentOne}
                </div>
            </div>

            <div className="lg:mt-0 h-fit w-full flex xxs:flex-col md:flex-row-reverse justify-center items-center">
                <div className="xxs:w-full xxs:flex-col lg:w-1/2 lg:flex-row flex justify-center items-center">
                    <div
                        style={{
                            backgroundImage: project.imageTwo,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "880px",
                            width: "100%",
                        }}
                        className="xxs:h-[300px!important] sm:h-[500px!important] md:w-[400px!important] md:h-[400px!important] lg:h-[600px!important] lg:w-[100%!important]"
                    />
                </div>
                <div className="xxs:w-full lg:w-1/2 flex flex-col justify-center items-start xxs:p-5 lg:p-16 2xl:p-40">
                    <h3 className="font-montserrat font-bold text-[30px] mb-5">The Technical Implementation</h3>
                    {project.contentTwo}
                </div>
            </div>

            <div className="flex flex-col w-full xxs:h-[200px] lg:h-[400px] xxs:p-5 lg:p-40">
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

            {/* Video */}
            <div className="w-full h-fit xxs:p-5 lg:py-10 lg:px-20 xl:py-20 xl:px-40 flex flex-col justify-center items-center">
                <h3 className="font-montserrat font-bold text-[30px] text-center mb-5">{project.title} Demo</h3>
                {project.video && (
                    <iframe
                        src={project.video}
                        title="Project Video Demo"
                        className="w-full xxs:h-[200px] xs:h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[700px]"
                        height={800}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>

            <div className="w-full flex flex-row xxs:justify-center md:justify-between items-center xxs:px-5 lg:px-40">
                {/* Previous Button */}
                <div className="xxs:hidden md:block">
                    <Link
                        href={projectId === 1 ? "#" : `/projects/${projectId - 1}`}
                        onClick={(e) => projectId === 1 && e.preventDefault()} // Prevent navigation for the first project
                        className={`xxs:w-full xxs:mx-auto xxs:flex xxs:justify-center 2xl:justify-start ${
                            projectId === 1 ? "pointer-events-none opacity-50" : ""
                        }`}
                    >
                        <OutlineButton
                            className="xxs:mx-auto xxs:text-sm xxs:h-[50px] 2xl:ml-0 text-[20px] bg-white h-[60px] w-[200px] flex justify-around items-center relative z-10 group"
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
                <div className="xxs:hidden md:block">
                    <Link
                        href={projectId === projectGameDetails.length ? "#" : `/projects/${projectId + 1}`}
                        onClick={(e) => projectId === projectGameDetails.length && e.preventDefault()} // Prevent navigation for the last project
                        className={`xxs:w-full xxs:mx-auto xxs:flex xxs:justify-center 2xl:justify-end ${
                            projectId === projectGameDetails.length ? "pointer-events-none opacity-50" : ""
                        }`}
                    >
                        <OutlineButton
                            className="xxs:mx-auto xxs:text-sm xxs:h-[50px] 2xl:mr-0 text-[20px] bg-white h-[60px] w-[200px] flex justify-around items-center relative z-10 group"
                        >
                            Next Project
                            <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
                        </OutlineButton>
                    </Link>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button 
                className={`xxs:hidden lg:block absolute right-14 bottom-0 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white p-3 ${visible ? 'block' : 'hidden'}`}
                onClick={scrollToTop}
            >
                <HiOutlineArrowUp className="text-2xl" />
            </button>
        </div>
    );
};

export default ProjectDetailsPage;
