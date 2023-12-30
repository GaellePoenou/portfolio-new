import React from "react";

const XMarkIcon = () => {
  return (
    <div className="relative w-6 h-6">
      <div className="absolute h-2 w-full bg-white top-1/2 transform -translate-y-1/2 rotate-45"></div>
      <div className="absolute h-2 w-full bg-white top-1/2 transform -translate-y-1/2 -rotate-45"></div>
    </div>
  );
};

const MobileNav = ({ nav, closeNav }) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">Home</div>
        <div className="nav-link-mobile">About Me</div>
        <div className="nav-link-mobile">Services</div>
        <div className="nav-link-mobile">Projects</div>
        <div className="nav-link-mobile">Contact</div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[10000000] cursor-pointer top-8 right-8 w-8 h-8 text-[#496a7a]"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
