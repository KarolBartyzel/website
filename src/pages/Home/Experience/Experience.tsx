import React from 'react';

import ExperienceItem from './ExperienceItem';
import { experiences } from './Experience.model';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experiences">
      <h1 className="experience-title">Commercial Experience</h1>
      <div className="experience-content">
        {experiences
          .slice()
          .reverse()
          .map((experience, experienceIndex) => (
            <ExperienceItem key={experienceIndex} experience={experience} />
          ))}
      </div>
    </div>
  );
};

export default Experience;
