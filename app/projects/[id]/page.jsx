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
            contentOne: `GameSync was designed to remove the friction of planning multiplayer sessions with friends. The idea stemmed from a common frustration among gamers: finding mutually available time to play.\n
            This platform enables users to create “squads” (i.e. teams), select shared games of interest, and input individual availability. From there, the app automatically generates a personalised schedule - including estimated play durations - to streamline game sessions and help users make the most of their time online.\n
            Beyond scheduling, GameSync allows users to save their sessions, revisit past game progress, and see up-to-date availability across squad members. Individuals can also curate a personal wish list of games they’d like to play, then quickly launch new sessions based on those preferences and select which squad they’d like to play with. All session data and availability is retained, meaning a seamless, low-effort experience for all users.`,
            
            imageTwo: "url('/gamesync-img2.png')",
            contentTwo: `This project was built using React, supported by HTML, CSS, JavaScript, and styled with Tailwind CSS.\n
            Two external APIs were integrated - one for gaming information and the other for estimating playtime durations, which added a personalised and insightful layer to the experience.\n
            A major focus was on creating clean, responsive UI components and logic to dynamically cross-match game preferences and availability.\n
            Building intuitive squad and wishlist functionality was another key technical achievement, requiring thoughtful state management and component architecture.`,
            
            contentThree: `GameSync was presented as a final group project during a frontend development bootcamp, where it received an A grade and positive feedback for originality, usability and polish. It demonstrated strong teamwork, clear understanding of React principles, and an ability to design with user experience in mind.\n
            The team is currently working on expanding the project into a full-stack application. Planned improvements include:\n
            - A backend implementation to support user authentication, persistent data storage, and real-time updates\n
            - A built-in chat feature so users can communicate within the platform\n
            - Enhanced squad functionality, with more control over avatars and group customisation\n
            - UX enhancements based on user research and testing.\n
            - Potential transition to Next.js and evaluation of additional frameworks for scalability and performance.\n
            This project laid the groundwork for a genuinely useful gaming tool with broader potential, and the team is actively exploring best practices and audience insights to shape its next phase.`,
            
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
            contentOne: `Silke is a personal passion project inspired by the unique relationship between Black Afro hair and the weather. Many women in the Black community often choose their hairstyles based on environmental conditions - particularly in the UK, where humidity and dew point can make or break a hairstyle.\n
            Through extensive research and development, I discovered that dew point plays a more critical role than humidity alone in determining whether wearing natural hair out is safe or damaging.\n
            This insight became the foundation of Silke: a web app that empowers users to make informed decisions about their hair by analysing localised weather data.`,
            
            imageTwo: "url('/silke-img2.png')",
            contentTwo: `The app allows users to search for a city or town - whether it’s their current location or a travel destination - and view key metrics like temperature (Celsius or Fahrenheit), humidity, and dew point for the current day and the next five days.\n
            A smart headline system analyses this data and offers tailored advice such as “Avoid getting a silk press” or “Perfect conditions for natural styles”. Each search is automatically saved to local storage, enabling users to revisit saved cities via a dashboard. A separate tab makes switching between locations seamless, updating the dashboard in real-time.\n
            To support users in understanding the science behind hair and weather, Silke includes a comprehensive FAQ page. Users can browse all entries or use the search bar to filter results by keywords, making information quick and accessible.`,
            
            contentThree: `Silke has been well-received by members of the Black community, who appreciate the thoughtful combination of weather science and hair care.
            Planned features include:\n
            - SMS alerts: Users will be able to input their salon appointment date and location. If the dew point for that location suggests unsuitable hair conditions (e.g. a silk press is likely to revert), they will receive a text 48 hours in advance, giving them time to reschedule or cancel without losing their deposit.\n
            - Brand partnerships: There’s potential to integrate protective hair products directly into the platform, giving users real-time recommendations on what to use when styling in less-than-ideal conditions.\n
            Silke is more than a weather app - it’s a tool for empowerment, education, and proactive self-care.`,
            
            video: "/videos/silke.mp4",
        },
        {
            id: 4,
            title: "Oyster & Beyond Travel Blog",
            description: "A travel blog that allows for diary entries and comments using a headless CMS.",
            labels: "React, Tailwind, HTML, API, JavaScript, HeadlessCMS, MongoDB",
            liveLink: "https://oyster-and-beyond-blog.vercel.app/",
            gitHub: "https://github.com/LeanneCodes/oyster-and-beyond-blog",
            imageOne: "url('/oyster-img1.png')",
            contentOne: `Oyster & Beyond is my personal travel blog designed to share honest reflections on the places I’ve visited.\n
            As someone passionate about travel, storytelling, and user experience, this platform allows me to connect with an audience through in-depth travel posts, photos, and recommendations, all while maintaining editorial control through a custom-built content management workflow.`,
            
            imageTwo: "url('/oyster-img2.png')",
            contentTwo: `Built with Next.js and powered by a headless CMS, the platform allows me to:
            - Easily write and publish travel blog posts via the CMS.\n
            - Approve or decline reader comments to ensure all on-site discussions remain respectful and appropriate for a general audience.\n
            - Categorise content by continent, making it easy for users to explore destinations geographically (e.g. UK, Africa, Europe).\n
            - Feature recent or related posts in a "Recent Posts" widget. So, if a user is reading about Barcelona, for instance, they may be recommended other European travel posts.\n
            - Showcase a carousel of recent destinations at the top of the site. Clicking an image takes users directly to the related blog post.`,
            
            contentThree: `Oyster & Beyond has become my digital travel journal and a valuable resource for readers planning trips or seeking destination inspiration.\n
            As the platform grows, my next steps include:
            - Publishing more travel stories across new destinations.\n
            - Partnering with travel brands and products, for example, pairing a post on Crete with local tour suggestions.\n
            - Enhancing the blog with trip-planning features, packing lists, or affiliate links to curated products and services.\n
            - Allowing users to create personal profiles so they can track which posts they've commented on, fostering a sense of community and engagement.\n
            - Integrating with travel agencies to offer users curated travel packages, local tour recommendations, or exclusive deals tied to specific destinations covered on the blog.\n
            These future updates aim to enrich the user experience, support monetisation, and deepen the platform’s role as a trusted travel companion.`,
            
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
            contentOne: `As a Frontend Developer, I specialise in building high-performance, dynamic HTML5 display banners for a range of clients. My role bridges the gap between static creative designs and interactive ad experiences that can scale efficiently across multiple variations.

            Responsibilities:
            - Translate designs from creative agencies into responsive, animated HTML5 banners.\n
            - Build and maintain custom banner templates using HTML, CSS, JavaScrip and GSAPt.\n
            - Integrate banners with the Google Marketing Platform, ensuring compliance with technical requirements and limitations.\n
            - Create dynamic ad units powered by Google Sheets feeds, enabling real-time changes to copy, CTAs, images, and backgrounds.`,

            imageTwo: "url('/banner-img3.png')",
            contentTwo: `I code all banners using a JavaScript framework integrated with GSAP (GreenSock Animation Platform) to deliver smooth, performant animations.\n
            I ensure each banner is fully dynamic. While I may receive a single flat design, my templates support automated content variations at scale.\n
            The integration with Google Sheets allows clients to manage and preview hundreds (sometimes thousands) of ad variations, swapping in new content without any code changes.`,
            
            contentThree: `For Jet2, we received static Photoshop designs and converted them into a dynamic, animated HTML5 banner campaign. Using one coded template, we generated 300+ variations, each with unique combinations of copy, backgrounds, and calls to action-powered by a structured Google Sheet feed.

            Impact:
            - Saved clients thousands in creative production costs.\n
            - Reduced turnaround time by eliminating the need for manually designed banner variations.\n
            - Empowered clients with flexibility to update content without technical involvement.\n
            - Strengthened client relationships by showcasing scalable, performant ad solutions.

            Future Potential:
            I’m currently developing new features for our templates to give clients even more control, flexibility, and interactivity.

            These advancements will allow our agency to deliver even greater value, demonstrate innovation to prospective clients, and remain competitive in the digital advertising space.`,
            
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
