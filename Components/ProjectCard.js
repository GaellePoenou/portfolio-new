import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative">
      <img
        src={project.image}
        alt={project.title}
        className="cursor-pointer rounded-md hover:shadow-lg transition-all duration-300"
        onClick={toggleDetails}
      />

      {showDetails && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2 text-[#496a7a]">
            {project.title}
          </h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#496a7a] hover:underline"
          >
            Voir sur GitHub
          </a>
          <div className="">
            <button
              onClick={toggleDetails}
              className="bg-[#496a7a] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#8aa3a7] transition-all duration-200"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
