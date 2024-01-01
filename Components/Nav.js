import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Nav = ({ openNav }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" w-[100%] fixed z-[10000] top-0 h-[12vh] bg-white py-2  px-2 mb-12 flex justify-between">
      <div className="flex items-center justify-between w-full mx-1 h-full">
        <h1 className=" cursor-pointer text-2xl text-black font-burtons">
          G<span className=" text-[#496a7a] font-bold">P</span>W
        </h1>
        <div className="flex items-center justify-center w-full mx-1 h-[100%]">
          <div className="nav-link">
            <ScrollLink to="hero" smooth={true} duration={500}>
              <span>01.</span>Home
            </ScrollLink>
          </div>
          <div className="nav-link">
            <ScrollLink to="about" smooth={true} duration={500}>
              <span>02.</span>About Me
            </ScrollLink>
          </div>
          <div className="nav-link">
            <ScrollLink to="services" smooth={true} duration={500}>
              <span>03.</span>Services
            </ScrollLink>
          </div>
          <div className="nav-link">
            <ScrollLink to="projects" smooth={true} duration={500}>
              <span>04.</span>Projects
            </ScrollLink>
          </div>
          <div className="nav-link">
            <ScrollLink to="contact" smooth={true} duration={500}>
              <span>05.</span>Contact
            </ScrollLink>
          </div>
        </div>

        <div className="">
          <ul className=" flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl hidden md:block"
              />
            </li>

            <li>
              <a
                className=" bg-[#496a7a] text-white px-4 py-2 rounded-md ml-8 hover:bg-[#8aa3a7] transition-all duration-200 sm:space-x-6 font-semibold font-saira hidden md:block"
                href="CV-Gaelle-POENOU.pdf"
                download="CV-Gaelle-POENOU"
              >
                C.V.
              </a>
            </li>
          </ul>
        </div>
        <div className="" onClick={openNav}>
          <div
            className="cursor-pointer w-8 h-8 md:hidden text-[#496a7a]"
            onClick={toggleMenu}
          >
            ☰
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
