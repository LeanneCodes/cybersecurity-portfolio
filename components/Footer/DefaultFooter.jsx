import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const DefaultFooter = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="fixed bottom-0 w-full bg-black h-[86px] text-white flex flex-row justify-between items-center px-[60px]">
      <div>
        <ul className="flex flex-row gap-1">
          <Link href="/" aria-label="GitHub">
            <li className="text-2xl hover:text-gray-400 transition-colors">
              <FaGithub />
            </li>
          </Link>
          <Link href="/" aria-label="LinkedIn">
            <li className="text-2xl hover:text-gray-400 transition-colors">
              <FaLinkedin />
            </li>
          </Link>
        </ul>
      </div>
      <div>
        Copyright, Leanne M. Goldsmith {currentYear}
      </div>
    </div>
  );
};

export default DefaultFooter;
