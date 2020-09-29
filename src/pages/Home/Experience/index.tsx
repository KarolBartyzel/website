import React from 'react';

import ExperienceEntry from './Entry';

import './index.css';

import esetIcon from './ESET.png';
import mediusIcon from './Medius.png';

const Experience: PageType = function Experience() {
  const experiences: Array<ExperienceType> = [
    {
      date: ['2017-07-01', '2017-09-30'],
      title: 'Full Stack Developer Intern',
      company: 'Medius Poland',
      icon: mediusIcon,
      product: 'MediusFlow - web application for AP invoice automation',
      responsibilities: ['Developed OData API for invoice export', 'Conducted internal presentation about OData API', 'Implemented small features and fixed bugs'],
      technologies: ['Knockout.js, CSS', 'C#, MsSQL'],
    },
    {
      date: ['2017-10-01', '2018-08-30'],
      title: 'Junior Full Stack Developer',
      company: 'Medius Poland',
      icon: mediusIcon,
      product: 'MediusFlow - web application for AP invoice automation',
      responsibilities: ['Implemented new features and fixed bugs', 'Took part in live code reviews, estimations of tasks, retrospectives', 'Reconciled and evaluated requirements directly with client'],
      technologies: ['Knockout.js, React.js, Sass', 'C#, MsSQL'],
    },
    {
      date: ['2018-09-01', 'Present'],
      title: 'Lead React.js Frontend Developer',
      company: 'ESET Poland',
      icon: esetIcon,
      product: 'Enterprise Inspector - web application for security engineers',
      responsibilities: ['Rewrite frontend application from Angular to React.js', 'Implement new features on frontend side', 'Fix bugs in existing functionalities (with backend changes)', 'Develop code style guide and automation', 'Review code and estimate tasks', 'Lead basic frontend trainings'],
      technologies: ['React.js, Sass', 'C++, MySQL, MsSQL'],
    },
  ];

  return (
    <div className="experiences">
      <h1 className="experience-title">Commercial Experience</h1>
      <div className="experience-content">
        {
          experiences.reverse().map((experience, experienceIndex) => (
            <ExperienceEntry
              key={experienceIndex}
              experience={experience} />
          ))
        }
      </div>
    </div>
  );
}

export default Experience;
