import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Exchange',
      description: 'MERN Stack',
      link: "https://exchangebarterapp.herokuapp.com/",
      repo: "https://github.com/kthom42/A-listers"
    },
    {
      name: 'TheTechBlog',
      description: 'MERN Stack',
      link: "https://sorryz23.github.io/TheTechBlog/",
      repo: "https://github.com/sorryz23/TheTechBlog"
    },
    {
      name: 'StudentResources',
      description: 'HTML/CSS',
      link: "https://marizol97.github.io/Student-resources-/",
      repo: "https://github.com/Marizol97/Student-resources-"
    },
    {
      name: 'PasswordGenerator',
      description: 'HTML/CSS/JavaScript',
      link: "https://sorryz23.github.io/Password-Generator/",
      repo: "https://github.com/sorryz23/Password-Generator"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;