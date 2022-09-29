import React from 'react';

import { EducationModel } from '../Education.model';
import './EducationItem.css';

type Props = {
  education: EducationModel;
};

const EducationItem = ({
  education: {
    startDate: startDateString,
    endDate: endDateString,
    title,
    field,
    university,
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
    <div className="education-item">
      <h2 className="education-item-field">{field}</h2>
      <h3 className="education-item-title">{title}</h3>
      <h3 className="education-item-university">{university}</h3>
      <h4 className="education-item-date">
        {startDate} - {endDate}
      </h4>
    </div>
  );
};

export default EducationItem;
