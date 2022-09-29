import React from 'react';

import { EducationModel } from '../Education.model';
import './EducationItem.css';

type Props = {
  education: EducationModel;
};

const EducationItem = ({
  education: { date, title, field, university },
}: Props) => {
  const [startDate, endDate] = date.map((date: string) =>
    !isNaN(Date.parse(date))
      ? new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
        })
      : date
  );
  return (
    <div className="education-item">
      <div className="education-header">
        <h2 className="education-item-title">{title}</h2>
        <h2 className="education-item-field">{field}</h2>
      </div>

      <h3 className="education-item-university">{university.name}</h3>
      <h3 className="education-item-date">
        {startDate} - {endDate}
      </h3>
    </div>
  );
};

export default EducationItem;
