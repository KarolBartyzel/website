import React from 'react';

import { ExperienceModel } from '../Experience.model';
import './ExperienceItem.css';

type Props = {
  experience: ExperienceModel;
};

const ExperienceItem = ({
  experience: { date, role, company, agency },
}: Props) => {
  const [startDate, endDate] = date.map((date: string) =>
    !isNaN(Date.parse(date))
      ? new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
        })
      : date
  );
  return (
    <div className="experience-item">
      <h2 className="experience-item-role">{role}</h2>
      <div className="experience-item-company">
        <img
          className="experience-item-company-logo"
          src={company.icon}
          alt={`${company.name} icon`}
        />
        {agency && (
          <img
            className="experience-item-company-logo"
            src={agency.icon}
            alt={`${agency.name} icon`}
          />
        )}
      </div>
      <div className="experience-item-company">
        <h3 className="experience-item-company-name">{company.name}</h3>
        {agency && (
          <h3 className="experience-item-company-name">via {agency.name}</h3>
        )}
      </div>
      <h3 className="experience-item-date">
        {startDate} - {endDate}
      </h3>
    </div>
  );
};

export default ExperienceItem;
