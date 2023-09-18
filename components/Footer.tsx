import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-4 text-center font-bold text-2xl flex justify-center items-center space-x-4">
      <h3>
        Made by Arjun Malhotra
      </h3>
      <Link href="https://github.com/ArjunMal1311/">
        <FaGithub />
      </Link>

      <Link href="mailto:hiarjun.malhotra2002@gmail.com">
        <FiMail />
      </Link>
    </div>
  );
};

export default Footer;
