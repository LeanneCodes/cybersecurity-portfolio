"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname hook
import DefaultFooter from "./DefaultFooter";
import HomeFooter from "./HomeFooter";

const Footer = () => {
  const [isHomepage, setIsHomepage] = useState(false);
  const pathname = usePathname(); // Get the current pathname using usePathname

  useEffect(() => {
    setIsHomepage(pathname === "/");
  }, [pathname]); // Add pathname to the dependency array

  return <>{isHomepage ? <HomeFooter /> : <DefaultFooter />}</>;
};

export default Footer;
