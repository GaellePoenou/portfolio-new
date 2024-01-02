import React from "react";
import Image from "next/image";

import { BsBraces, BsCodeSquare, BsRocketTakeoff } from "react-icons/bs";

const Services = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <h1 className="text-3xl py-1 font-saira text-[#496a7a]">
          <span className="font-bold">02.</span>Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem] items-center mt-[4rem]">
        <div
          data-aos="fade-down"
          className="hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semi bold text-center bg-[#8aa3a7] shadow-lg p-8   flex-1"
        >
          <BsRocketTakeoff className="w-[6rem] h-[6rem] mx-auto " />
          <h3 className="text-xl font-bold pt-8 pb-2">
            Développement de sites web{" "}
          </h3>
          <p className="py-2 text-lg">
            Création de sites web offrant une expérience utilisateur optimale
            sur différents appareils et tailles d &apos;écrans.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="300"
          className="hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semi bold text-center bg-[#8aa3a7] shadow-lg p-8   flex-1"
        >
          <BsCodeSquare className="w-[6rem] h-[6rem] mx-auto " />
          <h3 className="text-xl font-bold pt-8 pb-2">
            Intégration de maquettes
          </h3>
          <p className="py-2 text-lg">
            Transformation de maquettes graphiques en pages web interactives
            avec expertise et créativité.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semi bold text-center bg-[#8aa3a7] shadow-lg p-8  flex-1"
        >
          <BsBraces className="w-[6rem] h-[6rem] mx-auto " />
          <h3 className="text-xl font-bold pt-8 pb-2">
            Maintenance de sites existants
          </h3>
          <p className="py-2 text-lg">
            Correction et mise à jour de contenus et optimisation de la
            performance pour des sites déjà en ligne.
          </p>
        </div>
      </div>
      <div className="mx-auto w-1/2 p-5 border-b-4 border-[#496a7a]"></div>
    </div>
  );
};
export default Services;
