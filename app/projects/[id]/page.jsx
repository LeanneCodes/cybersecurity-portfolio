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
import ReactMarkdown from "react-markdown";

const ProjectDetailsPage = () => {
    useBackgroundEffect();

    const { id } = useParams();
    const router = useRouter();
    const initialIndex = parseInt(id) - 1; // Convert id to index (0-based)
    const [currentIndex, setCurrentIndex] = useState(initialIndex); // Dynamic current index
    const [visible, setVisible] = useState(false);

    // Array of project details
    const projectGameDetails = [
        // {
        //     id: 1,
        //     title: "Ecommerce",
        //     description: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
        //     labels: "MongoDB, Express, NextJs, Photoshop, GSAP, JavaScript, API, Tailwind",
        //     liveLink: "https://example.com",
        //     gitHub: "https://github.com/LeanneCodes/ecommerce",
        //     imageOne: "url('/project2.png')",
        //     contentOne: "The Ecommerce project is a showcase of various display banner ads built for high-profile clients. The goal is to create visually appealing, interactive, and engaging digital ads that cater to different audiences, from gamers to the natural hair community. Each ad is designed to capture attention quickly while maintaining brand consistency and effectiveness in communicating the intended message.",
        //     imageTwo: "url('/project2.png')",
        //     contentTwo: "Technically, this project integrates various modern web development tools and frameworks. Next.js provides a fast and SEO-friendly experience, while GSAP ensures smooth animations for dynamic ad interactions. APIs are used to fetch real-time product data, and Tailwind CSS streamlines styling, making development more efficient and scalable.",
        //     imageThree: "url('/project2.png')",
        //     contentThree: "In the real world, this project demonstrates expertise in creating engaging and high-performing digital ads that drive conversions and user engagement. It highlights skills in responsive design, animation, and API integration—key aspects that companies look for in frontend developers working in the advertising and e-commerce space.",
        //     video: "https://www.youtube.com/embed/dl6etXJdjbQ?si=jRRNg3AV35FlvXr2",
        // },
        {
            id: 1,
            title: "Spellbound",
            description: "A website that displays the current bestselling books based on the New York Times API.",
            labels: "NextJs, Tailwind, JavaScript, Figma, API, MongoDB",
            liveLink: "https://spellbound-smoky.vercel.app/",
            gitHub: "https://github.com/LeanneCodes/spellbound",
            imageOne: "url('/spellbound-img1.png')",
            contentOne: `Spellbound is a web application designed to showcase the best-selling books ranked by The New York Times.\n
            It provides users with an easy and engaging way to explore books, authors, and categories from the NYT Best Seller list. 
            Whether users are looking for their next great read or simply curious about current literary trends, Spellbound makes book discovery effortless.\n
            The platform allows users to browse the latest best-sellers, search for specific titles or authors, and filter books by category. 
            To keep readers updated, it includes notifications whenever the list is refreshed.\n
            Additionally, Spellbound offers personalised book recommendations based on user interests, enhancing engagement and making the browsing experience more interactive.`,
            
            imageTwo: "url('/spellbound-img2.png')",
            contentTwo: `Spellbound is built using modern web technologies and integrates multiple APIs to deliver up-to-date book information.\n
            The key technical components include:\n
            -New York Times Books API: Retrieves real-time best-seller data to ensure book listings remain current.\n
            -MongoDB Database: Stores and manages book data efficiently, with automatic updates every 24 hours to prevent excessive API requests.\n
            -Open Library API: Provides additional details about authors, including biographies and other published works.\n
            The application also features an intuitive navigation bar, a powerful search function, and interactive modals that display detailed book and author information in a visually appealing way.`,
            
            contentThree: `Spellbound enhances the reading experience by making best-seller lists easily accessible and regularly updated.\n
            By presenting book data in a structured and engaging format, it helps users discover new books quickly and efficiently.\n
            Looking ahead, there is potential to expand Spellbound by incorporating links to global book retailers, allowing users to purchase books directly from their preferred stores.\n
            Additionally, enhancing author pages with more in-depth bibliographies and related works would further enrich the platform, making it a valuable resource for book lovers worldwide.`,
            
            video: "/videos/spellbound-demo.mp4",
        },                                    
        {
            id: 2,
            title: "GameSync",
            description: "A web application designed to help users connect with friends and schedule times in their calendar to play games.",
            labels: "React, Gaming, Tailwind, API, HTML, AdobeXD",
            liveLink: "https://gamesync-game-session-scheduler.netlify.app/",
            gitHub: "https://github.com/visualriot/Gaming-scheduler",
            imageOne: "url('/gamesync-img1.png')",
            contentOne: "GameSync is a web application designed to help gamers coordinate play sessions with friends. The idea is to make it easier for users to find common free time, reducing the frustration of trying to organise gaming sessions via scattered messages and unreliable schedules.",
            imageTwo: "url('/gamesync-img2.png')",
            contentTwo: "Built using React, the app leverages APIs to integrate with external calendar services, allowing users to sync their availability seamlessly. Tailwind CSS ensures a sleek and responsive interface, while Adobe XD was used to design an intuitive user experience before development began.",
            contentThree: "This project solves a common issue for gamers by making scheduling effortless. In a real-world scenario, this app could evolve into a full-fledged social platform for gamers, integrating chat features, matchmaking, and notifications to enhance the experience further.",
            video: "/videos/gamesync.mp4",
        },
        {
            id: 3,
            title: "Silke",
            description: "Using the OpenWeather API data to see if getting a silk press will survive the dew point.",
            labels: "React, Tailwind, HTML, API, JavaScript",
            liveLink: "https://silke.vercel.app/",
            gitHub: "https://github.com/LeanneCodes/silke",
            imageOne: "url('/silke-img1.png')",
            contentOne: "Silke is a unique project that uses weather data to help individuals decide whether their silk press will hold up against the elements. The tool provides real-time weather analysis, focusing on humidity and dew points that impact hair longevity.",
            imageTwo: "url('/silke-img2.png')",
            contentTwo: "Built with React and Tailwind CSS, Silke leverages the OpenWeather API to fetch accurate forecasts. The intuitive UI presents users with easy-to-understand recommendations based on their location and hair type.",
            contentThree: "Silke serves as a helpful resource for those navigating hair care in different climates. In the future, it could expand to include personalised recommendations and integrations with hair care brands for tailored product suggestions.",
            video: "/videos/silke.mp4",
        },
        {
            id: 4,
            title: "Oyster & Beyond Blog",
            description: "A travel blog that allows for diary entries and comments using a headless CMS.",
            labels: "React, Tailwind, HTML, API, JavaScript, HeadlessCMS, MongoDB",
            liveLink: "https://oyster-and-beyond-blog.vercel.app/",
            gitHub: "https://github.com/LeanneCodes/oyster-and-beyond-blog",
            imageOne: "url('/oyster-img1.png')",
            contentOne: "Oyster & Beyond Blog is a platform for travellers to document their journeys, share diary entries, and engage with a community through comments. The project leverages a headless CMS to provide a seamless content management experience.",
            imageTwo: "url('/oyster-img2.png')",
            contentTwo: "The blog is built using React for dynamic interactivity, Tailwind CSS for styling, and APIs to fetch and manage content. Users can easily create and edit posts while interacting with other travellers.",
            contentThree: "In the real world, this project serves as a foundation for a scalable content platform. It could evolve into a more feature-rich application with multimedia support, user profiles, and integrations with travel services.",
            video: "/videos/travelblog.mp4",
        },
        {
            id: 5,
            title: "Display Banner Ads",
            description: "Showcasing a variety of display ad banners I build for esteemed clients, such as, Eurostar, Jet2, Nationwide, Jameson, Morrisons and more.",
            labels: "Mobile, Desktop, GSAP, JavaScript, CSS, HTML, React",
            liveLink: "https://leannecodes.github.io/banner_ads/",
            gitHub: "https://github.com/LeanneCodes/banner_ads",
            imageOne: "url('/banner-img2.png')",
            contentOne: "Banner Ads is a collection of high-quality display advertisements created for well-known brands. These ads are designed to engage users and drive conversions by combining compelling visuals with smooth animations and interactive elements.",
            imageTwo: "url('/banner-img3.png')",
            contentTwo: "This project utilises GSAP for dynamic animations, ensuring seamless transitions and eye-catching effects. JavaScript, HTML, and CSS are used to build the banners, optimising them for both mobile and desktop platforms while maintaining performance and accessibility.",
            contentThree: "In a real-world setting, this project showcases expertise in frontend development for digital marketing, demonstrating the ability to create high-impact visual content that effectively communicates brand messages and enhances user engagement.",
            video: "/videos/bannerads.mp4",
        },
        {
            id: 6,
            title: "Budget App",
            description: "A basic React app that shows the user how much money they have leftover after inputting their budget and expenses.",
            labels: "React, CSS, Bootstrap, JavaScript",
            liveLink: "https://budget-tracker-react-project.netlify.app/",
            gitHub: "https://github.com/LeanneCodes/budget-tracker",
            imageOne: "url('/budget-img1.png')",
            contentOne: "Budget App is a simple and effective tool for tracking finances. Users can input their income and expenses to calculate their remaining budget, making personal finance management more accessible.",
            imageTwo: "url('/budget-img2.png')",
            contentTwo: "The app is built with React for smooth UI interactions, Bootstrap for styling, and JavaScript for handling dynamic budget calculations. Its minimalist design ensures ease of use.",
            contentThree: "In the real world, this app can help users maintain financial discipline. Future enhancements could include data visualisation, savings goals tracking, and bank account integrations.",
            video: "/videos/budgetplanner.mp4",
        },
        {
            id: 7,
            title: "Password Generator",
            description: "A password generator that takes in inputs from the user, which helps to create simple to complex passwords.",
            labels: "HTML, CSS, JavaScript, Figma",
            liveLink: "https://leannecodes.github.io/vault-key-generator/",
            gitHub: "https://github.com/LeanneCodes/vault-key-generator",
            imageOne: "url('/password-img1.png')",
            contentOne: "Password Generator is a tool designed to create secure passwords based on user preferences. Users can specify length, character types, and complexity to generate strong, unique passwords.",
            imageTwo: "url('/password-img2.png')",
            contentTwo: "The project is built using JavaScript for password logic, HTML for structure, and CSS for a clean and simple UI. Figma was used to design an intuitive interface that ensures a seamless user experience.",
            contentThree: "This tool enhances online security by helping users create strong passwords. Future improvements could include password storage options and integrations with password managers.",
            video: "/videos/passwordgenerator.mp4",
        },
        {
            id: 8,
            title: "ReadMe Generator",
            description: "Using NodeJs to create a ReadMe based on the user answering questions in the terminal.",
            labels: "NodeJs, VSCode",
            liveLink: "https://leannecodes.github.io/readme_generator/",
            gitHub: "https://github.com/LeanneCodes/readme-generator",
            imageOne: "url('/readme-img1.png')",
            contentOne: "ReadMe Generator is a Node.js-based tool that generates professional README files based on user input. It streamlines the process of creating documentation for projects.",
            imageTwo: "url('/readme-img2.png')",
            contentTwo: "The project runs in the terminal, prompting users for details about their project and formatting the input into a structured README file.",
            contentThree: "This tool saves time for developers by automating README creation. Future features could include custom templates and markdown previews.",
            video: "/videos/readmegenerator.mp4",
        }
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
                    <p>{project.contentOne}</p>
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
                    <p>{project.contentTwo}</p>
                </div>
            </div>

            <div className="flex flex-col w-full h-fit xxs:p-5 lg:p-16">
                <h3 className="font-montserrat font-bold text-[30px] mb-5">Results & Future Potential</h3>
                <p>{project.contentThree}</p>
            </div>

            {/* Video */}
            <div className="w-full h-fit xxs:p-5 lg:py-10 lg:px-20 xl:py-20 xl:px-40 flex flex-col justify-center items-center">
                <h3 className="font-montserrat font-bold text-[30px] text-center mb-5">{project.title} Demo</h3>
                {project.video && (
                    <iframe
                        src={`${project.video}?autoplay=1&mute=1`}
                        title="Project Video Demo"
                        className="w-[80%] mx-auto xxs:h-[200px] xs:h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[700px]"
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
