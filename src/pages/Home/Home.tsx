import React from 'react';

import Photo from './Photo';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import { ExperienceModel } from './Experience/Experience.model';
import { EducationModel } from './Education/Education.model';
import { ContactModel } from './Contact/Contact.model';

export interface IHomeProps {
  experiences: ExperienceModel[];
  educations: EducationModel[];
  contact: ContactModel;
}

const Home = ({ experiences, educations, contact }: IHomeProps) => (
  <div className="max-w-6xl w-full px-6 py-4 flex flex-col gap-6">
    <Photo />
    <Experience experiences={experiences} />
    <Education educations={educations} />
    <Contact contact={contact} />
  </div>
);

export default Home;
