import React from 'react';
import { AboutMeEntry } from './AboutMeEntry';

interface Props {
  informations: Array<{
    name: string;
    value: string;
  }>;
}

export const AboutMe = ({ informations }: Props) => {
  return (
    <div className="rounded-md flex flex-col gap-8 justify-center items-center p-10 bg-slate-100">
      <h1 className="text-2xl font-bold font-mono text-center">About me</h1>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {informations.map(information => (
          <AboutMeEntry
            key={information.name}
            name={information.name}
            value={information.value}
          />
        ))}
      </div>
    </div>
  );
};

// <AboutMeEntry name="Based in" value="Kraków, Poland" />
//         <AboutMeEntry name="Available" value="6 - 16 UTC" />
//         <AboutMeEntry name="Fluent in" value="English, Spanish" />
