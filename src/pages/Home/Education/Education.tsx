import React from 'react';

import EducationItem from './EducationItem';

import { Loader } from '../../../components';
import { EducationModel } from './Education.model';

interface IEducationProps {
  educations: EducationModel[];
}

const Education = ({ educations }: IEducationProps) => {
  return (
    <div className="rounded-md flex flex-col gap-8 justify-center items-center p-6 bg-slate-100">
      <h1 className="text-2xl font-bold font-mono text-center">
        Higher Education
      </h1>
      {educations ? (
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full
        [&>*]:border-b [&>*:nth-last-child(-n+1)]:border-b-0
        sm:[&>*:nth-last-child(-n+2)]:border-b-0
        [&>*]:pb-6 [&>*:nth-last-child(-n+1)]:pb-0
        sm:[&>*:nth-last-child(-n+2)]:pb-0"
        >
          {educations.map((education, educationIndex) => (
            <EducationItem key={educationIndex} education={education} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Education;
