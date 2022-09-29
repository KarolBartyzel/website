import React from 'react';

import { ExperienceModel } from '../Experience.model';
import './ExperienceItem.css';

type Props = {
  experience: ExperienceModel;
};

const ExperienceItem = ({
  experience: {
    startDate: startDateString,
    endDate: endDateString,
    role,
    company,
  },
}: Props) => {
  const parseDate = (date: string) =>
    !isNaN(Date.parse(date))
      ? new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
        })
      : date;
  const startDate = parseDate(startDateString);
  const endDate = parseDate(endDateString);

  return (
    <div className="experience-item">
      <div className="experience-item-border">
        <div className="experience-item-company">
          <img
            className="experience-item-company-logo"
            src={`/Images/${company.icon}`}
            alt={`${company.name} icon`}
          />
          {company.name && (
            <h2 className="experience-item-company-name">{company.name}</h2>
          )}
        </div>
        <h3 className="experience-item-role">{role}</h3>
        <h4 className="experience-item-date">
          {startDate} - {endDate}
        </h4>
      </div>
    </div>
  );
};

export default ExperienceItem;
