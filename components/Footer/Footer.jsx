"use client";

import React, { useState, useEffect } from 'react'
import DefaultFooter from './DefaultFooter';
import HomeFooter from './HomeFooter';

const Footer = () => {
    const [isHomepage, setIsHomepage] = useState(false);
  
    useEffect(() => {
      // Check the current window pathname and set state
      setIsHomepage(window.location.pathname === "/");
    }, []);
  
    return (
      <>
        {isHomepage ? <HomeFooter /> : <DefaultFooter />}
      </>
    );
  };

export default Footer
