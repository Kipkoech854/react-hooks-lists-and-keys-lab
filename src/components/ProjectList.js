import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const mappedProjects = projects.map((project, id) => (
    <span key ={project.id}>
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
    </span>
  ));

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {mappedProjects}
      </div>
    </div>
  );
}

export default ProjectList;
