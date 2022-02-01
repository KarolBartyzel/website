import React from 'react';

import { EducationType } from '../Education.model';
import './EducationItem.css';

function EducationItem({
  education: { date, title, university },
}: EducationEntryPropsType) {
  const [startDate, endDate] = date.map((date: string) =>
    !isNaN(Date.parse(date))
      ? new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
        })
      : date
  );
  return (
    <div className="education-item">
      <h2 className="education-item-title">{title}</h2>
      <h3 className="education-item-university">
        <img
          className="education-item-university-icon"
          src={university.icon}
          alt={`${university.name} icon`}
        />
        {university.name}
      </h3>
      <h3 className="education-item-date">
        {startDate} - {endDate}
      </h3>
    </div>
  );
}

type EducationEntryPropsType = {
  education: EducationType;
};

export default EducationItem;
