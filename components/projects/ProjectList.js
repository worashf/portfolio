import React from 'react';
import projects from '../../data/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <div className="h-200 space-y-10 ">
      {projects.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
};

export default ProjectList;
