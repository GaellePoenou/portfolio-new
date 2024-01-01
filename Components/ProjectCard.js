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
        className="cursor-pointer rounded-md"
        onClick={toggleDetails}
      />

      {showDetails && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur GitHub
          </a>
          <button onClick={toggleDetails}>Fermer</button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
