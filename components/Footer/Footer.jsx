"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DefaultFooter from "./DefaultFooter";
import HomeFooter from "./HomeFooter";

const Footer = () => {
  const [isHomepage, setIsHomepage] = useState(false);
  const [showHomeFooter, setShowHomeFooter] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // Check if the current page is the homepage
    setIsHomepage(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    // Update footer type based on window width
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Show HomeFooter for wider screens (sm breakpoint and above)
        setShowHomeFooter(true);
      } else {
        // Show DefaultFooter for narrower screens
        setShowHomeFooter(false);
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <div className="z-[101]">
      {isHomepage && showHomeFooter ? <HomeFooter /> : <DefaultFooter />}
    </div>
  );
};

export default Footer;
