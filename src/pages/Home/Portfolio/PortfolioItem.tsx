import React from 'react';
import { ProjectModel } from './Portfolio.model';
import { FaCode, FaPlay } from 'react-icons/fa';

interface Props {
  project: ProjectModel;
  setDemoProject: () => void;
}

export const PortfolioItem = ({ project, setDemoProject }: Props) => {
  const handleCodeClick = () => {
    window.open(`https://github.com/KarolBartyzel/${project.name}`, '_blank');
  };
  

  const handleDemoClick = () => {
    setDemoProject();
  };

  return (
    <div className="flex flex-col items-center w-full border-gray-500 px-4 gap-3">
      <h2 className="font-bold text-center">{project.prettyName}</h2>
      <h3 className="italic text-center">{project.technologies.join(', ')}</h3>
      <div className="flex flex-row gap-2">
        <button
          aria-label="Code"
          title="Code"
          onClick={handleCodeClick}
          className="flex items-center gap-2 px-2 py-1 rounded-md border border-gray-300
            transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:scale-105"
        >
          <FaCode className="w-4 h-4" />
        </button>
        <button
          aria-label="Demo"
          title="Demo"
          onClick={handleDemoClick}
          className="flex items-center gap-2 px-2 py-1 rounded-md border border-gray-300
            transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:scale-105"
        >
          <FaPlay className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
