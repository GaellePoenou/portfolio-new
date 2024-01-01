// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#496a7a] text-white p-4 text-center ">
      <div className="container mx-auto">
        <div className="font-saira flex justify-center space-x-4">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#services">Services</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="mt-4">
          <p>&copy; {new Date().getFullYear()} GPW. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
