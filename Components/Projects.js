import React from "react";
import ProjectCard from "./ProjectCard";

import Image from "next/image";
import logo from "../public/logo.png";

const projectList = [
  {
    title: "Projet 1",
    image: "/logo.png",
    description: "Description du projet 1.",
    githubLink: "https://github.com/votre-utilisateur/projet1",
  },
  {
    title: "Projet 2",
    image: "/logo.png",
    description: "Description du projet 2.",
    githubLink: "https://github.com/votre-utilisateur/projet1",
  },
  {
    title: "Projet 3",
    image: "/logo.png",
    description: "Description du projet 3.",
    githubLink: "https://github.com/votre-utilisateur/projet1",
  },
  {
    title: "Projet 1",
    image: "/logo.png",
    description: "Description du projet 1.",
    githubLink: "https://github.com/votre-utilisateur/projet1",
  },
  {
    title: "Projet 1",
    image: "/logo.png",
    description: "Description du projet 1.",
    githubLink: "https://github.com/votre-utilisateur/projet1",
  },
  {
    title: "Projet 1",
    image: "/logo.png",
    description: "Description du projet 1.",
    githubLink: "https://github.com/votre-utilisateur/projet1",
  },
  {
    title: "Projet 1",
    image: "/logo.png",
    description: "Description du projet 1.",
    githubLink: "https://github.com/votre-utilisateur/projet1",
  },
  {
    title: "Projet 1",
    image: "/logo.png",
    description: "Description du projet 1.",
    githubLink: "https://github.com/votre-utilisateur/projet1",
  },
];

const Projects = ({}) => {
  return (
    <div className=" pt-[1rem] md:pt-[4rem] pb-[5rem]">
      <h1 className="text-center text-3xl py-1 font-saira text-[#496a7a]">
        <span className="font-bold">04.</span>Projects
      </h1>
      <p className="text-center py-2 leading-8 text-gray-800  items-center">
        Au cours de mes études, j'ai effectué un{" "}
        <span className="text-[#496a7a] font-bold">stage</span> pratique qui m'a
        permis d'acquérir des compétences concrètes dans le domaine. <br />
        Parallèlement, j'ai consacré du temps à des{" "}
        <span className="text-[#496a7a] font-bold">projets personnels</span>,
        démontrant ma passion pour le design et le développement.
      </p>

      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projectList.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px] flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
