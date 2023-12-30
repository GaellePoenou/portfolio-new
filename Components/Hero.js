import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import Image from "next/image";
import profil from "../public/profil-removebg-preview.png";
import banner from "../public/banner.jpg";
import TextEffect from "./TextEffect";

const Hero = () => {
  return (
    <div className="text-center p-10 bg-[url(../public/banner.jpg)] bg-cover  w-full bg-center mt-[12vh]">
      <div className="w-[80%] mx-auto  gap-[3rem] h-full items-center justify-center mt[10vh]">
        <div className="">
          {" "}
          <h1 className="text-5xl font-bold  md:text-6xl">
            Hi! Je suis Gaëlle,
          </h1>
          <TextEffect />
          <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            {" "}
            Je cherche à mettre en pratique <br />
            mes compétences pour contribuer <br />à des projets stimulants.
            Contactez-moi pour discuter de vos projets!
          </p>
        </div>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-black-600">
        <AiFillFilePdf />
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
    </div>
  );
};

export default Hero;
