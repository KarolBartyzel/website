import React from 'react';

import { useHome } from '../../../hooks';
import ExperienceItem from './ExperienceItem';

import './Experience.css';
import { Loader } from '../../../components';

const Experience = () => {
  const { experiences } = useHome();

  return (
    <div className="experiences">
      <h1 className="experience-title">Commercial Experience</h1>
      <div className="experience-content">
        {experiences ? (
          experiences.map((experience, experienceIndex) => (
            <ExperienceItem key={experienceIndex} experience={experience} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Experience;
