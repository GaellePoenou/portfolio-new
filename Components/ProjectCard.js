import React, { useState } from "react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative">
      <Image
        src={project.thumbnail}
        alt={project.title}
        className="cursor-pointer rounded-md hover:shadow-lg transition-all duration-300"
        onClick={toggleDetails}
        width={500}
        height={300}
      />

      {showDetails && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <div className="flex justify-end">
              <button
                onClick={toggleDetails}
                className="text-gray-600 hover:text-gray-800 transition-all duration-200"
              >
                Fermer
              </button>
            </div>
            <div className="flex mt-4">
              <div className="w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="max-h-96 max-w-full object-contain"
                  width={500}
                  height={300}
                />
              </div>
              <div className="w-1/2 ml-4">
                <h3 className="text-2xl font-bold mb-2 text-[#496a7a]">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#496a7a] hover:underline block mb-2"
                >
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
