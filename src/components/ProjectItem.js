import React from "react";

function ProjectItem({ name, about, technologies }) {
  const mappedTechnologies = technologies.map((tech, index) => (
    <span key={index}>{tech}</span>
  ));

  console.log(mappedTechnologies);

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {mappedTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
;
