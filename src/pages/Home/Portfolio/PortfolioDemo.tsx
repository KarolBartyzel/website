import React from 'react';
import { ProjectModel } from './Portfolio.model';
import { FaTimes } from 'react-icons/fa';

interface IProps {
  project: ProjectModel;
  onClose: () => void;
}

export const PortfolioDemo = ({ project, onClose }: IProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Iframe */}
        <iframe
          src={`/${project.name}/index.html`}
          className="w-full h-full border-none"
          title={project.prettyName}
        />
      </div>
    </div>
  );
};
