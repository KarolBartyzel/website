import React from 'react';

import ExperienceItem from './ExperienceItem';

import { Loader } from '../../../components';
import { ExperienceModel } from './Experience.model';

interface IExperienceProps {
  experiences: ExperienceModel[];
}

const Experience = ({ experiences }: IExperienceProps) => {
  return (
    <div className="rounded-md flex flex-col gap-8 justify-center items-center p-6 bg-slate-100">
      <h1 className="text-2xl font-bold font-mono text-center">
        Commercial Experience
      </h1>
      {experiences ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-y-6 gap-x-10 w-full
        [&>*]:border-b [&>*:nth-last-child(-n+1)]:border-b-0
        sm:[&>*:nth-last-child(-n+2)]:border-b-0
        lg:[&>*:nth-child(n)]:border-b-0
        [&>*]:pb-6 [&>*:nth-last-child(-n+1)]:pb-0
        sm:[&>*:nth-last-child(-n+2)]:pb-0
        lg:[&>*:nth-child(n)]:pb-0"
        >
          {experiences.map((experience, experienceIndex) => (
            <ExperienceItem key={experienceIndex} experience={experience} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Experience;
