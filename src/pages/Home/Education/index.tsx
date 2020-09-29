import React from 'react';
import {} from 'react-icons/fa';

import EducationEntry from './Entry';

import './index.css';

import aghIcon from './agh.jpg';

const Education: PageType = function Education() {
  const educations: Array<EducationType> = [
    {
      date: ['2015-10-01', '2019-02-28'],
      title: 'Bachelor of Engineering',
      icon: aghIcon,
      field: 'Computer Science',
      university: 'AGH UST, Krakow',
    },
    {
      date: ['2019-03-01', '2020-07-16'],
      title: 'Master of Science',
      icon: aghIcon,
      field: 'Computer Science',
      university: 'AGH UST, Krakow',
    },
  ];

  return (
    <div className="education">
      <h1 className="education-title">Higher Education</h1>
      <div className="education-content">
        {
          educations.reverse().map((education, educationIndex) => (
            <EducationEntry
              key={educationIndex}
              education={education} />
          ))
        }
      </div>
    </div>
  );
}

export default Education;
