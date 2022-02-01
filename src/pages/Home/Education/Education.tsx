import React from 'react';

import EducationItem from './EducationItem';

import { educations } from './Education.model';
import './Education.css';

const Education: PageType = function Education() {


  return (
    <div className="education">
      <h1 className="education-title">Higher Education</h1>
      <div className="education-content">
        {
          educations.reverse().map((education, educationIndex) => (
            <EducationItem
              key={educationIndex}
              education={education} />
          ))
        }
      </div>
    </div>
  );
}

export default Education;
