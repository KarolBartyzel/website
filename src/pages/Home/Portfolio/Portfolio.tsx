import React, { useState } from 'react';
import { ProjectModel } from './Portfolio.model';
import { PortfolioItem } from './PortfolioItem';
import { PortfolioDemo } from './PortfolioDemo';

interface IProps {
  projects: ProjectModel[];
}

export const Portfolio = ({ projects }: IProps) => {
  const [demoProject, setDemoProject] = useState<ProjectModel | null>(null);

  return (
    <div className="rounded-md flex flex-col gap-8 justify-center items-center p-6 bg-slate-100">
      <h1 className="text-2xl font-bold font-mono text-center">Portfolio</h1>
      {projects.map((project) => (
        <PortfolioItem key={project.name} project={project} setDemoProject={() => setDemoProject(project)} />
      ))}
      {demoProject && <PortfolioDemo project={demoProject} onClose={() => setDemoProject(null)} />}
    </div>
  );
};