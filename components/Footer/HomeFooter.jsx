import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomeFooter = () => {

  return (
    <div className="fixed bottom-0 w-full bg-transparent h-[86px] text-black flex flex-row justify-end items-center px-[60px]">
      <div>
        <ul className="flex flex-row gap-4">
          <Link href="/" aria-label="GitHub">
            <li className="text-4xl hover:text-gray-400 transition-colors">
              <FaGithub />
            </li>
          </Link>
          <Link href="/" aria-label="LinkedIn">
            <li className="text-4xl hover:text-gray-400 transition-colors">
              <FaLinkedin />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HomeFooter;
