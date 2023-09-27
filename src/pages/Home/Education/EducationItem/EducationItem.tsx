import React from 'react';

import { EducationModel } from '../Education.model';

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
    <div className="flex flex-col items-center w-full border-gray-500 px-4 gap-3">
      <h2 className="font-bold text-center">{field}</h2>
      <h3 className="italic text-center">{title}</h3>
      <h3 className="underline text-center">{university}</h3>
      <h4 className="text-center">
        {startDate} - {endDate}
      </h4>
    </div>
  );
};

export default EducationItem;
