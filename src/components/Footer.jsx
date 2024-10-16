import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {
  return (
    <footer className="bg-white md:py-[40px] py-[20px] font-body">
      <div className="container mx-auto flex flex-col font-body pr-4 pl-4">
        {/* Icon row */}
        <div className="flex justify-center gap-[32px] mb-5">
          <a href="https://www.instagram.com/suphanatttt/" target="_blank" className="text-[#656D72] hover:text-gray-600 text-[20px]">
            <FaInstagram />
          </a>
          <a href="https://github.com/suphanatchanlek30" target="_blank" className="text-[#656D72] hover:text-gray-600 text-[20px]">
            <FiGithub  className="font-medium"/>
          </a>
          <a href="https://x.com/ChanlekSup73912" target="_blank" className="text-[#656D72] hover:text-gray-600 text-[20px]">
            <FiTwitter />
          </a>
          <a href="https://www.linkedin.com/in/suphanat-chanlek-944802305/" target="_blank" className="text-[#656D72] hover:text-gray-600 text-[20px]">
            <SlSocialLinkedin />
          </a>
        </div>
        {/* Text row */}
        <p className="text-[14px] font-normal text-[#656D72] text-center">© 2024  -  Suphanat Chanlek</p>
      </div>
    </footer>
  );
};

export default Footer;
