import React from 'react';

import { ExperienceType } from '../Experience.model';
import './ExperienceItem.css';

function ExperienceItem(props: ExperienceItemProps) {
  const { date, role, company, agency } = props.experience;
  const [startDate, endDate] = date.map((date: string) =>  !isNaN(Date.parse(date)) ? new Date(date).toLocaleDateString("en-US", {
    year: 'numeric', month: 'long',
  }) : date);
  return (
    <div className="experience-item">
      <h2 className="experience-item-role">{role}</h2>
      <div className="experience-item-company">
        <img className="experience-item-company-logo" src={company.icon} />
        {agency && <img className="experience-item-company-logo" src={agency.icon} />}
      </div>
      <div className="experience-item-company">
        <h3 className="experience-item-company-name">{company.name}</h3>
        {agency && <h3 className="experience-item-company-name">via {agency.name}</h3>}
      </div>

      {/* <div className="experience-item-company">
        <h3 className="experience-item-company-name">{company.name}</h3>
        {agency && (
          <>
            <h3 className="experience-item-company-name">via {agency.name}</h3>
            <img className="experience-item-company-logo" src={agency.icon} />
          </>
        )}
      </div> */}
      <h3 className="experience-item-date">
        {startDate} - {endDate}
      </h3>
    </div>
  );
}

type ExperienceItemProps = {
  experience: ExperienceType,
};

export default ExperienceItem;
