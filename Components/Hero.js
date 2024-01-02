import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import Image from "next/image";
import banner from "../public/banner.jpg";
import TextEffect from "./TextEffect";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-1 h-full items-center pt-32 p-10 w-full mt-15vh ">
      <div className="border-r-2 border-[#496a7a]">
        <div className="w-80% mx-auto gap-3rem h-full flex flex-col justify-center items-center mt-10vh">
          <div className="">
            <h1 className="text-5xl font-bold md:text-6xl">
              Hi! Je suis Gaëlle,
            </h1>
            <TextEffect />
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Je cherche à mettre en pratique <br />
              mes compétences pour contribuer <br />à des projets stimulants.
              Contactez-moi pour discuter de vos projets!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-black-600">
              <a
                href="CV-Gaelle-Poenou.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFilePdf />
              </a>
              <a
                href="https://www.linkedin.com/in/gaellepoenou/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/GaellePoenou"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-[400px] relative items-center h-[400px] m-10 ">
        <Image
          alt="banner"
          src={banner}
          layout="fill"
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
