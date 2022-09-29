import React from 'react';

import EducationItem from './EducationItem';

import './Education.css';
import { useHome } from '../../../hooks';
import { Loader } from '../../../components';

const Education = () => {
  const { educations } = useHome();

  return (
    <div className="education">
      <h1 className="education-title">Higher Education</h1>
      <div className="education-content">
        {educations ? (
          educations.map((education, educationIndex) => (
            <EducationItem key={educationIndex} education={education} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Education;
