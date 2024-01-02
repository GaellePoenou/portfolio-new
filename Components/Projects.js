import React from "react";
import ProjectCard from "./ProjectCard";

import Image from "next/image";

const projectList = [
  {
    title: "Projet 1",
    thumbnail: "/thumbnail1.png",
    image: "/image1.png",
    description: "Landing Page Restaurant : React.js CRA.",
    githubLink: "https://github.com/GaellePoenou/landing-page",
  },
  {
    title: "Projet 2",
    thumbnail: "/thumbnail2.png",
    image: "/image2.png",
    description: "To-do-List : HTML CSS JS",
    githubLink: "https://github.com/GaellePoenou/To-Do-List",
  },
  {
    title: "Projet 3",
    thumbnail: "/thumbnail3.png",
    image: "/image3.png",
    description: "Portfolio : React.js CRA",
    githubLink: "https://github.com/GaellePoenou/portfolio",
  },
  {
    title: "Projet 4",
    thumbnail: "/thumbnail4.png",
    image: "/image4.png",
    description:
      "Convertisseur Texte à Audio: HTML CSS JS + API de synthèse vocale native",
    githubLink: "https://github.com/GaellePoenou/Convertisseur-text-audio",
  },
  {
    title: "Projet 5",
    thumbnail: "/thumbnail5.png",
    image: "/image5.png",
    description: "Meteo : HTML CSS JS + API OpenWeather ",
    githubLink: "https://github.com/GaellePoenou/meteo",
  },
  {
    title: "Projet 6",
    thumbnail: "/thumbnail6.png",
    image: "/image6.png",
    description: "NewsApp: React.js Vite + API NewsApi",
    githubLink: "https://github.com/GaellePoenou/news-app",
  },
  {
    title: "Projet 7",
    thumbnail: "/thumbnail7.png",
    image: "/image7.png",
    description: "Portfolio: HTML CSS",
    githubLink: "https://github.com/GaellePoenou/RobbieLens",
  },
  {
    title: "Projet 8",
    thumbnail: "/thumbnail8.png",
    image: "/image8.png",
    description: "TravekSite: HTML CSS JS",
    githubLink: "https://github.com/GaellePoenou/TravelSite",
  },
  {
    title: "Projet 9",
    thumbnail: "/thumbnail9.png",
    image: "/image9.png",
    description: "Ecommerce: Wordpress + Flatsome",
    githubLink: "https://afroamericain.fr",
  },
];

const Projects = ({}) => {
  return (
    <div className=" pt-[1rem] md:pt-[4rem] pb-[5rem]">
      <h1 className="text-center text-3xl py-1 font-saira text-[#496a7a]">
        <span className="font-bold">04.</span>Projects
      </h1>
      <p className="text-center py-2 leading-8 text-gray-800  items-center">
        Au cours de mes études, j &apos;ai effectué un{" "}
        <span className="text-[#496a7a] font-bold">stage</span> pratique qui m
        &apos;a permis d &apos;acquérir des compétences concrètes dans le
        domaine. <br />
        Parallèlement, j &apos;ai consacré du temps à des{" "}
        <span className="text-[#496a7a] font-bold">projets personnels</span>,
        démontrant ma passion pour le design et le développement.
      </p>

      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projectList.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] flex flex-col gap-10 p-5 lg:flex-row lg:flex-wrap"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
