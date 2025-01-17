import React from 'react'
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ProfileLinks = () => {
  return (
    <ul className="xxs:gap-2 xs:gap-3 md:gap-4 flex flex-row">
        <Link href="https://github.com/LeanneCodes" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <li className="text-4xl hover:text-gray-400 transition-colors">
                <FaGithub />
            </li>
        </Link>

        <Link href="https://www.linkedin.com/in/leanne-m-goldsmith/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <li className="text-4xl hover:text-gray-400 transition-colors">
                <FaLinkedin />
            </li>
        </Link>
    </ul>
  )
}

export default ProfileLinks
