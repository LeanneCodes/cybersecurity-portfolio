"use client";

import OutlineButton from "@/components/Buttons/OutlineButton";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { scaleBtnAnimate } from '@/utils/gsapAnimations';
import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      scaleBtnAnimate("scale-btn");
    }, 1000);
}, []);

  return (
    <main
      id="homepage" className="flex flex-col justify-center"
    >
      <div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={780}
          height={64}
          className="xxs:w-4/5 xxs:mx-auto xs:w-3/5 lg:w-1/2 lg:ml-[100px] 4xl:w-2/5 4xl:ml-[200px] relative z-10"
          priority
        />

        {/* test */}

        <h1 className="xxs:w-4/5 xxs:mx-auto xxs:text-center xxs:text-sm xs:w-3/4 md:text-[16px] md:w-3/5 lg:text-left lg:ml-[100px] lg:w-1/2 2xl:w-1/2 mt-[50px] 4xl:ml-[200px] w-[40%] relative z-10 text-[20px]">
          I create intuitive front-end experiences that solve real-life problems - from syncing game nights to checking if it's silk press weather.
        </h1>

        <Link href="/projects">
          <OutlineButton className="scale-btn xxs:mx-auto xxs:text-sm xxs:h-[50px] lg:ml-[100px] mt-[50px] 4xl:ml-[200px] text-[20px] bg-white h-[60px] w-[200px] flex justify-around items-center relative z-10 group">
            View Portfolio
            <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
          </OutlineButton>
        </Link>

        <Image
          alt="Triangles"
          src={"/main-triangles.png"}
          width={1182}
          height={1170}
          id="main_triangles"
          className="fixed bottom-0 right-0"
          priority
        />

      </div>
      
    </main>
  );
}
