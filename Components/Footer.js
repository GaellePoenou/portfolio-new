// Footer.js
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#496a7a] text-white p-4 text-center ">
      <div className="container mx-auto">
        <div className="font-saira flex justify-center space-x-4">
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="mt-4">
          <p>&copy; {new Date().getFullYear()} GPW. Tous droits réservés.</p>
        </div>
        <button
          className="bg-white text-[#496a7a] px-4 py-2 rounded-md mt-4"
          onClick={scrollToTop}
        >
          Retour en haut
        </button>
      </div>
    </footer>
  );
};

export default Footer;
