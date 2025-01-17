"use client";

import React, { useEffect } from 'react';
import useBackgroundEffect from "@/hooks/useBackgroundEffect";

const page = () => {
  useBackgroundEffect();

  return (
    <div>
      my projects
    </div>
  )
}

export default page
