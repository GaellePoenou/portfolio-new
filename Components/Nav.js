import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

const Nav = ({ openNav }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className=" w-[100%] top-0 h-[12vh] bg-white py-10 mb-12 flex justify-between">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className=" cursor-pointer text-xl text-black font-burtons">
          P<span className=" text-teal-500 font-bold">G</span>W
        </h1>

        <div className="nav-link">
          <span>01.</span>Home
        </div>
        <div className="nav-link">
          <span>02.</span>About Me
        </div>
        <div className="nav-link">
          <span>03.</span>Services
        </div>
        <div className="nav-link">
          <span>04.</span>Projects
        </div>
        <div className="nav-link">
          <span>05.</span>Contact
        </div>

        <div className="">
          <ul className=" flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>

            <li>
              <a
                className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Curriculum
              </a>
            </li>
          </ul>
        </div>
        <div className="" onClick={openNav}>
          <div
            className="cursor-pointer w-8 h-8 md:hidden text-teal-500"
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
