import React from 'react';

import { ExperienceModel } from '../Experience.model';
import Image from 'next/image';

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
    <div className="flex flex-col items-center mx-6 border-gray-500">
      <div className="flex flex-col items-center px-4 gap-3">
        {/* <img
          className="h-8"
          src={`/Images/${company.icon}`}
          alt={`${company.name} icon`}
        /> */}
        {company.name && <h2 className="font-bold">{company.name}</h2>}
        <h3 className="italic">{role}</h3>
        <h4 className="">
          {startDate} - {endDate}
        </h4>
      </div>
    </div>
  );
};

export default ExperienceItem;
