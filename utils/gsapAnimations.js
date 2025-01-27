import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export const animateElements = (className) => {
    gsap.fromTo(
        `.${className}`,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.2 }
    );
};

export const scaleBtnAnimate = (className) => {
    const tl = gsap.timeline();

    tl.fromTo(
        `.${className}`,
        { scale: 1 },
        { scale: 1.1, duration: 0.2 }
    )
    .to(
        `.${className}`,
        { scale: 1, duration: 0.2 }
    );
};

export const animateProjectCards = (className) => {
    gsap.fromTo(
        `.${className}`,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
    );
};

export const leftAnimate = (className) => {
    const isSmallScreen = window.matchMedia("(max-width: 1536px)").matches;

    gsap.fromTo(
        `.${className}`,
        {
            opacity: 0,
            [isSmallScreen ? "y" : "x"]: isSmallScreen ? -100 : -100, // If small screen, animate y, otherwise animate x
        },
        {
            opacity: 1,
            [isSmallScreen ? "y" : "x"]: 0, // Move to 0 along the respective axis
            duration: 0.5
        }
    );
};

export const rightAnimate = (className) => {
    const isSmallScreen = window.matchMedia("(max-width: 1536px)").matches;

    gsap.fromTo(
        `.${className}`,
        {
            opacity: 0,
            [isSmallScreen ? "y" : "x"]: isSmallScreen ? 100 : 100, // If small screen, animate y, otherwise animate x
        },
        {
            opacity: 1,
            [isSmallScreen ? "y" : "x"]: 0, // Move to 0 along the respective axis
            duration: 0.5
        }
    );
};